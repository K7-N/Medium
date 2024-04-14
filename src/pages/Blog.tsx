import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { BlogPage } from "../components/BlogPage";

export const Blog = ()=>{

    const {id} = useParams();
    console.log(id)
    const {loading, blog} = useBlog({
        id: id || ""
    });
    if (loading){
        return<div>
            loading...
        </div>
    }
    return <div>
        {blog != null ? <BlogPage blog={blog}/> : "ERROR 404: NOT FOUND"}
    </div>
}