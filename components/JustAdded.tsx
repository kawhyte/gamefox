import React from "react";
import Head from "next/head";
import Categories from "./Categories";
import SectionHeaderText from "./SectionHeaderText";
import HighestRatedCard from "./HighestRatedCard";
import { getGames } from "../util/getGames";
import JustAddedCards from "./JustAddedCards";
import { GetStaticProps} from 'next'



const nintendo: React.FC<IGameFull>= ({ games, headerText}) => {

    //console.log("games ", games)
	const sortedGames = games
		// .sort((a, b) => {
		// 	return b.total_rating - a.total_rating;
		// })
		// .sort((a, b) => {
		// 	return b.rating_count - a.rating_count;
		// });

	return (
		<div>
			<Head>
				<title>GameBox | Nintendo</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>



			<JustAddedCards
				games={sortedGames}
				startCountAt={1}
				headerText={
					headerText
				}
			/>
		</div>
	);
}

export default nintendo;
