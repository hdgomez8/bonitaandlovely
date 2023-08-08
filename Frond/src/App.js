import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import Products from "./components/Products/Products";
import AboutUs from "./views/AboutUs/AboutUs";
import Contact from "./views/Contact/Contact";
import DevTeam from './views/DevTeam/devTeam.jsx'
import FAQs from "./views/FAQs/FAQs"
import Catalogo from "./views/Catalogo/Catalogo.jsx";
import Chatbot from "react-chatbot-kit";
import ProductList from './components/ProducList/ProductList';
import Sidebar from './components/Sidebar/sidebar';
import Form from "./views/Form/Form";
import Profile from "./views/Profile/Profile";
import Configs from "./components/ChatBot/Configs";
import MessageParser from "./components/ChatBot/MessageParser";
import Detail from "../src/views/Detail/Detail";

import Dashboard from "./components/Dashboard/Dashboard";
import axios from "axios"
//para no repetir el puerto:(se está configurando una URL base que se utilizará como prefijo para todas las peticiones realizadas con Axios) 
axios.defaults.baseURL = "http://localhost:3001/"

// import ActionProvider from "./components/ChatBot/ActionProvider";


function App () {
  return (
    <div className="flex">
      <div className="w-1/5 h-screen bg-gray-100">
        <Sidebar>
          <Link to="/categorias">
            <button>Categorías</button>
          </Link>
        </Sidebar>
      </div>
      <div className="w-4/5">
        <div className="routes-container">
          <Routes>
            <Route exact path="/categorias" element={<ProductList />} />
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/products" element={<Products />} />
            {/* <Route path="/product/:id" element={<ProductDetail />} />
            <Route exact path="/formulario" element={<Formulario />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/reviews" element={<Reviews></Reviews>} />
            <Route path="/createProduct" element={<CreateProduct></CreateProduct>} /> */}
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="chatbot-container">
          <Chatbot
            config={Configs}
            messageParser={MessageParser}
            // actionProvider={ActionProvider}
          />
        </div>
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/devTeam" element={<DevTeam />} />
        <Route path="/form" element={<Form />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/dashboard" element = {<Dashboard/>}/>

      </Routes>
      <div className="chatbot-container">
        <Chatbot
          config={Configs}
          messageParser={MessageParser}
          // actionProvider={ActionProvider}
        />

      </div>
    </div>
  );
}

export default App;