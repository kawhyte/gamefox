import React from "react";

const Footer : React.FC = () => {
	return (
		<>
			<section className='pb-2 relative block bg-gray-900'>
				<div className='container mx-auto px-4 lg:pt-6 lg:pb-2'>
					<div className='flex flex-wrap justify-center'>
						<div className='w-full lg:w-3/12 px-4 text-center'>
							<h5 className='text-lg mt-5 font-semibold text-white'>
								Powered by
							</h5>
							<a
								href='https://www.igdb.com/'
								target='_blank'
								rel='noopener noreferrer'>
								<p className='mt-2 mb-4 text-blue-500'>www.igdb.com</p>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Footer;
