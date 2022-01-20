import React from "react";
import Head from "next/head";

const Hero: React.FC<ISectionHeader> = ({ headerText, paragraphText, games, bgColor =" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 " }) => {
	return (
		<>
			<main className=' pb-12 md:pb-24 relative  '>
				<Head>
					<title> GameBox | Best trending games </title>

					<link rel='icon' href='/favicon.ico' />
				</Head>
				<section
					className='flex flex-col mx-auto justify-end items-center  bg-center opacity-50 bg-bgcolor container  bg-no-repeat bg-cover  '
					style={{
						minHeight: "65vh",
						backgroundImage:`linear-gradient(90deg,#14181d 0,rgba(20,24,29,.98556487) .97%,rgba(20,24,29,.9451312) 2.07833333%,rgba(20,24,29,.88300656) 3.29666667%,rgba(20,24,29,.80349854) 4.60166667%,rgba(20,24,29,.71091472) 5.96666667%,rgba(20,24,29,.60956268) 7.365%,rgba(20,24,29,.50375) 8.77166667%,rgba(20,24,29,.39778426) 10.16%,rgba(20,24,29,.29597303) 11.505%,rgba(20,24,29,.20262391) 12.78%,rgba(20,24,29,.12204446) 13.95833333%,rgba(20,24,29,.05854227) 15.01666667%,rgba(20,24,29,.01642493) 15.92833333%,rgba(20,24,29,0) 16.66666667%,rgba(20,24,29,0) 83.33333333%,rgba(20,24,29,.01642493) 84.07166667%,rgba(20,24,29,.05854227) 84.98333333%,rgba(20,24,29,.12204446) 86.04166667%,rgba(20,24,29,.20262391) 87.22%,rgba(20,24,29,.29597303) 88.495%,rgba(20,24,29,.39778426) 89.84%,rgba(20,24,29,.50375) 91.22833333%,rgba(20,24,29,.60956268) 92.635%,rgba(20,24,29,.71091472) 94.03333333%,rgba(20,24,29,.80349854) 95.39833333%,rgba(20,24,29,.88300656) 96.70333333%,rgba(20,24,29,.9451312) 97.92166667%,rgba(20,24,29,.98556487) 99.03%,#14181d),linear-gradient(0deg,#14181d 0,#14181d 21.48148148%,rgba(20,24,29,.98556487) 23.63703704%,rgba(20,24,29,.9451312) 26.1%,rgba(20,24,29,.88300656) 28.80740741%,rgba(20,24,29,.80349854) 31.70740741%,rgba(20,24,29,.71091472) 34.74074074%,rgba(20,24,29,.60956268) 37.84814815%,rgba(20,24,29,.50375) 40.97407407%,rgba(20,24,29,.39778426) 44.05925926%,rgba(20,24,29,.29597303) 47.04814815%,rgba(20,24,29,.20262391) 49.88148148%,rgba(20,24,29,.12204446) 52.5%,rgba(20,24,29,.05854227) 54.85185185%,rgba(20,24,29,.01642493) 56.87777778%,rgba(20,24,29,0) 58.51851852%), 
						url(${games[Math.floor(Math.random() * games.length)]?.screenshots[0]?.url.replace("t_thumb", "t_screenshot_big")})`,
					}}>
					<h1 className= {'title-font  sm:text-5xl text-5xl mb-4 text-gray-100 headings uppercase font-black p-3 rounded-2xl ' +  bgColor }>
						{headerText}
					</h1>
					<h2 className='text-xl text-gray-200 mt-4 mb-8 my-8 leading-relaxed'>{paragraphText}</h2>
				</section>
			</main>
		</>
	);
};

export default Hero;
