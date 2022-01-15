import React from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import toDate from 'date-fns/toDate';
import PlatformList from '../../components/PlatformList';
import TagList from '../../components/TagList';
import Image from 'next/image';
import Head from 'next/head';

export const getServerSideProps = async (context) => {
  const id = context.params.id;

  const data = await axios({
    url: 'https://api.igdb.com/v4/games',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': process.env.ClientID,
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
  let color = '';
  let border = '';
  let bg = ' ';
  let img = '/ratingIcons/love.png';
  let textRating = 'Hmmm';
  let skip = 'hidden';
  let must_play = 'hidden';
  let outstanding = 'hidden';
  let try_it = 'hidden';
  let convertedDate = toDate(data[0].first_release_date);

  //console.log("Data ", data)

  let ratings = data[0].rating && data[0].rating.toFixed(0);

  let circumference = ratings * 2 * 3.14;

  if (ratings >= 0 && ratings < 40) {
    img = '/ratingIcons/sad.png';
    bg = 'text-red-500';
    textRating = 'No! Stay Away';
  } else if (ratings >= 40 && ratings < 50) {
    img = '/ratingIcons/sad.png';
    bg = 'text-red-500';
    textRating = 'Meh';
  } else if (ratings >= 50 && ratings < 60) {
    img = '/ratingIcons/dizzy.png';
    bg = 'text-yellow-500';
    textRating = 'Ok-ish';
  } else if (ratings >= 60 && ratings < 70) {
    img = '/ratingIcons/eyes.png';
    bg = 'text-yellow-500';
    textRating = 'Good';
  } else if (ratings >= 70 && ratings < 85) {
    img = '/ratingIcons/love.svg';
    bg = 'text-orange-500';
    textRating = 'Great';
  } else if (ratings >= 85) {
    img = '/ratingIcons/outstanding.svg';
    bg = 'text-white';
    textRating = 'Outstanding';
  } else {
    img = '/ratingIcons/dizzy.png';
    bg = 'bg-red-500';
    // Fall through
  }

  return (
    <>
      <Head>
        <title>GameFox | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: '39vh',
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center flex flex-col mx-auto justify-end items-center opacity-50 container  bg-no-repeat bg-cover  "
            style={{
              backgroundImage: `linear-gradient(90deg,#14181d 0,rgba(20,24,29,.98556487) .97%,rgba(20,24,29,.9451312) 2.07833333%,rgba(20,24,29,.88300656) 3.29666667%,rgba(20,24,29,.80349854) 4.60166667%,rgba(20,24,29,.71091472) 5.96666667%,rgba(20,24,29,.60956268) 7.365%,rgba(20,24,29,.50375) 8.77166667%,rgba(20,24,29,.39778426) 10.16%,rgba(20,24,29,.29597303) 11.505%,rgba(20,24,29,.20262391) 12.78%,rgba(20,24,29,.12204446) 13.95833333%,rgba(20,24,29,.05854227) 15.01666667%,rgba(20,24,29,.01642493) 15.92833333%,rgba(20,24,29,0) 16.66666667%,rgba(20,24,29,0) 83.33333333%,rgba(20,24,29,.01642493) 84.07166667%,rgba(20,24,29,.05854227) 84.98333333%,rgba(20,24,29,.12204446) 86.04166667%,rgba(20,24,29,.20262391) 87.22%,rgba(20,24,29,.29597303) 88.495%,rgba(20,24,29,.39778426) 89.84%,rgba(20,24,29,.50375) 91.22833333%,rgba(20,24,29,.60956268) 92.635%,rgba(20,24,29,.71091472) 94.03333333%,rgba(20,24,29,.80349854) 95.39833333%,rgba(20,24,29,.88300656) 96.70333333%,rgba(20,24,29,.9451312) 97.92166667%,rgba(20,24,29,.98556487) 99.03%,#14181d),linear-gradient(0deg,#14181d 0,#14181d 21.48148148%,rgba(20,24,29,.98556487) 23.63703704%,rgba(20,24,29,.9451312) 26.1%,rgba(20,24,29,.88300656) 28.80740741%,rgba(20,24,29,.80349854) 31.70740741%,rgba(20,24,29,.71091472) 34.74074074%,rgba(20,24,29,.60956268) 37.84814815%,rgba(20,24,29,.50375) 40.97407407%,rgba(20,24,29,.39778426) 44.05925926%,rgba(20,24,29,.29597303) 47.04814815%,rgba(20,24,29,.20262391) 49.88148148%,rgba(20,24,29,.12204446) 52.5%,rgba(20,24,29,.05854227) 54.85185185%,rgba(20,24,29,.01642493) 56.87777778%,rgba(20,24,29,0) 58.51851852%),
			   url('${
           'https://res.cloudinary.com/babyhulk/image/fetch/w_1248,h_256,c_fill,r_20,f_auto/' +
             data.screenshots &&
           data[0].screenshots[0].url.replace('t_thumb', 't_screenshot_big')
         }')`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-60  bg-gray-900"
            ></span>
          </div>
        </div>

        <div className=" mx-auto z-10 max-w-screen-xl -mt-60 sm:-mt-32">
          <section className="pb-8 md:pb-20  ">
            <div className="container  mx-auto px-4">
              <div className=" relative flex flex-col md:flex-row justify-center items-center  max-w-3xl   ">
                <div className="w-5/12 ">
                  <Image
                    src={
                      data[0].cover &&
                      'https://' +
                        data[0]?.cover?.url?.replace('t_thumb', 't_cover_big')
                    }
                    width={560}
                    height={740}
                    className=" w-96 bg-cover mr-5 rounded-xl"
                    alt="Gameboy Image"
                    blurDataURL={
                      data[0].cover &&
                      'https://' +
                        data[0]?.cover?.url?.replace('t_thumb', 't_cover_big')
                    }
                    placeholder="blur"
                  />
                </div>

                <div className="ml-12 flex flex-col w-7/12 ">
                  <p className="text-white text-center md:text-left font-bold text-4xl ">
                    {data[0].name}
                  </p>

                  <div className=" bg-blue-200 ">
                    <div className=" flex flex-col justify-center  ">
                      <div className="flex items-center flex-wrap max-w-md   ">
                        <div className="flex items-center text-3xl  py-3   rounded-2xl   justify-between  overflow-hidden  text-white  ">
                          <div className="  ">
                            <Image
                              src={img}
                              width={80}
                              height={136}
                              alt="Gameboy Image"
                              blurDataURL={img}
                              placeholder="blur"
                            />
                          </div>
                          <div>
                            <span
                              className={
                                ' text-5xl  pl-4 font-bold rounded-2xl  '
                              }
                            >
                              {data[0].rating && data[0].rating.toFixed(0)
                                ? data[0].rating.toFixed(0) + '%'
                                : 'Not Rated'}
                            </span>

                            <p className=" text-center text-2xl">
                              {textRating}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <PlatformList
                      list={data[0]?.platforms}
                      tagBGcolor={'bg-pink-700'}
                      headerText={'Platform'}
                    />

                    <TagList
                      list={data[0]?.genres}
                      tagBGcolor={'bg-blue-700'}
                      bg-blue-100
                      headerText={'Genre'}
                    />
                  </div>
                  {/*<time className='mt-4   text-base text-center md:text-left md:text-base'>
											Released on {data[0].release_dates[0].date}
									</time>*/}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap flex-col items-center mt-8 text-white  ">
              <div className="w-full  px-4 mr-auto sm:mb-12 md:mb-0">
                <p className="text-lg font-light leading-relaxed mt-4 mb-4  ">
                  {data[0].summary}
                </p>
              </div>
            </div>
          </section>

          <section>
            <div>Devs</div>
          </section>

          <section className="container bg-lightgray mx-10 flex flex-col justify-center items-center py-3 ">
            <div className=" flex flex-col align-middle justify-center items-center rounded-t-lg ">
              <h4 className="text-xl text-white font-bold  py-4 text-center  ">
                VIDEOS: TRAILERS, TEASERS, FEATURETTES
              </h4>

              <ReactPlayer
                className=" mx-6"
                url={`https://www.youtube.com/watch?v=${data[0].videos[0].video_id}`}
                controls
                volume={0}
                muted
              />
            </div>
          </section>

          <section className="pt-20 pb-48">
            <div className="container mx-auto px-4">
              {data[0].storyline ? (
                <div className="flex flex-wrap justify-center text-white text-center mb-24">
                  <div className="w-full lg:w-11/12 px-4">
                    <h2 className="text-xl font-semibold">STORYLINE</h2>
                    <p className="text-lg leading-relaxed m-4 text-white">
                      {data[0].storyline}
                    </p>
                  </div>
                </div>
              ) : (
                ''
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
