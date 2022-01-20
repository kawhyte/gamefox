import Head from "next/head";
import Categories from "../components/Categories";
import SectionHero from "../components/SectionHero";
import { gameObj } from "../data/data";
import GOTYList from "../components/GotyList";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { getGames, getTrendingGames,  getGamesByID  } from "../util/getGames";
import { TrendingGames } from "../data/gameIDs";


export const getStaticProps: GetStaticProps = getTrendingGames(TrendingGames);

const GOTY = ({ games }) => {

	//console.log("Trending ", games )
	const sortedGames = games
	?.sort((a, b) => {
			return b.total_rating - a.total_rating;
		})?.sort((a, b) => {
			return b.rating_count - a.rating_count;
		});

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Head>
				<title>GameBox | Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<SectionHero headerText={"Best Games of the Decade"} paragraphText = {"Best Video Games (2010 - 2020) "} games={games} bgColor="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 "/>
			<Categories />
			{gameObj.map((item, i) => (
				<GOTYList games={sortedGames} gameDetails={item} key={i} />
			))}
		</motion.div>
	);
};

export default GOTY;
