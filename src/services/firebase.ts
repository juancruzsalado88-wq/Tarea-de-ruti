import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore, initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAaA7P_QZhPbgZFTtyf2p4EyGq-nDw24dg',
  authDomain: 'aplicacion-1e9ec.firebaseapp.com',
  projectId: 'aplicacion-1e9ec',
  storageBucket: 'aplicacion-1e9ec.firebasestorage.app',
  messagingSenderId: '128465743553',
  appId: '1:128465743553:web:759bf355bf9778112eae40',
};

const yaInicializada = getApps().length > 0;
const app = yaInicializada ? getApp() : initializeApp(firebaseConfig);

export const db = yaInicializada
  ? getFirestore(app)
  : initializeFirestore(app, { experimentalForceLongPolling: true });