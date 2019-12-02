import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./Jumbotron.js";
import { Card } from "./Card.js";
import { footer, Footer } from "./footer.js";

export function Home() {
	let cardContent = [
		{
			src: "https://picsum.photos/seed/{seed}/286/180",
			cardTitle: "Card 1",
			cardText:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			src: "https://picsum.photos/seed/{seed}/286/180?random=2&blur=2",
			cardTitle: "Card 2",
			cardText:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			src: "https://picsum.photos/seed/picsum/286/180",
			cardTitle: "Card 3",
			cardText:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			src: "https://picsum.photos/seed/picsum/286/180?blur=2",
			cardTitle: "Card 4",
			cardText:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		}
	];
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				{cardContent.map((e, i) => {
					return (
						<Card
							img={e.src}
							cardTitle={e.cardTitle}
							cardText={e.cardText}
							key={i}
						/>
					);
				})}
			</div>
			<Footer text="Copy This @ 4Geeks" />
		</div>
	);
}
