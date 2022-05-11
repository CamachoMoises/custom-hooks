import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
	const isMounted = useRef(true)

	const [state, setState] = useState({ data: null, loading: true, error: null });

	useEffect(() => {
		
		return () => {
			//to prevent errors in useState when the component isn't loaded 
			isMounted.current= false;
		}
	}, [])

	useEffect(() => {
        setState({ data: null, loading:true, error: null });
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				// setTimeout(() => {
					if (isMounted.current) {
						setState({ data: data, error: null, loading: false });
					}else{
						console.log("The setState wasn't called");
					}
				// }, 4000);

			}).catch((err) => {
				setState({ data: null, loading:false, error: "It couldn't load the data"  })
			});
	}, [url]);

    return state
};
