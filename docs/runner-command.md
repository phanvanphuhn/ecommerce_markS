# Backend build runner

docker container run -it -v /tmp:/tmp -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/docker/containers:/var/lib/docker/containers:ro -e ACCOUNT_UUID={c5cdaef7-bd22-4f59-bc8c-d2a44a36f4f6} -e REPOSITORY_UUID={ba834119-eac9-4bf6-872f-f92b1d0dc787} -e RUNNER_UUID={7b9bd488-c86e-5ffa-998a-c8b68c7bf8c0} -e RUNTIME_PREREQUISITES_ENABLED=true -e OAUTH_CLIENT_ID=KEn1tlcvUSPPl0vMkJoYJnWsfJpymzpN -e OAUTH_CLIENT_SECRET=ATOA0EuNgv4qVFkrhbG0pMAK8upz_godTosOrVnJH3jEbrUsuaYoMwHgkjxOzitsRVtqBA14DD65 -e WORKING_DIRECTORY=/tmp --name runner-7b9bd488-c86e-5ffa-998a-c8b68c7bf8c0 docker-public.packages.atlassian.com/sox/atlassian/bitbucket-pipelines-runner:1


# Example
pipelines:
  default:
      - step:
          runs-on:
            - self.hosted
            - linux
          script