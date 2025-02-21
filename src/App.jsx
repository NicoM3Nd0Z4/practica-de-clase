import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './pages/List';
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ResponsiveAppBar from './components/AppBar';

function App() {
  const [items, setItems] = useState([
    {id: 1,price: 1, name: "item 1"},
    {id: 2,price: 2, name: "item 2"},
    {id: 3,price: 3, name: "item 3"},
  ]);

  const [count, setCount] = useState(0);

  const [isLogin, setIsLogin] = useState(false);

  const sum = () => {
    setCount(count + 1, console.log(count));
  };
  const res = () => {
    setCount(count - 1, console.log(count));
  };

  const add = (item) => {
    item.id = items.length + 1;
    setItems([...items, item]);
  };

  const del = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const login = (user) => {
    if (user.username === "frumen" && user.password === "123") {
      setIsLogin(true);
      return true;   
    }
    return setIsLogin(false);
  }

  const setLogout = () => {
    setIsLogin(false);
  }

  return (
    <div>
      <BrowserRouter>
        {isLogin && <ResponsiveAppBar setLogout={setLogout} />}
        <Routes>
          <Route path="/" element={<Login login={login}/>} />
          <Route path="/add" element={<Add add={add} />} />
          <Route path="/items" element={ <List items={items} ondelete={del}/> } />
          <Route path="/nombre" element={<h1>Hola, Nicolas Mendoza</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Boton name={"suma"} click={sum}/>
      <Boton name={"resta"} click={res} />
      <Boton name={"mensaje"} click={() => alert("hola")} /> */}
    </div>
  );
}

export default App;
