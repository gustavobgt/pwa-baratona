importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');
firebase.initializeApp({
  apiKey: 'AIzaSyDNgxdsUymwLZiMDzgy5b09hMxGC2O423U',
  authDomain: 'imperial-tecnologia.firebaseapp.com',
  projectId: 'imperial-tecnologia',
  storageBucket: 'imperial-tecnologia.appspot.com',
  messagingSenderId: '660712374812',
  appId: '1:660712374812:web:6cf062e62ff951590a15d9',
  measurementId: 'G-1VLCVRBER2',
});
const messaging = firebase.messaging();