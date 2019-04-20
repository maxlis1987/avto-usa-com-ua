import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
const GET_IMAGE = gql`
	mutation($files: [Upload!]!) {
		multipleUpload(files: $files) {
			id
			data
		}
	}
`;

const UploadFileList = ({ myChange }) => {
	let str = '';
	return (
		<Fragment>
			<img src="" alt="" style={{ opacity: 0 }} id="uplodFiles" />
			<input
				type="file"
				required
				multiple
				onChange={({ target: { validity, files } }) => {
					const img = document.getElementById('uplodFiles');
					const root = document.getElementById('root');
					img.classList.add('obj');
					let images = [ ...files ];
					images = images.map((file) => {
						img.file = file;
						root.appendChild(img);
						var reader = new FileReader();
						reader.readAsDataURL(file);
						reader.onload = (function(img) {
							return function(e) {
								const base64data = reader.result;
								if (str == '') {
									str = `'["${base64data}"`;
								} else {
									str = `${str}, "${base64data}"`;
								}
								img.src = e.target.result;
							};
						})(img);
						return file;
					});
					setTimeout(() => {
						const result = `${str}]'`;
						myChange(result);
						return result;
					}, 1000);
				}}
			/>
		</Fragment>
		// <Mutation mutation={GET_IMAGE}>
		// 	{(multipleUpload) => (

		// 	)}
		// </Mutation>
	);
};

export default UploadFileList;
