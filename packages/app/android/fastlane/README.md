fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## Android

### android uploadToDeploygate

```sh
[bundle exec] fastlane android uploadToDeploygate
```

Build and upload to Deploygate.

### android playstore

```sh
[bundle exec] fastlane android playstore
```

Build and upload to CHPlay.

### android uploadToAppcenter

```sh
[bundle exec] fastlane android uploadToAppcenter
```

Build and upload to App Center.

### android uploadToFirebase

```sh
[bundle exec] fastlane android uploadToFirebase
```

Build and upload to Firebase.

### android increment_version

```sh
[bundle exec] fastlane android increment_version
```

Increase build version.

### android uploadAPK

```sh
[bundle exec] fastlane android uploadAPK
```

Build and push a new build to FireBase App Distribution

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
