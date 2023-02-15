import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'; //this link makes the "single page application", we dont't need to reaload the page when we click on any link
import "./style-routes/Home.css";



const Home = () => {

    const [posts,setPosts] = useState([])
    const getPosts = async() =>{
        
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            );

            const data = response.data //i want the api data, so i transfer the response api for my variable data
            console.log(data);

        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() =>{ //here i can coordinate the exec function as many times as I want

        

    }, [])



    return <div>Home</div>
}

export default Home;