import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebaseConfig';
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export {
  db,
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
};
