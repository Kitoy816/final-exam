import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";

import useData from "../hooks/useData";

const Cart = () => {
	//let items = [];
	const { data, setData } = useData();
	let items = data?.items;
	console.log("dataInCart =", items);
	let idx = 0;
	//const [ItemDetail, setItemDetail] = useState({});
	//const [pic, setPic] = useState("");
	//const [itemIndex, setItemIndex] = useState(0);
	const [totalAmount, setTotalAmount] = useState(0);

	//console.log(Data)
	//const {ItemIndex} = useParams()
	// console.log("itemIndex", itemIndex);
	// let search = useLocation().search;

	const handleAddItem = (product) => {
		const foundIdx = items.findIndex(
			(item) => item.title === product.title
		);
		if (foundIdx >= 0) {
			items[foundIdx].qty += 1;
			items[foundIdx].amount =
				items[foundIdx].qty * items[foundIdx].price;
		}

		setData({ items: items, num: items.length });
		let tempTotal = 0;
		for (let i = 0; i < items.length; i++) {
			tempTotal += items[i].amount;
		}
		setTotalAmount(tempTotal);
	};

	const handleSubtractItem = (product) => {
		const foundIdx = items.findIndex(
			(item) => item.title === product.title
		);
		if (foundIdx >= 0) {
			items[foundIdx].qty > 0
				? (items[foundIdx].qty -= 1)
				: (items[foundIdx].qty = 0);
			items[foundIdx].amount =
				items[foundIdx].qty * items[foundIdx].price;
		}

		setData({ items: items, num: items.length });
		let tempTotal = 0;
		for (let i = 0; i < items.length; i++) {
			tempTotal += items[i].amount;
		}
		setTotalAmount(tempTotal);
	};

	/* useEffect(() => {
		setItemIndex(new URLSearchParams(search).get("itemIndex"));

		setItemDetail(Data[itemIndex]);
		if (ItemDetail.Pic === "j1") {
			setPic(j1);
		} else if (ItemDetail.Pic === "j2") {
			setPic(j2);
		} else if (ItemDetail.Pic === "j3") {
			setPic(j3);
		} else if (ItemDetail.Pic === "j4") {
			setPic(j4);
		} else if (ItemDetail.Pic === "j5") {
			setPic(j5);
		} else if (ItemDetail.Pic === "j6") {
			setPic(j6);
		} else if (ItemDetail.Pic === "j7") {
			setPic(j7);
		} else if (ItemDetail.Pic === "j8") {
			setPic(j8);
		} else if (ItemDetail.Pic === "j9") {
			setPic(j9);
		} 

		//console.log(ItemDetail.Pic1)
	}, [pic, itemIndex]);*/

	useEffect(() => {
		let tempTotal = 0;
		for (let i = 0; i < items.length; i++) {
			tempTotal += items[i].amount;
		}
		setTotalAmount(tempTotal);
	}, []);

	return (
		<>
			<Navbar numberOfItems={data.items.length} />
			<div className="container ">
				<div>
					{items.length > 0 ? (
						items.map((item) => {
							return (
								<div className="container d-flex" key={idx++}>
									<img
										src={item.picUrl}
										className="img-fluid m-3"
										alt="..."
										style={{
											height: "50px",
											width: "50px",
										}}
									/>
									<h1 className="text-light m-3">
										{item.title}{" "}
									</h1>
									<h2 className="text-light m-3">
										{item.price?.toLocaleString("en-PH", {
											style: "currency",
											currency: "PHP",
										})}
									</h2>
									<span>
										<button
											type="button"
											className="btn btn-light m-3 me-1"
											onClick={() =>
												handleSubtractItem(item)
											}
										>
											-
										</button>
										<span className="m-1 text-light">
											{item.qty}
										</span>
										<button
											type="button"
											className="btn btn-light m-3 ms-1"
											onClick={() => handleAddItem(item)}
										>
											+
										</button>
									</span>
									<h2 className="text-light m-3">
										{item.amount?.toLocaleString("en-PH", {
											style: "currency",
											currency: "PHP",
										})}
									</h2>
								</div>
							);
						})
					) : (
						<div className="container d-flex">
							<img
								src="..."
								className="img-fluid"
								alt="..."
								style={{ height: "30px", width: "30px" }}
							/>
							<h1 className="text-light">No item </h1>
							<span>
								<button type="button" className="btn btn-light">
									-
								</button>
								<span>0</span>
								<button type="button" className="btn btn-light">
									+
								</button>
							</span>
							<h2 className="text-light">0</h2>
						</div>
					)}
				</div>

				<div className="container">
					<h1 className="text-light">Summary</h1>
					<h2 className="text-light">
						Total Amount:{" "}
						<span>
							{totalAmount?.toLocaleString("en-PH", {
								style: "currency",
								currency: "PHP",
							})}
						</span>
					</h2>

					<button type="button" className="btn btn-light">
						<Link
							to="/review"
							className="text-dark text-decoration-none"
						>
							Check Out
						</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default Cart;
