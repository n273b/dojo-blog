import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id )
    // useParams() : allows us to grab parameters/route parameters from the route by destructuring the name of the parameter from the Params

    const navigate = useNavigate()

    const handleClick = (id) => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <div className="blog-details">

            {/* template used to show useParams() in use */}
            {/* <h2>Blog details - { id }</h2> */}

            {/* template used to show blog-details */}
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={ handleClick }>delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;
