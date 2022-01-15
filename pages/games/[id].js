import React from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import toDate from "date-fns/toDate";
import PlatformList from "../../components/PlatformList";
import TagList from "../../components/TagList";
import Image from "next/image";

import { useRouter } from "next/router";
import { id } from "date-fns/locale";
import image from "next/image";

export const getServerSideProps = async (context) => {
	const id = context.params.id;

	const data = await axios({
		url: "https://api.igdb.com/v4/games",
		method: "POST",
		headers: {
			Accept: "application/json",
			"Client-ID": process.env.ClientID,
			Authorization: process.env.Authorization,
		},
		data: `fields age_ratings,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms.*,player_perspectives,ports,rating,rating_count,release_dates.*,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*,websites; where id = ${id};`,
	})
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			console.error(err);
		});

	return {
		props: { data: data },
	};
};

const Details = ({ data }) => {
	let factor = 3.5;
	let color = "";
	let border = "";
	let bg = " ";
	let img = "/ratingIcons/love.png";
	let skip = "hidden";
	let must_play = "hidden";
	let outstanding = "hidden";
	let try_it = "hidden";
	let convertedDate = toDate(data[0].first_release_date);

	console.log("Data ", data)

	let ratings = data[0].rating && data[0].rating.toFixed(0);

	let circumference = ratings * 2 * 3.14;

	if (ratings >= 0 && ratings < 40) {
		img = "/ratingIcons/sad.png";
		bg = "text-red-500";
	} else if (ratings >= 40 && ratings < 50) {
		img = "/ratingIcons/sad.png";
		bg = "text-red-500";
	} else if (ratings >= 50 && ratings < 60) {
		img = "/ratingIcons/dizzy.png";
		bg = "text-yellow-500";
	} else if (ratings >= 60 && ratings < 70) {
		img = "/ratingIcons/eyes.png";
		bg = "text-yellow-500";
	} else if (ratings >= 70 && ratings < 85) {
		img = "/ratingIcons/eyes.png";
		bg = "text-orange-500";
	} else if (ratings >= 85) {
		img = "/ratingIcons/love.svg";
		bg = "text-white";
	} else {
		img = "/ratingIcons/dizzy.png";
		bg = "bg-red-500";
		// Fall through
	}

	return (
		<>
			<main className=''>
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
									data.screenshots &&
								data[0].screenshots[0].url.replace(
									"t_thumb",
									"t_screenshot_big"
								)
							}')`,
						}}>
						<span
							id='blackOverlay'
							className='w-full h-full absolute opacity-60  bg-bgcolor'></span>
					</div>
				</div>

				<div className=' mx-auto z-10 max-w-screen-xl -mt-32'>
					<section className='pb-8 md:pb-20 bg-bgcolor '>
						<div className='container  mx-auto px-4'>
							<div className=' relative flex flex-col md:flex-row justify-center items-center  max-w-3xl min-w-min  '>
								<div className='w-5/12 '>
									<Image
										src={
											data[0].cover &&
											"https://" +
												data[0]?.cover?.url?.replace("t_thumb", "t_cover_big")
										}
										width={560}
										height={740}
										className=' w-96 bg-cover mr-5 rounded-xl'
										alt='Gameboy Image'
										blurDataURL={
											data[0].cover &&
											"https://" +
												data[0]?.cover?.url?.replace("t_thumb", "t_cover_big")
										}
										placeholder='blur'
									/>
								</div>

								<div className='ml-12 flex flex-col w-7/12 '>
									<p className='text-textwhite text-center md:text-left font-bold text-4xl '>
										{data[0].name}
									</p>

									<div className=' flex flex-col justify-center  '>
										<div className='flex items-center flex-wrap max-w-md   '>
											<div
												className={
													"flex items-center text-3xl  py-3   rounded-2xl   justify-between  overflow-hidden   " +
													bg
												}>
												<div className='  '>
													<Image
														src={img}
														width={80}
														height={136}
														alt='Gameboy Image'
														blurDataURL={img}
														placeholder='blur'
													/>
												</div>
												<div>
													<span
														className={
															" text-5xl  pl-4 font-bold rounded-2xl  "
														}>
														{data[0].rating && data[0].rating.toFixed(0)
															? data[0].rating.toFixed(0) + "%"
															: "Not Rated"}
													</span>

													<p className=' text-center text-2xl'> Great</p>
												</div>
											</div>
										</div>
									</div>

									<PlatformList
										list={data[0]?.platforms}
										tagBGcolor={"bg-pink-700"}
										headerText={"Platform"}
									/>

									<TagList
										list={data[0]?.genres}
										tagBGcolor={"bg-blue-700"}
										bg-blue-100
										headerText={"Genre"}
									/>
									{/*<time className='mt-4   text-base text-center md:text-left md:text-base'>
											Released on {data[0].release_dates[0].date}
									</time>*/}
								</div>
							</div>
						</div>

						<div className='flex flex-wrap flex-col items-center mt-8  '>
							<div className='w-full  px-4 mr-auto sm:mb-12 md:mb-0'>
								<p className='text-lg font-light leading-relaxed mt-4 mb-4  '>
									{data[0].summary}
								</p>
							</div>
						</div>
					</section>

					<section>
					<div>
					Devs
					</div>
					</section>

					<section className='container bg-lightgray mx-10 flex flex-col justify-center items-center py-3 '>
						<div className=' flex flex-col align-middle justify-center items-center rounded-t-lg '>
							<h4 className='text-xl text-textwhite font-bold  py-4 text-center  '>
								VIDEOS: TRAILERS, TEASERS, FEATURETTES
							</h4>

							<ReactPlayer
								className=' mx-6'
								url={`https://www.youtube.com/watch?v=${data[0].videos[0].video_id}`}
								controls
								volume={0}
								muted
							/>
						</div>
					</section>

					<section className='pt-20 pb-48'>
						<div className='container mx-auto px-4'>
							{data[0].storyline ? (
								<div className='flex flex-wrap justify-center text-center mb-24'>
									<div className='w-full lg:w-11/12 px-4'>
										<h2 className='text-xl font-semibold'>STORYLINE</h2>
										<p className='text-lg leading-relaxed m-4 text-gray-600'>
											{data[0].storyline}
										</p>
									</div>
								</div>
							) : (
								""
							)}
							{/*<div className='flex flex-wrap'>
							PEOPLE WHO LIKED TROLLS WORLD TOUR ALSO LIKED
							</div>*/}
						</div>
					</section>
				</div>
			</main>
		</>
	);
};

export default Details;
