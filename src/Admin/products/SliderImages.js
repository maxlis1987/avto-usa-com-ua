import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SliderImages = (props) => {
	let images = JSON.parse(props.record.image_path);
	return (
		<div style={{ width: '90vw', margin: 'auto' }}>
			<Carousel autoPlay>
				{images.map((image, index) => (
					<div>
						<img src={image} key={index + 'car-image'} alt="" id="image_test" />
						<p className="legend">{props.record.title}</p>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default SliderImages;
