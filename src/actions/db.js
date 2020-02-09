
import firebase from '@firebase/app'
import '@firebase/firestore'

export function loadDB() {
  try {
    const config = {
      apiKey: 'AIzaSyA-Z1aHk6eBSnvrjtJDp2PgwidXqCGo9Ew',
      authDomain: 'inspired-tiger-267406.firebaseapp.com',
      databaseURL: 'https://inspired-tiger-267406.firebaseio.com',
      projectId: 'inspired-tiger-267406',
      storageBucket: 'inspired-tiger-267406.appspot.com',
      messagingSenderId: '977717313336',
      appId: '1:977717313336:web:2601c379f65146ab518bcd',
      measurementId: 'G-6T4MVZKW1Q'
    };
    firebase.initializeApp(config);
  } catch (err) {
    // we skip the 'already exists' message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }

  return firebase;
}
