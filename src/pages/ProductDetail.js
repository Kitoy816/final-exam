import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Data from "./Data";
import { useLocation, Link } from "react-router-dom";
import useData from "../hooks/useData";

import j1Left from "../images/j1Left.jpg";
import j1Right from "../images/j1Right.jpg";

import j2Left from "../images/j2Left.jpg";
import j2Right from "../images/j2Right.jpg";

import j3Left from "../images/j3Left.jpg";
import j3Right from "../images/j3Right.jpg";

import j4Left from "../images/j4Left.jpg";
import j4Right from "../images/j4Right.jpg";

import j5Left from "../images/j5Left.jpg";
import j5Right from "../images/j5Right.jpg";

import j6Left from "../images/j6Left.jpg";
import j6Right from "../images/j6Right.jpg";

import j7Left from "../images/j7Left.jpg";
import j7Right from "../images/j7Right.jpg";

import j8Left from "../images/j8Left.jpg";
import j8Right from "../images/j8Right.jpg";

import j9Left from "../images/j9Left.jpg";
import j9Right from "../images/j9Right.jpg";

const ProductDetail = () => {
	let item = { picUrl: "", title: "", price: 0, qty: 0, amount: 0 };

	const { data, setData } = useData();
	let items = data.items;
	const [ItemDetail, setItemDetail] = useState({});
	const [pic1, setPic1] = useState("");
	const [pic2, setPic2] = useState("");
	const [itemIndex, setItemIndex] = useState(0);
	//const [numItems, setNumItems] = useState(0);

	const handleAddtoCart = () => {
		const foundIdx = items.findIndex(
			(item) => item.title === ItemDetail.Title
		);
		let newItems = [];
		if (foundIdx < 0) {
			item.picUrl = pic1;
			item.title = ItemDetail.Title;
			item.price = ItemDetail.Price;
			item.qty = 1;
			item.amount = ItemDetail.Price;
			items.push(item);
		} else {
			items[foundIdx].qty += 1;
			items[foundIdx].amount =
				items[foundIdx].qty * items[foundIdx].price;
		}

		setData({ items: items, num: items.length });

		console.log("data =", data);
	};

	//console.log(Data)
	//const {ItemIndex} = useParams()
	console.log("itemIndex =", itemIndex);
	let search = useLocation().search;

	useEffect(() => {
		setItemIndex(new URLSearchParams(search).get("itemIndex"));

		setItemDetail(Data[itemIndex]);

		if (ItemDetail.Pic1 === "j1Left") {
			setPic1(j1Left);
		} else if (ItemDetail.Pic1 === "j2Left") {
			setPic1(j2Left);
		} else if (ItemDetail.Pic1 === "j3Left") {
			setPic1(j3Left);
		} else if (ItemDetail.Pic1 === "j4Left") {
			setPic1(j4Left);
		} else if (ItemDetail.Pic1 === "j5Left") {
			setPic1(j5Left);
		} else if (ItemDetail.Pic1 === "j6Left") {
			setPic1(j6Left);
		} else if (ItemDetail.Pic1 === "j7Left") {
			setPic1(j7Left);
		} else if (ItemDetail.Pic1 === "j8Left") {
			setPic1(j8Left);
		} else if (ItemDetail.Pic1 === "j9Left") {
			setPic1(j9Left);
		}

		if (ItemDetail.Pic2 === "j1Right") {
			setPic2(j1Right);
		} else if (ItemDetail.Pic2 === "j2Right") {
			setPic2(j2Right);
		} else if (ItemDetail.Pic2 === "j3Right") {
			setPic2(j3Right);
		} else if (ItemDetail.Pic2 === "j4Right") {
			setPic2(j4Right);
		} else if (ItemDetail.Pic2 === "j5Right") {
			setPic2(j5Right);
		} else if (ItemDetail.Pic2 === "j6Right") {
			setPic2(j6Right);
		} else if (ItemDetail.Pic2 === "j7Right") {
			setPic2(j7Right);
		} else if (ItemDetail.Pic2 === "j8Right") {
			setPic2(j8Right);
		} else if (ItemDetail.Pic2 === "j9Right") {
			setPic2(j9Right);
		}
		//console.log(ItemDetail.Pic1)
	}, [pic1, pic2, itemIndex]);

	return (
		<>
			<Navbar numberOfItems={data.items.length} />
			<div className="container d-flex ">
				<div className="col-8 mt-5">
					<div className="col-5 d-flex">
						<img
							src={pic1}
							className="img-fluid img-thumbnail rounded  m-3"
							alt="Picture1"
						/>
						<img
							src={pic2}
							className="img-fluid img-thumbnail rounded m-3"
							alt="Picture2"
						/>
					</div>
					<div>
						<h1 className="text-light">{ItemDetail.Title} </h1>
						<h2 className="text-light">
							{ItemDetail.Price?.toLocaleString("en-PH", {
								style: "currency",
								currency: "PHP",
							})}
						</h2>
						<h2 className="text-light">{ItemDetail.Info}</h2>
					</div>
				</div>

				<div className="col-4 mt-5">
					<h3 className="text-light">Select Size</h3>
					<div
						className="btn-group"
						role="group"
						aria-label="Basic outlined example"
					>
						<div className="container d-block">
							<div className="container d-flex justify-content-evenly">
								<button
									type="button"
									className="btn btn-outline-primary text-light m-1 px-3 border-light"
								>
									6
								</button>
								<button
									type="button"
									className="btn btn-outline-primary text-light m-1 px-3 border-light"
								>
									7
								</button>
								<button
									type="button"
									className="btn btn-outline-primary text-light m-1 px-3 border-light"
								>
									8
								</button>
								<button
									type="button"
									className="btn btn-outline-primary text-light m-1 px-3 border-light"
								>
									9
								</button>
							</div>

							<div className="container d-flex justify-content-evenly">
								<button
									type="button"
									className="btn btn-outline-primary text-light m-1 border-light"
								>
									10
								</button>
								<button
									type="button"
									className="btn btn-outline-primary text-light m-1 border-light"
								>
									11
								</button>
								<button
									type="button"
									className="btn btn-outline-primary text-light m-1 border-light"
								>
									12
								</button>
								<button
									type="button"
									className="btn btn-outline-primary text-light m-1 border-light"
								>
									13
								</button>
							</div>
							<div className="container d-flex justify-content-evenly">
								<button
									type="button"
									className="btn btn-light m-3"
									onClick={handleAddtoCart}
								>
									Add to Cart
								</button>
							</div>
							<div className="container d-flex justify-content-evenly">
								<button
									type="button"
									className="btn btn-light m-3"
								>
									<Link to="/cart">Go to Cart &gt;&gt;</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetail;
