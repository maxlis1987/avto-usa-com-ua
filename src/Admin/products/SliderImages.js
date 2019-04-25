import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SliderImages = (props) => {
	let images = JSON.parse(props.record.image_path);
	return (
		<div style={{ width: '70vw', margin: 'auto' }}>
			<Carousel autoPlay swipeScrollTolerance={1}>
				{images.map((image, index) => (
					<div key={index * 23}>
						<img src={image} alt="" />
						<p className="legend">{props.record.title}</p>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default SliderImages;
