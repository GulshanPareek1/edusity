import React, { useRef, useState } from "react";
import "./Slider.css"; // Import CSS for styling

// sliding logic

const Slider = () => {
	const sliderRef = useRef(null);
	const [position, setPosition] = useState(0);

	const moveForward = () => {
		setPosition((prevPosition) => prevPosition - 33);
	};

	const moveBackward = () => {
		setPosition((prevPosition) => prevPosition + 33);
	};

	return (
		<div className="slider-container ">
			<div
				className="slider"
				ref={sliderRef}
				style={{ transform: `translateX(${position}%)` }}>
				{/* Add your images or child div elements here */}
				<div className="slide">
					Slide 1<h2>hellooooonanaa</h2>
				</div>
				<div className="slide">
					Slide 2<h2>GUysssss</h2>
				</div>
				<div className="slide">
					Slide 3<h2>MISTERRR</h2>
				</div>
				{/* Add more slides as needed */}
			</div>
			<button
				className="prev-btn"
				onClick={moveBackward}>
				Prev
			</button>
			<button
				className="next-btn"
				onClick={moveForward}>
				Next
			</button>
		</div>
	);
};

export default Slider;
