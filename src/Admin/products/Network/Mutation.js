import gql from 'graphql-tag';
export const CREATE_POST = gql`
	mutation createPost(
		$title: String
		$description: String
		$link: String
		$price: String
		$image_path: String
		$vincode: String
		$drive: String
		$fuelType: String
		$engineVolume: String
		$odometer: String
		$typeBody: String
		$transmission: String
	) {
		createPost(
			title: $title
			description: $description
			link: $link
			price: $price
			image_path: $image_path
			vincode: $vincode
			drive: $drive
			fuelType: $fuelType
			engineVolume: $engineVolume
			odometer: $odometer
			typeBody: $typeBody
			transmission: $transmission
		) {
			title
			description
			link
			price
			image_path
			vincode
			drive
			fuelType
			engineVolume
			odometer
			typeBody
			transmission
		}
	}
`;
