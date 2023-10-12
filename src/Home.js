import React from 'react';
import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';   

// const Home = () => {

//     const [name, setName] = useState('mario') // useState is a hook
//     const [age, setAge] = useState(25)

//     const handleClick = () => {
//         setName('luigi')
//         setAge(30)
//     }

//     return (
//         <div className="home">
//             <h2>Home Page</h2>
//             <p>{ name } is { age } years old</p>
//             <button onClick = { handleClick }>Click me</button>
//         </div>
//     );
// }

const Home = () => {
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', author: 'mario', id: 1},
    //     { title: 'Welcome party', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', author: 'yoshi', id: 2},
    //     { title: 'Web dev top tips', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', author: 'mario', id: 3}
    // ]);

    // here, we empty the data and use the json file, which will act as the database

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    
    const [name, setName] = useState('mario')

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id)
    //     setBlogs(newBlogs)
    // }
    
    useEffect(() => {
        console.log('use Effect ran')
        console.log(name)
    }, [name])

    return(
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={'All Blogs!'} />}    
            <button onClick={() => setName('luigi')}>change name</button>
            <p>{ name }</p>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title={'Mario\'s Blogs!'}/> */}
            {/* we can take the data of blogs from this file to the BlogList component, using the props object, in which we create a dynamic value, name it anything and set it equal to blogs  */}
        </div>
    )
}
 
export default Home;