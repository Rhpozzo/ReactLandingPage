import React from "react";
import Proptypes from "prop-types";

export function Card(props) {
	return (
		<div className="card1 col-sm-3 mb-4">
			<div className="card">
				<img className="card-img-top" src={props.img} />
				<div className="card-body">
					<h4 className="card-title"> {props.cardTitle}</h4>
					<p className="card-text">{props.cardText}</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						{" "}
						Would you like to know more?{" "}
					</a>
				</div>
			</div>
		</div>
	);
}

Card.protoTypes = {
	img: Proptypes.string,
	cardTitle: Proptypes.string,
	cardText: Proptypes.string
};
