import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeProvider';

const ChangeTheme = () => {
		const context = useContext(ThemeContext);
		return (
			<div>  <button onClick={() => context.changeTheme('white')}> Change Theme </button> </div>
		)
}

export default ChangeTheme;