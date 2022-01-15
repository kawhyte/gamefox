import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Trending: React.FC<IGame> = ({ games, headerText, startCountAt }) => {
	return (
		<main className=' pb-3 mx-8 justify-start'>
			<div>
				<motion.div className='grid grid-cols-2  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  grid-row-2 gap-2'>
					{games.slice(0, 50).map((game, i) => (
						<Link href={`/games/${game.id}`} key={game.id}>
							<div className='flex flex-col hover-trigger mb-6'>
								<motion.div
									key={game.id}
									className=' shadow-lg relative rounded p-1 max-w-sm cursor-pointer '
									animate={{
										y: 0,
										opacity: 1,
										transition: {
											duration: 0.6,
											ease: [0.6, -0.05, 0.01, 0.99],
										},
									}}
									initial={{ y: 60, opacity: 0 }}
									whileTap={{ scale: 1 }}
									whileHover={{
										position: "relative",
										zIndex: 10,
										//background: "white",
										scale: [1, 1.02, 1.01],
										transition: {
											duration: 0.3,
										},
									}}>
									{/*<div className='px-2 py-2 '>
									<h3 className='text-white text-sm my-2'>{game.name}</h3>
									<p className='text-gray-400 text-sm'>{game.genres[0].name}</p>
									</div>*/}

									<div className='flex flex-col justify-center'>
										<img
											className='w-full   block rounded'
											src={
												game.cover &&
												game.cover.url.replace("t_thumb", "t_cover_big")
											}
											alt={game.name}
										/>

										<p className='mt-5 text-center text-gray-400'>{game.name}</p>

										<div className='flex flex-col items-start w-4 justify-start absolute rounded bg-opacity-0 group-hover:bg-opacity-60 h-full top-0 group-hover:opacity-100 transition '>
											<button className='hover:scale-110 flex flex-row align-middle items-center transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition'>
												<div className='z-10 rounded-3xl ml-5 '>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='h-7 w-7 my-2 mx-2   text-gray-300'
														fill='none'
														viewBox='0 0 24 24'
														stroke='currentColor'>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='2'
															d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
														/>
													</svg>
												</div>
												<p className='text-white hover-target hover:bg-red-500 transition group-hover:inline-block -ml-7 py-1.5 px-7 whitespace-nowrap md:px-12 lg:px-8 xl:px-8  bg-gray-900   rounded-2xl'>
													Loved this Game 
												</p>
											</button>

											<button className='hover:scale-110   flex flex-row align-middle items-center   transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition'>
												<div className='rounded-3xl ml-5  z-10'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='h-7 w-7 my-2 mx-2 bg-offblack rounded-xl text-gray-300'
														fill='none'
														viewBox='0 0 24 24'
														stroke='currentColor'>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='2'
															d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
														/>
													</svg>
												</div>

												<p className='text-white hover-target hover:bg-indigo-500 transition group-hover:inline-block -ml-7 py-1.5 px-7 whitespace-nowrap md:px-12 lg:px-8 xl:px-8  bg-gray-900   rounded-2xl'>
													Played it
												</p>
											</button>

											<button className='hover:scale-110   flex flex-row align-middle items-center   transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition'>
												<div className=' rounded-3xl ml-5  z-10'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='h-7 w-7 my-2 mx-2 bg-offblack rounded-xl  text-gray-300'
														fill='none'
														viewBox='0 0 24 24'
														stroke='currentColor'>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='2'
															d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
														/>
													</svg>
												</div>

												<p className='text-white hover-target transition hover:bg-green-500 group-hover:inline-block -ml-7 py-1.5 px-7 whitespace-nowrap md:px-12 lg:px-8 xl:px-8  bg-gray-900   rounded-2xl'>
													Want to play
												</p>
											</button>
										</div>
									</div>
								</motion.div>
							</div>
						</Link>
					))}
				</motion.div>
			</div>
		</main>
	);
};

export default Trending;
