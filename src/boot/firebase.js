import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebaseConfig';
import {
  getFirestore,
  connectFirestoreEmulator,
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  addDoc,
} from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8081);
const storage = getStorage();
connectStorageEmulator(storage, 'localhost', 9199);

export { db, collection, query, where, onSnapshot, orderBy, addDoc };
