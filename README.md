# SUI Form Validation Bug

This is a repository to reproduce the bug of Form Validation feature in Semantic-UI.
The issue is tracked as #5824<https://github.com/Semantic-Org/Semantic-UI/issues/5824>.

It describes that `onSuccess` callback is never called under some conditions on IE11.

## Prerequestie

* Windows 7+ with IE11.
* JRE(Java Runtime Environment) .  Confirm `java --version` works, or install JRE or JDK from Oracle site.
* Node.js 8+, or download and install from its official site.

## Setup

Restore packages and install selenium-standalone to local environment.

```bash
npm i
```

## How to use

Kick the tests with the following command:

```bash
npm test
```

Then, IE11 should launch and run tests automatically as well as Chrome and Firefox.

### Note: Browser environments

If you have no Chrome and/or Firefox, edit wdio.conf.js to remove the items in the `capabitity` property and __XXdriver__ in the `services` property.
