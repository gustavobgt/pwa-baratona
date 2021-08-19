import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/messaging'


export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: 'AIzaSyDNgxdsUymwLZiMDzgy5b09hMxGC2O423U',
    authDomain: 'imperial-tecnologia.firebaseapp.com',
    projectId: 'imperial-tecnologia',
    storageBucket: 'imperial-tecnologia.appspot.com',
    messagingSenderId: '660712374812',
    appId: '1:660712374812:web:6cf062e62ff951590a15d9',
    measurementId: 'G-1VLCVRBER2',
  });
}


export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('Your token is:', token);
    
    return token;
  } catch (error) {
    console.error(error);
  }
}

