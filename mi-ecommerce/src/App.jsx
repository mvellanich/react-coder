import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button/Button";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      {/* <div>
        <h1>Mi E-Commerce</h1>
        <Button text="Boton Uno" />
        <Button text="Boton Dos" />
      </div> */}
      <ItemListContainer mensaje="Esta es la Tienda Nube de VXTECH" />
    </>
  );
}

export default App;
