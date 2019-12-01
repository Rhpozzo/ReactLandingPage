import React from "react";

export function Jumbotron() {
	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt
					odit vero aliquid similique quaerat nam nobis illo
					aspernatur vitae fugiat numquam repellat.
				</p>
				<hr className="my-4" />
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to action!
				</a>
			</div>
		</div>
	);
}
