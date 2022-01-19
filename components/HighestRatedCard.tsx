import React from "react";
import Card from "./Card";
import ReactPlayer from "react-player/youtube";
import Link from "next/link";


const HighestRatedCard: React.FC<IGameFull> = ({ games, headerText, startCountAt }) => {
	let factor = 5.7;
	  


	return (
		<div className=' container flex  flex-col items-center  justify-center'>
			{games.slice(0, 3).map((game, i) => (
				<div key={i}>
					<div className='flex flex-col justify-center bg-bgcolor my-12 rounded-xl lg:shadow-none overflow-hidden min-w-min max-w-2xl md:max-w-xl lg:max-w-5xl  '>
				
						{/*<div className='hidden  lg:block'>
							<ReactPlayer
								url={`https://www.youtube.com/watch?v=${
									game.videos && game.videos[0].video_id
								}`}
								loop
								volume={0}
								muted
								width={1020}
								height={600}
							/>
							</div>*/}

						<div className='block  '>
							<div
								className='relative pt-16 pb-32 flex content-center items-center justify-center'
								style={{
									minHeight: "35vh",
								}}>
								<div
									className='absolute top-0 w-full h-full bg-center bg-cover'
									style={{
										backgroundImage: `url('${
											"https://res.cloudinary.com/babyhulk/image/fetch/w_1248,h_256,c_fill,r_20,f_auto/" +
												game?.screenshots &&
											game?.screenshots[0]?.url?.replace(
												"t_thumb",
												"t_screenshot_big"
											)
										}')`,
									}}>
									<span
										id='blackOverlay'
										className='w-full h-full absolute opacity-50 bg-bgcolor'></span>
								</div>

								<div
									className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
									style={{ height: "70px", transform: "translateZ(0)" }}></div>
							</div>
						</div>

						<div className='container text-left my-2 mx-5 -mt-16  flex flex-col z-10  '>
							<p className='pb-1 text-sm pt-2 text-gray-200 font-medium tracking-widest uppercase'>
								{headerText}
							</p>
							<div className='flex flex-row '>
								<p className='pt-3 top-0 left-0 z-20 ml-0 mr-3  '>
									<span
										className={
											"text-3xl font-semibold py-1 px-5 rounded text-gray-800 align-middle bg-textwhite  "
										}>
										{i + 1}
									</span>
								</p>

								<Link href={`/games/${game.id}`}>
									<p className='text-textwhite hover:text-blue-700 cursor-pointer  py-2 pr-8  text-3xl  mt-0 smallheadings'>
										{game.name}
									</p>
								</Link>
							</div>
							<p className='text-textwhite py-2 text-base font-medium  mt-2 '>
								<ul className='flex flex-wrap items-center'>
									Platform(s)
									{game.platforms.map((name, i) => {
										return (
											<span
												key={i}
												className={
													"text-sm font-semibold inline-block py-1 pr-2  rounded  uppercase last: m-1  mr-1 "
												}>
												{name.abbreviation}
											</span>
										);
									})}
								</ul>
							</p>
							<p className='text-textwhite py-2 text-base font-medium  mt-2  '>
								Rating {game.total_rating}%
							</p>

							<p className='text-textgray py-2 lg:mr-32 text-base font-medium mt-0 pr-8 '>
								{game.summary}
							</p>
						</div>
					</div>
				</div>
			))}

			<div className='flex flex-col lg:mb-56 justify-center pb-4 bg-bgcolor max-w-lg mx-auto rounded-xl shadow-md  md:max-w-5xl'>
				<p className='pb-1 text-sm text-textwhite font-medium tracking-widest uppercase container'>
						Full List
							</p>
							
				<Card games={games} headerText={""} startCountAt={startCountAt}/> 
			</div>
		</div>
	);
};

export default HighestRatedCard;
