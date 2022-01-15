import React from "react";

const TagList: React.FC <ITags> = ({ list, headerText, tagBGcolor }) => {

	return (
		<>
			<div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-6'>
				<span className='flex flex-wrap md:flex-nowrap items-center mt-1 mb-2'>
				<h3 className='text-base md:text-left md:text-base'>{headerText}</h3>
					{list.map((platform, i) => {
						return (
							<span
								key={i}
								className={
									"text-xs font-normal whitespace-nowrap  text-gray-100 py-1 px-2 ml-2 rounded  uppercase last: m-1  mr-1 " +
									tagBGcolor
								}>
								{platform.name}
							</span>
						);
					})}
				</span>
			</div>
		</>
	);
}

export default TagList;
