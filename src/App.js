import {collection, getDocs, query, doc, deleteDoc, where,} from "firebase/firestore";

import React, { useEffect, useState } from "react";
import firebase, { db } from "./componente/firebase";
import AppForm from "./componente/AppForm";



function App() {
    ////////////////////////Definir lectura/////////////////////////
    const [idActual, setIdActual] = useState("");    ////PARA actuañizar y eliminar
    const [docsBD, setDocsBD] = useState([]);        ////PARA LECTURA A BD
    const [orden, setOrden] = useState(0); 
    const i = 1; 

    //////////////LECTURA A BD/////////////////////////////////
    const fnRead = async () =>{
      const tblPersona = query(collection(db, "persona"), where ("nombre","!=", ""));
      const xDatosBD = await getDocs(tblPersona);
      const xDoc = [];

      xDatosBD.forEach((doc) => {
        xDoc.push({id: doc.id, ...doc.data()});
      });
      setDocsBD(xDoc);
      //console.log("Lectura a BD");
    }

    useEffect( () => {
      fnRead();
    }, [idActual]);

    //////////////ELIMINAR/////////////////////////////////
    const fnDelete = async (xId) =>{
      if (window.corfirm("Confirme para eliminar")) {
        await deleteDoc(doc(db, 'persona', xId));
        console.log("Se elimino ...."+ xId);
      }
      fnRead();

    }


      return (
        <div style={{background:"greenyellow", width:"350px", padding:"10px"}}>
          <h1> REGISTRO DE PERSONAS</h1>
          <AppForm {...{idActual, setIdActual, fnRead}}/>
         {
          docsBD.map( (p) =>
            <p key={p.xId}>
                N.{i} - {p.nombre} ---
                <span onClick={() => fnDelete(p.xId)}>x</span>
                ---
                <span onClick={() => setIdActual(p.xId)}>A</span>
                ---
            </p>
          )
         }
         
        </div>
      );
}

export default App;