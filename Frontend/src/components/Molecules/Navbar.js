import React from 'react';

import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from '../Atoms/Navelements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
        <NavBtnLink to='/'>Home</NavBtnLink>
        <NavBtnLink to='/bc'>Breast Cancer Predictor</NavBtnLink>
        <NavBtnLink to='/hd'>Heart Disease Predictor</NavBtnLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
