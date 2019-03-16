// https://github.com/iamhosseindhv/notistack

import React from 'react';
import { withSnackbar } from 'notistack';

const Todos = ({ todos, enqueueSnackbar }) => {
	const onClick = todo =>
		enqueueSnackbar(todo, {
			variant: 'default', // 'Success' 'Error' 'Warning' 'Info'
			anchorOrigin: {
				vertical: 'center',
				horizontal: 'center',
			},
			autoHideDuration: 500,
		});

	return (
		<ul>
			{todos.map((todo, index) => (
				<div key={index}>
					{todo}
					<br />
					<button onClick={e => onClick(todo)}>
						Set Not.
					</button>
				</div>
			))}
		</ul>
	);
};

export default withSnackbar(Todos);
