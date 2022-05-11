import { useState } from 'react';

export const useCounter = (initialState = 10) => {
	const [counter, setCounter] = useState(initialState);
	const decrement = (factor= 1) => {
		setCounter(counter - factor);
	};
	const Increment = (factor= 1) => {
	
		setCounter(counter + factor);
	};
    const Reset = () => {
        setCounter(initialState);
    }

	return { counter, decrement, Increment, Reset };
};
