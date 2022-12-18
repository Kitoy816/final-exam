import React from "react";
import LogoImg from "../images/logo2.png";
import { Link } from "react-router-dom";
//import Data from "../pages/Data";
//import useData from "../hooks/useData";
import cartImg from "../images/cart.png";

const Navbar = ({ numberOfItems }) => {
	return (
		<>
			<nav
				className="navbar navbar-expand-lg navbar-light bg-light "
				style={{
					paddingTop: "0px",
					marginTop: "0px",
					backgroundColor: "#0005",
				}}
			>
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<img
							src={LogoImg}
							alt="Logo"
							width="140"
							height="100"
						/>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse d-flex justify-content-end pe-5"
						id="navbarNav"
					>
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to="/"
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									About
								</Link>
							</li>
							<li>
								<Link className="nav-link" to="/cart">
									{" "}
									<img
										src={cartImg}
										alt="Cart"
										style={{
											width: "20px",
											height: "20px",
										}}
									/>
									<span
										style={{
											marginLeft: "4px",
											color: "red",
										}}
									>
										{numberOfItems ? numberOfItems : 0}
									</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* <nav>
			<img src="../images/logo2.png" className="img" alt="logo"/>
			<ul>
				
				
				<li><a href="#">SERVICES</a></li>
				<li><a href="#">CONTACTS</a></li>
				
				<a href="#"><button className="button">LOG IN</button></a>
				<a href="#"><button className="button">SIGN UP</button></a>
			</ul>
		</nav> */}
		</>
	);
};

export default Navbar;
