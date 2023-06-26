import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContex = createContext();
 

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setposts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalpage, setTotalPage] = useState(null);

    async function fetchBlogs(page = 1 , tag=null , category) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`
        console.log("printing final URL");
        console.log(url);

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setPage(data.page);
            setposts(data.posts);
            setTotalPage(data.totalPages);
        }

        catch (error) {
            console.log("Something wrong")
            setPage(1);
            setposts([]);
            setTotalPage(null);
        }
        setLoading(false);
    }

    function handlePageChange(page) {
        setPage(page);
        fetchBlogs(page);
    }

    const value = {
        loading, setLoading, posts, setposts, page, setPage, totalpage, setTotalPage, fetchBlogs, handlePageChange
    };


    return <AppContex.Provider value={value}>
        {children}
    </AppContex.Provider>
}


