//import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
/* import './App.css'; */
import "./Midterms.css";
import { Routes, Route /* , useLocation */ } from "react-router-dom";
//import { Component } from 'react';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Review from "./pages/Review";
import About from "./pages/About";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/product-detail" element={<ProductDetail />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/review" element={<Review />} />
				<Route path="/about" element={<About />} />
			</Route>
		</Routes>
	);
}

export default App;
