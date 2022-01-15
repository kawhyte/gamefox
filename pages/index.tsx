import Head from "next/head";
import Hero from "../components/Hero";
import { GetStaticProps } from "next";
import { GamesoftheYear2020, TrendingGames } from "../data/gameIDs";
import { getIndexPageGamesByID } from "../util/getGames";

import IndexTrendingGames from "../components/IndexTrendingGames";
import JustAdded from "../components/JustAdded";
import { convertDateToEpoch } from "../util/convertDate";
//import { fromUnixTime, parse } from "date-fns";

export const getStaticProps: GetStaticProps = getIndexPageGamesByID(
	TrendingGames,
	GamesoftheYear2020
);

const Home = ({ trendingGames, bestOf2021, bestOf2020 }) => {
	let today = new Date();
	let date = convertDateToEpoch(today.setMonth(today.getMonth() - 12));

	//console.log("trendingGames " , trendingGames)

	// let highestRatedGamesNow = trendingGames
	// 	.filter((games) => games.total_rating > 85)
	// 	.sort((a, b) => {
	// 		return b.rating_count - a.rating_count;
	// 	});


		//console.log("highestRatedGamesNow " , highestRatedGamesNow)

	let recentlyAdded = trendingGames
		.filter((games:any) => games.release_dates[games.release_dates.length -1].date > date)
		.sort((a:any, b:any) => {
			return (
				b.release_dates[b.release_dates.length - 1].date.valueOf() -
				a.release_dates[a.release_dates.length - 1].date.valueOf()
			);
		});
	
		//console.log("recentlyAdded " , recentlyAdded)

	return (
		<>
			<Head>
				<title>GameBox | Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Hero games={trendingGames} headerText={" "} />

			 <div className='justify-center flex flex-col items-center my-4 mx-6'>
				<div className=' mb-2  rounded-3xl  flex flex-col align-middle justify-center items-center text-center font-black  text-white tracking-wider  '>
					<JustAdded
						games={bestOf2021}
						headerText={"BEST VIDEO GAMES OF 2021"}
						subText={"Great games from 2021"}
					/>
				</div>
			</div> 

			{/*<div className='justify-start flex flex-col '>
				<div className=' mb-4  flex flex-col justify-start  text-left font-black  text-textwhite tracking-wider  '>
					<IndexTrendingGames
						games={highestRatedGamesNow}
						headerText={"Highest Rated Games Right Now"}
						subText={"Highest Rated Games from the last 30 days"}
					/>
				</div>
	</div>*/}
			<div className='justify-start flex flex-col  container mx-auto my-28'>
				<div className=' mb-4  flex flex-col justify-start  text-left font-black  text-white tracking-wider  '>
					<IndexTrendingGames
						games={recentlyAdded}
						headerText={"Highest Rated Games Right Now"}
						subText={"Popular Games You Should Play"}
					/>
				</div>
			</div>

			{/*<div className='justify-center flex flex-col items-center mb-24  '>
				<div className=' mb-2  rounded-3xl  flex flex-col align-middle justify-center items-center text-center font-black  text-textwhite tracking-wider  '>
					<IndexTrendingGames
						games={bestOf2020}
						headerText={"Top 12 BEST VIDEO GAMES OF 2020"}
						subText={"Great games from 2020"}
					/>
				</div>
</div>*/}
		</>
	);
};

export default Home;
