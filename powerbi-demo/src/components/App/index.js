import React, { useState } from "react"
import Header from "../Header"
//import info from "../../info/graficas.json"
import Context from "../../context.js"

import { PowerBIEmbebd } from 'powerbi-client-react';
import { models, Embebd, service } from 'powerbi-client'
import './styles.css';

function App() {
  return (
    <Context.Provider //value={info}
    >
    <Header/>
    </Context.Provider>
  );
}

export default App;
