import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Button from "./components/Button"
import List from "./components/List"
import Add from "./components/Add"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import CredentialsSignInPage from "./components/Login";

function App() {
  const [items, setItems] = useState([
	  {id: 1, name: "item1", price:10},
	  {id: 2, name: "item2", price:20}, 
	  {id: 3, name: "item3", price:30}
  ]);

  const [count, setCount] = useState(0);

  const nombre = "Peter";
  const elemento = <h2> hola, {nombre}</h2>;

  const sum = () => {
    setCount(count + 1);
    console.log(count);
  };

  const add = (item) => {
    console.log('hola');
    // called a spread, is like a push [...arr, itemToPush]
    setItems([...items, item]);
  };

  const del = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };


  return (
    <div>
      <BrowserRouter>
      <ResponsiveAppBar/>
        <Header />
        <Routes>
          <Route path="/login" element={<CredentialsSignInPage />}/>
          <Route path="/add" element={<Add add={add}/>}/>
          <Route path="/items" element={<List items={items} ondelete={del}/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
      {/* {count}
      <Button name = "suma" click={sum}/>
      <Button name = "mensaje" click={() => alert("hola")}/>
      <Add add={add}/> */}
      

    </div>
  );
}

export default App;
