import React, { useEffect, useRef, useState } from "react";

// useRef explained
const Test = () => {
	const testRef = useRef(0);
	const incCount = () => {
		testRef.current += 1;
		console.log("Counter", testRef.current);
	};
	const [number, setNumber] = useState(0);
	const IncreaseNumber = () => {
		setNumber(number + 1);
	};
	useEffect(() => {
		console.log("Component is rendering let's seeeee ");
	});
	return (
		<div>
			Test
			<br />
			<button
				className="btn dark-btn"
				onClick={incCount}>
				TEST
			</button>
			<button
				className="btn dark-btn"
				onClick={IncreaseNumber}>
				Dusra Button
			</button>
		</div>
	);
};

export default Test;
