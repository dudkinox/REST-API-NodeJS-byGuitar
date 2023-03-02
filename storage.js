const admin = require("firebase-admin");
const config = require("./config");
const FirebaseApp = admin.initializeApp({
  credential: admin.credential.cert(config.firebaseConfig),
  storageBucket: config.firebaseConfig.storageBucket,
});

module.exports = FirebaseApp.storage();
