import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import First from "../images/j1.jpg";
import Second from "../images/j2.jpg";
import Third from "../images/j3.jpg";
import Fourth from "../images/j4.jpg";
import Fifth from "../images/j5.jpg";
import Sixth from "../images/j6.jpg";
import Seventh from "../images/j7.jpg";
import Eighth from "../images/j8.jpg";
import Ninth from "../images/j9.jpg";
import useData from "../hooks/useData";

const Home = () => {
	const { data, setData } = useData();

	return (
		<>
			<Navbar numberOfItems={data.items.length} />
			<div className="container d-flex justify-content-center">
				<div className="container d-inline mt-4 ">
					<div className="container d-flex">
						<div className="card m-3" style={{ width: "18rem" }}>
							<img
								src={First}
								className="card-img-top"
								alt="Jordan 1"
							/>
							<div className="card-body">
								<h5 className="card-title">Jordan I</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<Link
									to="/product-detail?itemIndex=0"
									className="btn btn-dark m-3"
								>
									More...
								</Link>
							</div>
						</div>

						<div className="card m-3" style={{ width: "18rem" }}>
							<img
								src={Second}
								className="card-img-top"
								alt="Jordan 2"
							/>
							<div className="card-body">
								<h5 className="card-title">Jordan II</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<Link
									to="/product-detail?itemIndex=1"
									className="btn btn-dark m-1"
								>
									More...
								</Link>
							</div>
						</div>

						<div className="card m-3" style={{ width: "18rem" }}>
							<img
								src={Third}
								className="card-img-top"
								alt="Jordan 3"
							/>
							<div className="card-body">
								<h5 className="card-title">Jordan III</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<Link
									to="/product-detail?itemIndex=2"
									className="btn btn-dark m-3"
								>
									More...
								</Link>
							</div>
						</div>
					</div>

					<div className="container d-flex">
						<div className="card m-3" style={{ width: "18rem" }}>
							<img
								src={Fourth}
								className="card-img-top"
								alt="Jordan 4"
							/>
							<div className="card-body">
								<h5 className="card-title">Jordan IV</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<Link
									to="/product-detail?itemIndex=3"
									className="btn btn-dark m-1"
								>
									More...
								</Link>
							</div>
						</div>

						<div className="card m-3" style={{ width: "18rem" }}>
							<img
								src={Fifth}
								className="card-img-top"
								alt="Jordan 5"
							/>
							<div className="card-body">
								<h5 className="card-title">Jordan V</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<Link
									to="/product-detail?itemIndex=4"
									className="btn btn-dark m-1"
								>
									More...
								</Link>
							</div>
						</div>

						<div className="card m-3" style={{ width: "18rem" }}>
							<img
								src={Sixth}
								className="card-img-top"
								alt="Jordan 6"
							/>
							<div className="card-body">
								<h5 className="card-title">Jordan VI</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<Link
									to="/product-detail?itemIndex=5"
									className="btn btn-dark m-1 "
								>
									More...
								</Link>
							</div>
						</div>
					</div>

					<div className="container d-flex">
						<div className="card m-3" style={{ width: "18rem" }}>
							<img
								src={Seventh}
								className="card-img-top"
								alt="Jordan 7"
							/>
							<div className="card-body">
								<h5 className="card-title">Jordan VII</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<Link
									to="/product-detail?itemIndex=6"
									className="btn btn-dark m-1"
								>
									More...
								</Link>
							</div>
						</div>

						<div className="card m-3" style={{ width: "18rem" }}>
							<img
								src={Eighth}
								className="card-img-top"
								alt="Jordan 8"
							/>
							<div className="card-body">
								<h5 className="card-title">Jordan VIII</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<Link
									to="/product-detail?itemIndex=7"
									className="btn btn-dark m-1"
								>
									More...
								</Link>
							</div>
						</div>

						<div className="card m-3" style={{ width: "18rem" }}>
							<img
								src={Ninth}
								className="card-img-top"
								alt="Jordan 9"
							/>
							<div className="card-body">
								<h5 className="card-title">Jordan IX</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<Link
									to="/product-detail?itemIndex=8"
									className="btn btn-dark m-1"
								>
									More...
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
