# Read these values from .env file
# ACCOUNT_UUID
# REPOSITORY_UUID
# RUNNER_UUID
# OAUTH_CLIENT_ID
# OAUTH_CLIENT_SECRET

source ../.env

export BASE64_OAUTH_CLIENT_ID=$(echo -n $OAUTH_CLIENT_ID | base64)
export BASE64_OAUTH_CLIENT_SECRET=$(echo -n $OAUTH_CLIENT_SECRET | base64)

echo "Base64 oauthclientId: $BASE64_OAUTH_CLIENT_ID"
echo "Base64 oauthClientSecret: $BASE64_OAUTH_CLIENT_SECRET"

cat <<EOF > bitbucket_runner_secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: runner-oauth-credentials
  labels:
    accountUuid: ${ACCOUNT_UUID}
    repositoryUuid: ${REPOSITORY_UUID}
    runnerUuid: ${RUNNER_UUID}
data:
  oauthClientId: ${BASE64_OAUTH_CLIENT_ID}
  oauthClientSecret: ${BASE64_OAUTH_CLIENT_SECRET}

EOF

echo "Secret YAML file generated."

cat <<EOF > bitbucket_runner_config.yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: runner
spec:
  template:
    metadata:
      labels:
        accountUuid: ${ACCOUNT_UUID}
        repositoryUuid: ${REPOSITORY_UUID}
        runnerUuid: ${RUNNER_UUID}
    spec:
      containers:
        - name: runner
          image: docker-public.packages.atlassian.com/sox/atlassian/bitbucket-pipelines-runner
          env:
            - name: ACCOUNT_UUID
              value: ${ACCOUNT_UUID}
            - name: REPOSITORY_UUID
              value: ${REPOSITORY_UUID}
            - name: RUNNER_UUID
              value: ${RUNNER_UUID}
            - name: OAUTH_CLIENT_ID
              valueFrom:
                secretKeyRef:
                  name: runner-oauth-credentials
                  key: oauthClientId
            - name: OAUTH_CLIENT_SECRET
              valueFrom:
                secretKeyRef:
                  name: runner-oauth-credentials
                  key: oauthClientSecret
            - name: WORKING_DIRECTORY
              value: "/tmp"
          volumeMounts:
            - name: tmp
              mountPath: /tmp
            - name: docker-containers
              mountPath: /var/lib/docker/containers
              readOnly: true # the runner only needs to read these files never write to them
            - name: var-run
              mountPath: /var/run
        - name: docker-in-docker
          image: docker:20.10.5-dind
          securityContext:
            privileged: true # required to allow docker in docker to run and assumes the namespace your applying this to has a pod security policy that allows privilege escalation
          volumeMounts:
            - name: tmp
              mountPath: /tmp
            - name: docker-containers
              mountPath: /var/lib/docker/containers
            - name: var-run
              mountPath: /var/run
      restartPolicy: OnFailure # this allows the runner to restart locally if it was to crash
      volumes:
        - name: tmp # required to share a working directory between docker in docker and the runner
        - name: docker-containers # required to share the containers directory between docker in docker and the runner
        - name: var-run # required to share the docker socket between docker in docker and the runner
    # backoffLimit: 6 # this is the default and means it will retry upto 6 times if it crashes before it considers itself a failure with an exponential backoff between
    # completions: 1 # this is the default the job should ideally never complete as the runner never shuts down successfully
    # parallelism: 1 # this is the default their should only be one instance of this particular runner
EOF

echo "Config YAML file generated."