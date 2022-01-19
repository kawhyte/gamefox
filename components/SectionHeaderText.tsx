import React from "react";


const SectionHeaderText: React.FC<ISectionHeader> = ({headerText, paragraphText}) => {
	
	return (
		<div  className='container  flex lg:bg-transparent	flex-col justify-center bg-bgcolor text-textwhite text-center py-10 rounded-xl  max-w-md  md:max-w-xl lg:max-w-7xl'>
			<h1 className=' pb-6 text-base font-bold tracking-widest headings uppercase'>
				Trends
			</h1>
			<h1 className='pb-6 text-3xl font-black headings uppercase'>{headerText}</h1>
			{/*<p className=' py-2 text-xl font-light leading-relaxed mt-0 mb-6 '>
				{paragraphText}
	</p>*/}
		</div>
	);
};

export default SectionHeaderText;
