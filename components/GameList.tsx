import React from "react";
import GameListItem from "./GameListItem";

const GameList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
	
	return (
		<main className='grid container mx-auto pb-3  content-start items-center justify-center'>
			<div className='relative w-full   grid grid-cols-2 sm:grid-col-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 overflow-hidden'>
				{todos.map((todo , i) => {
					
					return (
						<GameListItem  key={todo.id} todo={todo} toggleTodo={toggleTodo} />
					);
				})}
			</div>
		</main>
	);
};

export default GameList;
