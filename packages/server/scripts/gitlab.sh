# Read these values from .env file
# GITLAB_PASSWORD
source ../.env

export NAMESPACE=jarvis-mark

# export BASE64_OAUTH_CLIENT_SECRET=$(echo -n $OAUTH_CLIENT_SECRET | base64)
# export BASE64_OAUTH_CLIENT_ID=$(echo -n $OAUTH_CLIENT_ID | base64)
# echo "Base64 oauthclientId: $BASE64_OAUTH_CLIENT_ID"
# echo "Base64 oauthClientSecret: $BASE64_OAUTH_CLIENT_SECRET"



cat <<EOF > gitlab-serviceaccount_1.yaml
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: cicd-service-account
  namespace: ${NAMESPACE}
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: cicd-service-account-role-binding
  namespace: ${NAMESPACE}
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: admin
subjects:
  - kind: ServiceAccount
    name: cicd-service-account
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: cicd-service-account-gl-agent-role-binding
  namespace: ${NAMESPACE}
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: gitlab-agent-reqs-role
subjects:
  - kind: ServiceAccount
    name: cicd-service-account

EOF

echo "Service account for Gitlab YAML file generated."

export GITLAB_REGISTRY_SERVER=https://registry.gitlab.com
export GITLAB_USER=anyname


cat <<EOF > gitlab-k8s-command-to-create-secret_2.sh
kubectl create secret docker-registry gitlab-registry \
  --docker-server=$GITLAB_REGISTRY_SERVER \
  --docker-username=$GITLAB_USER \
  --docker-password=$GITLAB_PASSWORD

EOF