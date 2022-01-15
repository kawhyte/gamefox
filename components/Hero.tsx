import React from "react";
import Link from "next/link";


const Hero: React.FC<IGameFull> = ({ games }) => {
	let randomNum = Math.floor(Math.random() * games.length);

	const list = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	};

	const item = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: -100 },
	};
	//console.log(" sortedGames[0] ", sortedGames[0]);
	return (
		<>
			<section className='text-gray-600 body-font  container mx-auto max-w-6xl  mb-28 '>
				<div className='mx-auto relative flex z-0 items-center justify-center flex-row'>
					<div
						className='flex flex-col mx-auto justify-end items-center bg-center opacity-50 container  bg-no-repeat bg-cover  '
						style={{
							minHeight: "65vh",
							backgroundImage: `linear-gradient(90deg,#14181d 0,rgba(20,24,29,.98556487) .97%,rgba(20,24,29,.9451312) 2.07833333%,rgba(20,24,29,.88300656) 3.29666667%,rgba(20,24,29,.80349854) 4.60166667%,rgba(20,24,29,.71091472) 5.96666667%,rgba(20,24,29,.60956268) 7.365%,rgba(20,24,29,.50375) 8.77166667%,rgba(20,24,29,.39778426) 10.16%,rgba(20,24,29,.29597303) 11.505%,rgba(20,24,29,.20262391) 12.78%,rgba(20,24,29,.12204446) 13.95833333%,rgba(20,24,29,.05854227) 15.01666667%,rgba(20,24,29,.01642493) 15.92833333%,rgba(20,24,29,0) 16.66666667%,rgba(20,24,29,0) 83.33333333%,rgba(20,24,29,.01642493) 84.07166667%,rgba(20,24,29,.05854227) 84.98333333%,rgba(20,24,29,.12204446) 86.04166667%,rgba(20,24,29,.20262391) 87.22%,rgba(20,24,29,.29597303) 88.495%,rgba(20,24,29,.39778426) 89.84%,rgba(20,24,29,.50375) 91.22833333%,rgba(20,24,29,.60956268) 92.635%,rgba(20,24,29,.71091472) 94.03333333%,rgba(20,24,29,.80349854) 95.39833333%,rgba(20,24,29,.88300656) 96.70333333%,rgba(20,24,29,.9451312) 97.92166667%,rgba(20,24,29,.98556487) 99.03%,#14181d),linear-gradient(0deg,#14181d 0,#14181d 21.48148148%,rgba(20,24,29,.98556487) 23.63703704%,rgba(20,24,29,.9451312) 26.1%,rgba(20,24,29,.88300656) 28.80740741%,rgba(20,24,29,.80349854) 31.70740741%,rgba(20,24,29,.71091472) 34.74074074%,rgba(20,24,29,.60956268) 37.84814815%,rgba(20,24,29,.50375) 40.97407407%,rgba(20,24,29,.39778426) 44.05925926%,rgba(20,24,29,.29597303) 47.04814815%,rgba(20,24,29,.20262391) 49.88148148%,rgba(20,24,29,.12204446) 52.5%,rgba(20,24,29,.05854227) 54.85185185%,rgba(20,24,29,.01642493) 56.87777778%,rgba(20,24,29,0) 58.51851852%), 
							url(${games[randomNum].screenshots[0].url.replace(
								"t_thumb",
								"t_screenshot_big"
							)})`,
						}}></div>

					<span className='absolute hidden lg:block  z-50 border-red-500 inset-y-0 right-60 transform rotate-90 opacity-30    '>
						
						{games[randomNum].name} ({games[randomNum].release_dates[0].y})
					</span>
				</div>
				<div className='text-center relative  w-full  -mt-40 flex flex-col  z-20 '>
					<p className='py-1 px-1 text-white font-extrabold  text-3xl sm:text-4xl whitespace-nowrap lg:text-5xl xl:text-11xl'>
						Find the best games to play.
					</p>
					<p className='py-1 px-1 text-white   font-extrabold  text-3xl sm:text-4xl whitespace-nowrap lg:text-5xl xl:text-11xl'>
						Save those you want to play.
					</p>
					<p className='py-1 px-1 text-white   font-extrabold  text-3xl sm:text-4xl whitespace-nowrap lg:text-5xl xl:text-11xl'>
						Tell your friends what's good.
					</p>
					<p className='py-2  text-indigo-500 text-lg   leading-relaxed  lg:mb-4 md:text-xl my-8'>
						Personalized recommendations for Nintendo, Xbox, Playstation and PC
						Games.
					</p>
					<div className='flex justify-center'>
						<div className='flex align-middle items-center '>
							<Link href='/video-game-concierge'>
								<button className='uppercase py-2 px-4 mx-1 text-base sm:text-base tracking-wide sm:px-8 sm:py-3 rounded bg-indigo-500 hover:bg-indigo-600 font-semibold text-white  shadow-sm hover:shadow-lg'>
									GET STARTED — IT‘S FREE!
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
