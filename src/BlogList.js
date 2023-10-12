import React from 'react';
const BlogList = ({blogs, title}) => {
    // now the property of blogs is recieved here using props in the brackets

    // const blogs = props.blogs
    // const title = props.title
    // we can then set a variable to the property of blogs using props.blogs
    
    return (
        <div className="BlogList">
            <h2>{ title }</h2>

            {/* looping through the list(made through the object datatype) using the map method */}
            { blogs.map((blog) => (
                <div className="blog-preview" key = { blog.id }>
                    <h2> { blog.title } </h2>
                    <p>Written by: {blog.author}</p>
                    {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
                </div>
            ))}
        </div>
    );
}

// now we cannot use this code to return the blog component, until we bring the data of the defined bloglist component, in this file
// we take out the data(predefined variables) from the Home.js using props...

// we use props bcz of two reasons:

// 1. we need not declare the variables again and again in the Home and BlogList files
// 2. we can still use the data of the BlogList component in Home.js file
// 3. it will make our BlogList component more reusable, as we can set data of the BlogList component, using props itself

export default BlogList;