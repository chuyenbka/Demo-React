import React, { Component } from 'react';

import BlackTheme from './theme/BlackTheme';
import ChangeTheme from './theme/ChangeTheme';

class MyTheme extends Component {
	render() {
		return (
			<div>  MyTheme : <BlackTheme /> <br />  Change Theme: <ChangeTheme /> </div>
		)
	}
}

export default MyTheme;