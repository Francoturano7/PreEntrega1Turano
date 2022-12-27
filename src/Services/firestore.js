import { initializeApp } from "firebase/app";

import {getFirestore, collection, getDocs, getDoc, doc, query, where} from "firebase/firestore";
import ItemDetailContainer from "../components/ItemDetail/ItemDetailContainer";
const firebaseConfig = {
  apiKey: "AIzaSyBoYR2WV2JpRC6Q7iSyxJAj82ag_7FkLek",
  authDomain: "bati-indumentaria-react.firebaseapp.com",
  projectId: "bati-indumentaria-react",
  storageBucket: "bati-indumentaria-react.appspot.com",
  messagingSenderId: "325287403130",
  appId: "1:325287403130:web:e28c3fef8ec6c5176565c3"
};


const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)


export default async function getItems(){
const colectionProductsRef= collection(DB,"products");
const documentSnapshot= await getDocs(colectionProductsRef);
const documentsData = documentSnapshot.docs.map(doc =>{
   
    return {
        ...doc.data(),
        id: doc.id
    };
});
return documentsData;
}

export async function  getSingleItem(idParams){
const docRef = doc(DB, "products", idParams);
const docSnapshot= await getDoc(docRef);
const itemData= docSnapshot.data();
itemData.id= docSnapshot.id;
return itemData
}

export async function getItemsByCategory(categoryParams){
const collectionRef= collection(DB,"products");
const queryCat= query(collectionRef,where("categoria","==",categoryParams))
const documentSnapshot= await getDocs(queryCat);
const documentsData = documentSnapshot.docs.map(doc =>{
   
    return {
        ...doc.data(),
        id: doc.id
    };
});
return documentsData;
}
