# qwitter (qwitter)

A Quasar Project

A Cross-Platform Twitter Clone created with Quasar Framework v2, VueJS 3 & Firebase 9.

## Setup Firebase
- Create a firease config file by running the command:
```bash
   cp firebaseConfig.example.js firebaseConfig.js
```
- Create a new Firebase project named Qwitter
- Create a Web App named Qwitter
- Copy the config from the code sample that appears and add it to firebaseConfig.js
- Create a Cloud Firestore database - make sure you choose "Start in test mode"
## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
