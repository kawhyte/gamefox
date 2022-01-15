import React from "react";
import Link from "next/link";
import Image from "next/image";

import { animate, motion } from "framer-motion";

export default function Navbar(props) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav
				className={
					(props.transparent
						? "top-0 sticky bg-bgcolor z-50 w-full"
						: " bg-white shadow-lg") +
					" flex flex-wrap items-center justify-between py-5  opacity-90  bg-clip-padding backdrop-filter blur-backdrop-filter"
				}>
				<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
					<div className='cursor-pointer w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
						<Link href='/'>
							<a>
								<img
									className=' lg:block h-8 w-auto'
									src='https://res.cloudinary.com/babyhulk/image/upload/v1613758687/GameBox/gamebox-logo-indigo-500-mark-white-text-01.svg'
									alt='Workflow'
								/>

								<div className='flex-shrink-0 flex items-start'>
									<img
										className='hidden  lg:hidden h-8 w-auto'
										src='https://res.cloudinary.com/babyhulk/image/upload/v1613758689/GameBox/gamebox-mark-indigo-500-01.svg'
										alt='Workflow'
									/>
								</div>
							</a>
						</Link>

						<button
							className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
							type='button'
							onClick={() => setNavbarOpen(!navbarOpen)}>
							<i
								className={
									(props.transparent ? "text-textwhite" : "text-gray-800") +
									" fas fa-bars"
								}></i>
						</button>
					</div>

					<div
						className={
							"lg:flex flex-grow items-center bg-white pl-10 lg:bg-transparent lg:shadow-none" +
							(navbarOpen ? " block rounded shadow-lg bg-gray-900" : " hidden")
						}
						id='example-navbar-warning'>
						<ul className='flex flex-col lg:flex-row justify-between list-none mr-auto drop-shadow-2xl filter'>

						{/*	<Link href=' /game-of-the-decade'>
								<li className='flex items-center '>
									<a
										className={
											(props.transparent
												? "lg:text-gray-100 lg:hover:text-green-300  text-gray-100"
												: "text-gray-100  hover:text-green-600") +
											" px-3 py-4 cursor-pointer lg:py-2 flex items-center text-sm uppercase font-bold "
										}>
										<i
											className={
												(props.transparent
													? "lg:text-green-500  text-buttonYellow"
													: "text-gray-100") +
												" fas fa-chart-line text-md  leading-lg mr-2"
											}
										/>{" "}
										Trending games
									</a>
								</li>
							</Link>*/}
						
							<Link href='/trending-video-games '>
								<li className='flex items-center pr-6 '>
									<a
										className={
											(props.transparent
												? "lg:text-gray-100  lg:hover:text-yellow-300  text-gray-100"
												: "text-gray-100  hover:text-yellow-600") +
											" px-3 py-4 cursor-pointer lg:py-2 flex items-center text-sm uppercase font-bold"
										}>
										<i
											className={
												(props.transparent
													? "lg:text-buttonYellow  text-buttonYellow"
													: "text-gray-500") +
												" fas fa-crown text-base leading-lg mr-2"
											}
										/>{" "}
										A Decade of Games (2010-2021)
									</a>
								</li>
								</Link>
							
			
							<Link href='/playstation '>
								<li className='flex items-center pr-6 '>
									<div>
									<Image  width={30} height={30} src='/playstation.png' /></div>
									<a
										className={
											(props.transparent
												? "lg:text-gray-100  lg:hover:text-yellow-300  text-gray-100"
												: "text-gray-100  hover:text-yellow-600") +
											" px-2  py-4 cursor-pointer lg:py-2 flex items-center text-sm uppercase font-bold"
										}>
										PS
									</a>
								</li>
								</Link>
							<Link href='/nintendo '>
								<li className='flex items-center pr-6 '>
									<div>
									<Image  width={42} height={40} src='/console.png' /></div>
									<a
										className={
											(props.transparent
												? "lg:text-gray-100  lg:hover:text-yellow-300  text-gray-100"
												: "text-gray-100  hover:text-yellow-600") +
											" px-2  py-4 cursor-pointer lg:py-2 flex items-center text-sm uppercase font-bold"
										}>
										Nintendo
									</a>
								</li>
								</Link>
							<Link href='/xbox '>
								<li className='flex items-center pr-6 '>
									<div>
									<Image  width={30} height={30} src='/game-console.png' /></div>
									<a
										className={
											(props.transparent
												? "lg:text-gray-100  lg:hover:text-yellow-300  text-gray-100"
												: "text-gray-100  hover:text-yellow-600") +
											" px-2  py-4 cursor-pointer lg:py-2 flex items-center text-sm uppercase font-bold"
										}>
										Xbox
									</a>
								</li>
								</Link>
							</ul>
						<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
							<li className='flex items-center'>
								<a
									href='https://www.kennywhyte.com/'
									rel='noreferrer noopener'
									target='_blank'
									className={
										(props.transparent
											? "lg:text-gray-100 lg:hover:text-gray-300  text-gray-100"
											: "text-gray-500  hover:text-gray-600") +
										" px-3 py-4 cursor-pointer lg:py-2 flex items-center text-sm uppercase font-bold bg-grey-900"
									}>
									Made by Kenny
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
