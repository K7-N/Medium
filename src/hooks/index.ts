import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";


export interface Blog{
    "content": string
    "title": string
    "id": string
    "author": {
        "name": string
      }
}

export const useBlog = ({id} : {id: string}) =>{
    const [loading, setloading] = useState(true)
    const [blog, setblog] = useState<Blog>();
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response =>{
                console.log(response.data)
                setblog(response.data)
                setloading(false)
            })
    }, [id])
    return{
        loading, 
        blog
    }

}
export const useBlogs = () =>{
    const [loading, setloading] = useState(true)
    const[blogs, setBlogs]  = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response =>{
                setBlogs(response.data.blogs)
                setloading(false)
            })
    }, [])
    return{
        loading, 
        blogs
    }
}

export const getArticles = () =>{
    const [ans, setans] = useState(0)
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/artpub`, {
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response =>{
            setans(response.data)
            })
    }, [])
    return{
        ans
    }

}