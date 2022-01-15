import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
	<>
	<Navbar transparent/>
		<div className=' '>
			
			{children}
	<Footer />
		</div>
		</>
	);
};

export default Layout;
