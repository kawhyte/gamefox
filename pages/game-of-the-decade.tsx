import React, { useState } from "react";
import Head from "next/head";
import GameList from "../components/GameList";
import SectionHeaderText from "../components/SectionHeaderText";
import SectionHero from "../components/SectionHero";
import { GetStaticProps } from "next";
import { GamesoftheDecade } from "../data/gameIDs";

import { getGames, getGamesByID } from "../util/getGames";

export const getStaticProps: GetStaticProps = getGamesByID(GamesoftheDecade);

const best_games = ({ games }) => {
	const sortedGames = games
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

	

	return (
		
		<div className=''>
			<Head>
				<title>GameBox | Video Game Bucket List</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<SectionHero games={games} headerText={"BEST GAMES OF THE DECADE"} paragraphText = {"Video games you should play before you die."}  /> 

	

			{/*snippets &&
				snippets.map((snippet) => (
					<Snippet key={snippet.id} snippet={snippet} />
				))*/}

			<GameList todos={todos} toggleTodo={toggleTodo} />
		</div>
		
	);
};

export default best_games;
