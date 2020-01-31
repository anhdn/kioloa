const admin = require('firebase-admin')
let serviceAccount = require('../../kioloa-firebase-adminsdk-b6s9e-32032849ea.json')
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://kioloa.firebaseio.com'
  })
}

const db = admin.firestore()

export default db
