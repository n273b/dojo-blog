import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)  

    useEffect(() => {
        // setTimeout() function, fires the function after the set time, in this case 1000s
        // in this case the fetch() function gets the fetch request after 1000s

        const abortController = new AbortController()
        // used to stop the fetch request from getting the data from the json file when the component that is unmounting is using the fetch request

            fetch(url, { signal: abortController.signal })
            // fetch gets the request of the end-point of the url in this case blogs
            .then(res => {
                console.log(res)
                if(!res.ok){
                    throw Error('could not fetch the data for the resource')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                setData(data)
                setIsPending(false)
                setError(null)
                // here error is set to null, as it may happen that there is a subsequent loading going on so if it loads after catching the error, 
            })
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('fetch aborted')
                } else{
                    setIsPending(false)
                    setError(err.message)
                //  console.log(err.message)
                }
                
            })

            // return () => console.log('cleanup');
            return () => abortController.abort()

        },[url]);


    return { data, isPending, error }
    // we use the objects datatype, bcz the order of the elements of objects doesn't matter 
}

export default useFetch