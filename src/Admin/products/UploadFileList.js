import React, { Fragment } from 'react';
// img.replace(/^data:image\/(png|jpg);base64,/, "")

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
								// .replace(/^data:image\/(png|jpg|jpeg|gif);base64,/, '');
								if (str == '') {
									str = base64data;
								} else {
									str = `${str}mama_maria${base64data}`;
								}
							};
						})(img);
						return file;
					});
					setTimeout(() => {
						let result = str;
						if (result.split('mama_maria')) {
							result = result.split('mama_maria');
							result = JSON.stringify(result);
						} else {
							result = `["${result}"]`;
							result = JSON.stringify(result);
						}
						myChange(result);
						return result;
					}, 1000);
				}}
			/>
		</Fragment>
	);
};

export default UploadFileList;
// img.replace(/^data:image\/(png|jpg);base64,/, "")
