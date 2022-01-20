import React, { useState } from "react";
import Head from "next/head";
import GameList from "../components/GameList";
import SectionHeaderText from "../components/SectionHeaderText";
import SectionHero from "../components/SectionHero";
import useSWR from "swr";
import { UserProvider } from "@auth0/nextjs-auth0";
import { GetStaticProps } from "next";
import { GamesoftheYear2020, TrendingGames } from "../data/gameIDs";
import { getGames,getIndexPageGamesByID, getGamesByID, getGamesByDate } from "../util/getGames";


export const getStaticProps: GetStaticProps = getGamesByDate(1577900552,1608658952);

const best_games = ({ bestGamesOfTheYear }) => {

	
	const sortedGames = bestGamesOfTheYear
		.sort((a, b) => {
			return b.total_rating - a.total_rating;
		})
		.sort((a, b) => {
			return b.rating_count - a.rating_count;
		});

	const [todos, setTodos] = useState(sortedGames);

	const toggleTodo: ToggleTodo = (selectedTodo) => {
		const newTodos = todos.map((todo) => {
			if (todo === selectedTodo) {
				return { ...todo, complete: !todo.complete };
			}
			return todo;
		});

		setTodos(newTodos);
	};

	const { data: snippets, mutate } = useSWR("api/gamedata");

	return (
		<UserProvider>
		<div className=''>
			<Head>
				<title>GameBox | Video Game Bucket List</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<SectionHero games={sortedGames} headerText={"BEST GAMES OF 2020"} paragraphText = {"Best Games of the Year"} /> 

			<GameList todos={sortedGames} toggleTodo={toggleTodo} />
		</div>
		</UserProvider>
	);
};

export default best_games;
