import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeProvider';

const BlackTheme = () => {
		const context = useContext(ThemeContext);
		return (
			<div>  {context.theme} </div>
		)
}

export default BlackTheme;