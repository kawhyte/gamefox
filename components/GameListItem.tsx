import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const GameListItem: React.FC<GameListItemProps> = ({ todo, toggleTodo }) => {
	const green = "lg:text-green-300 text-green-500   text-xl leading-lg  pr-2";
	const gray = "lg:text-gray-300 text-red-500  text-xl leading-lg pr-2";
	const red = "lg:text-red-700 text-red-800  text-xl leading-lg pr-2";

	return (
		<div className='py-4'>
			<div className='relative '>
				<Link href={`/games/${todo.id}`}>
					<motion.img
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
							background: "white",
							scale: [1, 1.02, 1.01],
							transition: {
								duration: 0.3,
							},
						}}
						className='w-full relative  col-span-2  block   hover:bg-blue-100 duration-300 shadow-lg rounded p-1 max-w-sm cursor-pointer'
						src={todo?.cover?.url.replace("t_thumb", "t_cover_big")}
						alt={todo.name}
					/>
				</Link>

				<div className='flex flex-row justify-between pt-4 cursor-pointer'>
					<Link href={`/games/${todo.id}`}>
						<h2 className='text-blue-400 hover:text-blue-300 font-normal '>
							{" "}
							{todo.name}
						</h2>
					</Link>

					<p className='text-3xl px-1 z-50'>
						<span className='outline-none  flex justify-between cursor-pointer ml-2'>
							<motion.i
								animate={{
									y: 0,
									opacity: 1,
									transition: {
										duration: 0.6,
										ease: [0.6, -0.05, 0.01, 0.99],
									},
								}}
								whileTap={{ scale: 1 }}
								whileHover={{
									zIndex: 10,

									scale: [1, 1.2, 1.1],
									transition: {
										ease: "linear",
										repeat: Infinity,
										duration: 0.9,
									},
								}}
								className={red + " fas fa-heart"}
							/>
						
							<p className='py-1 text-sm cursor-pointer'>{todo.follows}</p>
						</span>
					</p>
				</div>

				{/* <div className='grid grid-2 place-items-center gap-2 pt-2 '>
				<div className='flex flex-row justify-between  container '>
			

					<button
						onClick={() => toggleTodo(todo)}
						className='outline-none  flex-auto'>
						<i
							onClick={() => toggleTodo(todo)}
							className={
								todo.complete
									? green + " far fa-check-circle"
									: gray + " far fa-check-circle"
							}
						/>
						<p className='py-1 text-sm'>Played</p>
					</button>
					<button className='text-white opacity flex-auto'>
						<i
							className={
								todo.complete
									? green + " fas fa-bookmark"
									: gray + " fas fa-bookmark"
							}
						/>{" "}
						<p className='py-1 text-sm'> Watchlist</p>
					</button>

					 <div className='text-white opacity flex-auto flex flex-row border px-1 rounded-lg py-1'>
					

					<button className='text-white opacity flex-auto'>
						<i
							className={ 
								todo.complete
									? green + " fas fa-thumbs-up text-lg leading-lg "
									: gray + " fas fa-thumbs-up text-lg leading-lg "
									  
							}
						/>
						<p className="py-1 text-sm"> Like</p>
					</button>

					

					<button className='outline-none text-white opacity flex-auto'>
						<i
							className={
								todo.complete
									? "lg:text-green-300 text-green-500 "
									: "lg:text-gray-300 text-gray-500 " +
									  " fas fa-thumbs-down  text-lg leading-lg"
							}
						/>
						<p className="py-1 text-xs"> Dislike</p>
					</button>
				</div> 
				</div>
			</div> */}

				{/* <label className={todo.complete ? "line-through" : undefined}>
				<input
					type='checkbox'
					checked={todo.complete}
					onChange={() => toggleTodo(todo)}
				/>
				<span className="pl-2"> Played</span>
			</label> */}
			</div>
		</div>
	);
};

// const GameListItem:React.FC <TodoListItemProps> = ({todo}) => {

//     return (
//         <div>

//             <li>
//                 <label >

//                 <input  type="checkbox" checked={complete}/>
//                 {games.name}
//             </label>

//             </li>

//         </div>
//     )
// }

export default GameListItem;
