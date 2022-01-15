import React from "react";
import Head from "next/head";
import IndexCard from "./IndexCard";


const nintendo: React.FC<IGameFull> = ({ games, headerText, subText }) => {
	//console.log("games ", games);
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
				<title>GameBox | Nintendo</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='pl-12  text-left flex flex-col  bg-bgcolor text-white  py-6 rounded-xl mt-2    md:max-w-3xl  '>
				<h1 className='pb-4  text-base  font-bold tracking-widest headings uppercase text-indigo-500 '>
				{subText}
				</h1>
				<h1 className='pb-6 text-3xl font-black text-white headings uppercase'>
					{headerText}
				</h1>

			</div>

			<IndexCard games={sortedGames} startCountAt={1} headerText='' />
		</div>
	);
};

export default nintendo;
