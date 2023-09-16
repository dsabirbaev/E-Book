


import { useState, useEffect } from "react";
import PaginateTable from "./PaginateTable";

const index = () => {

    const [post, setPost] = useState([]);
    const [load, setLoad] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);

    const [pageCount] = useState(10);

    const lastIndex = currentPage * pageCount;
    const firstIndex = lastIndex - pageCount;

    const lastData = post.slice(firstIndex, lastIndex);
    const getPosts = async() => {
        try{
            let response = await fetch("https://jsonplaceholder.typicode.com/posts");
            let res = await response.json();
            setPost(res);
        }catch(err){
            console.log(err.message)
        }
    }

    const paginate = (index) => {
        setCurrentPage(index)
    }

    useEffect(() => {
        getPosts();
    }, [])
    return (
        <div className="shadow p-2 border m-4">
          
            <h1 className="text-center"> POSTS </h1>
            <PaginateTable paginate={paginate} data={lastData} fullData = {post.length}/>
        </div>
    );
};

export default index;