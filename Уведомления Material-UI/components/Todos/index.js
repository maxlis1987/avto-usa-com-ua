// https://github.com/iamhosseindhv/notistack
import React from 'react';

import Todos from './presenter';

// yarn add @material-ui/core notistack
const generatedTodos = lenght => {
	let tmp = [];
	for (let i = 0; i < lenght; i++) {
		tmp.push(i + 'hello');
	}
	return tmp;
};
const todos = generatedTodos(10);
const App = () => <Todos todos={todos} />;

export default App;
