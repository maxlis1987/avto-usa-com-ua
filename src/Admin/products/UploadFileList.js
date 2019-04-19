import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const uploadsQuery = gql`
	query uploads {
		uploads {
			id
			filename
			mimetype
			path
		}
	}
`;
const UploadFileList = ({ mutate }) => {
	const handleChange = ({ target: { validity, files } }) =>
		validity.valid &&
		mutate({
			variables: { files },
			update(proxy, { data: { multipleUpload } }) {
				const data = proxy.readQuery({ query: uploadsQuery });
				data.uploads.push(...multipleUpload);
				proxy.writeQuery({ query: uploadsQuery, data });
			}
		});

	return <input type="file" multiple required onChange={handleChange} />;
};

export default graphql(gql`
	mutation($files: [Upload!]!) {
		multipleUpload(files: $files) {
			id
			filename
			mimetype
			path
		}
	}
`)(UploadFileList);
