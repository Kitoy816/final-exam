import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StarRating from "../components/StarRating";
import useData from "../hooks/useData";

const Review = () => {
	const { setData } = useData();
	useEffect(() => {
		setData({ items: [], num: 0 });
	}, []);
	return (
		<div className="container p-5 justify-content-center">
			<div className="container">
				<h2 className="text-light">
					Thank you for purchasing with us.
				</h2>
				<p className="text-light">We hope to see you soon.</p>
				<br />
				<br />
				<h2 className="text-light">
					You can rate us and write your comment below:
				</h2>
				<p className="text-light">Rating:</p>
				<StarRating />
				<p className="text-light">Comment:</p>
				<textarea
					name="comment"
					id="comment"
					cols="60"
					rows="10"
				></textarea>
				<br />
				<br />
				<button className="btn btn-light">
					<Link to="/">Submit</Link>
				</button>
			</div>
		</div>
	);
};

export default Review;
