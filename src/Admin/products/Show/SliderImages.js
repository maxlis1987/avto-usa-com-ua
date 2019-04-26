import React from 'react';
import { Responsive } from 'react-admin';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SliderImages = (props) => {
	let images = JSON.parse(props.record.image_path);
	return (
		<Responsive
			xsmall={
				<div style={{ width: '90vw', margin: 'auto' }}>
					<Carousel autoPlay swipeScrollTolerance={1}>
						{images.map((image, index) => (
							<div key={index * 23}>
								<img src={image} alt="" />
								<p className="legend">{props.record.title}</p>
							</div>
						))}
					</Carousel>
				</div>
			}
			medium={
				<div style={{ width: '50vw' }}>
					<Carousel autoPlay swipeScrollTolerance={1}>
						{images.map((image, index) => (
							<div key={index * 23}>
								<img src={image} alt="" />
								<p className="legend">{props.record.title}</p>
							</div>
						))}
					</Carousel>
				</div>
			}
		/>
	);
};

export default SliderImages;
