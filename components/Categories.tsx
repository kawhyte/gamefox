import React from "react";
import Link from "next/link";

const Categories: React.FC = () => {
	const categories = [
		{ name: "Nintendo Switch Games", link: "nintendo", id:1 },
		{ name: "Xbox Games", link: "xbox", id:2 },
		{ name: "Playstation Games", link: "playstation" ,id:3 },
		{ name: "PC Games", link: "playstation" ,id:4 },
	];

	return (
		<>
			<div className='container flex	flex-col justify-center  bg-accentColor lg:bg-transparent text-textwhite text-left py-10 rounded-xl my-12 max-w-md  md:max-w-xl lg:max-w-7xl  '>
				<h1 className='border-b pb-3 text-4xl headings font-black uppercase'>
					Categories
				</h1>

				{categories.map((category, i) => {
					return (
						<Link href={category.link} key={category.id}>
						<a href={category.link} key={i}>
						<p
						className='border-b py-3 cursor-pointer hover:bg-blue-700  text-lg tracking-wider font-semibold  mt-0 mb-4 headings uppercase'
						key={i}>
						{category.name}
						</p>
						</a>
						</Link>
					);
				})}

				<p className='py-3  tracking-normal text-sm font-thin mb-4 pt-4 text-center'>
					Jump to a Category
				</p>
			</div>
		</>
	);
}

export default Categories;
