# Docs

For the pipeline to run, we'll need:

Gitlab service account: <https://dhp-docs.prod.apps.bsci.com/#/how-to/kube-service-accounts>

Gitlab runner configured (which will need the service account above): <https://dhp-docs.prod.apps.bsci.com/#/how-to/cicd-runners>

Container registry setup <https://dhp-docs.prod.apps.bsci.com/#/how-to/gitlab-cr>. This includes setting up the Gitlab secrets that k8s will use to pull images from the registry.

## Pipeline

The pipeline is defined in `.gitlab-ci.yml`. It will run on every push to the `main` branch.

https://dhp-docs.prod.apps.bsci.com/#/how-to/application-deployment

## Deploying
