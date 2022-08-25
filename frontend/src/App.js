import React from "react";
import CardThread from "./components/CardThread/CardThread";
import ThreadForm from "./components/ThreadForm/ThreadForm";

function App() {
  return (
    <div style={{backgroundColor: 'beige'}}>
      <CardThread />
      <div style={{display:'flex',alignItems:"center",justifyContent:'center',flexDirection:'column'}}>
        <ThreadForm />
      </div>
    </div>
  );
}

export default App;
