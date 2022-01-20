import React from "react";
import Head from "next/head";
import Categories from "../components/Categories";
import SectionHeaderText from "../components/SectionHeaderText";
import HighestRatedCard from "../components/HighestRatedCard";
import { GetStaticProps } from "next";
import { getGames } from "../util/getGames";
import Card from "../components/Card";

export const getStaticProps: GetStaticProps = getGames("(169,49)");

const xbox: React.FC<IGameFull> = ({ games, startCountAt }) => {
	const sortedGames = games
		.sort((a, b) => {
			return b.total_rating - a.total_rating;
		})
		.sort((a, b) => {
			return b.rating_count - a.rating_count;
		});

	return (
		<div>
			<Head>
				<title>GameBox | Xbox</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<SectionHeaderText
				headerText={"Best Xbox Games"}
				paragraphText={
					"We watched a lot of films in 2020. But it wasn’t just about how many"
				}
				games={[]}
			/>

			<Card
				games={sortedGames}
				startCountAt={1}
				headerText={
					"Check out the top video games, according to players:"
				}
			/>
		</div>
	);
};

export default xbox;
