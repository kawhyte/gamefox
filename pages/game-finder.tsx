import React, { useState } from "react";
import Head from "next/head";
import Categories from "../components/Categories";
import SectionHeaderText from "../components/SectionHeaderText";
import HighestRatedCard from "../components/HighestRatedCard";
import { getGames } from "../util/getGames";
import Card from "../components/Card";
import axios from "axios";
import { GetStaticProps, GetServerSideProps } from "next";
import { getGamesByID, getGamesByName } from "../util/getGames";
import { GamesoftheYear2020 } from "../data/gameIDs";

export const getStaticProps: GetStaticProps = getGamesByID(GamesoftheYear2020);
//export const getServerSideProps: GetServerSideProps = getGamesByName("mario");

const nintendo: React.FC<IGameFull> = ({ games, startCountAt }) => {
	const [state, setState] = useState(games);

	const registerUser = async (event) => {
		event.preventDefault();
		//const res = getGamesByName(event.target.name.value)

		const res = await fetch("/api/hello", {
			body: JSON.stringify({
				name: event.target.name.value,
			}),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		const result = await res.json();
		setState(result.games);

		//return result

		// result.user => 'Ada Lovelace'
	};

	const sortedGames = state
		.sort((a, b) => {
			return b.total_rating - a.total_rating;
		})
		.sort((a, b) => {
			return b.rating_count - a.rating_count;
		});

	return (
		<div>
			<Head>
				<title>GameBox | Game Finder</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<SectionHeaderText
				headerText={"Game Finder"}
				paragraphText={"Not sure which game to play next? We can help you out."}
				games={[]}
			/>

			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto flex flex-wrap flex-col'>
					<div className='flex mx-auto flex-wrap mb-20'>
						<div className='sm:px-3 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none border-yellow-500  tracking-wider rounded-t'>
							Enter Video a Game Name
						</div>
						<div className='sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-yellow-500  tracking-wider'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-8 w-8 mr-3 text-gray-100'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
							Click the "FIND GAMES"
						</div>
						<a className='sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-yellow-500   tracking-wider'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-8 w-8 mr-3 text-gray-100'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
							Discover great video games
						</a>
					</div>

					<form
						onSubmit={registerUser}
						className='mb-0 mt-2 sm:mt-2 flex justify-center mx-64 '>
						<label htmlFor='name'></label>
						<input
							className='w-2/3 rounded-l-lg p-3 border-t mr-0 border-b border-l text-gray-800 border-gray-400 bg-white'
							placeholder='EX. Mario Maker'
							id='name'
							name='name'
							type='text'
							autoComplete='name'
							required
						/>
						<button
							className='text-gray-100 bg-green-600 py-1 px-2 rounded-r-lg  hover:bg-green-800  font-bold uppercase border-purple-500 '
							type='submit'>
							Find Games
						</button>
					</form>

					<div className='flex flex-col text-center w-full'>
						<p className='lg:w-2/3 mx-auto my-8 leading-relaxed text-base'>
							Enter a video game you love & get some awesome suggestions.
						</p>
					</div>
				</div>
			</section>

			<Card
				games={sortedGames}
				startCountAt={1}
				headerText={"Top game suggestions:"}
			/>
		</div>
	);
};

export default nintendo;
