import { Button, Container, Grid, TextField } from "@mui/material";
import { collection, serverTimestamp, doc, setDoc, orderBy, query, getDocs, addDoc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { Context } from "./../index";
import Loader from "./Loader";

const Chat = () => {
  const { auth, db } = useContext(Context);
  const [document, setDocument] = useState(undefined);

  const [user] = useAuthState(auth);
  const [value, setValue] = useState();

  const sendMessage = async () => {
    await addDoc(collection(db, "messages"), {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: serverTimestamp(),
    });

    setValue("");
  };

  useEffect(() => {
    (async () => {
      const messagesCol = collection(db, "messages");
      const q = query(messagesCol, orderBy("createdAt"));
      const docSnap = await getDocs(q);

      const dataFromDb = [];

      docSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        dataFromDb.push(doc.data());
      });

      setDocument(dataFromDb);
    })();
  }, []);

  console.log(document)

  if (!document) {
    return <Loader/>
}

  return (
    <Container>
      <Grid container style={{ height: window.innerHeight - 200, marginTop: 20 }} justifyContent={"center"}>
        <div style={{ width: "80%", height: "60vh", border: "1px solid gray", overflowY: "auto" }}>
          {document.map(message => (<div>{message.text}</div>))}
        </div>
        <Grid container direction={"column"} alignItems={"flex-end"} style={{ width: "80%" }}>
          <TextField variant={"outlined"} fullWidth value={value} onChange={(e) => setValue(e.target.value)} />
          <Button onClick={sendMessage}>Send</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
