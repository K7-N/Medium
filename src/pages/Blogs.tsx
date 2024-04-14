import { AppBar } from "../components/AppBar"
import { Blogcard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/skeleton";
import { useBlogs } from "../hooks";

export const Blogs = () =>{
    const {loading, blogs} = useBlogs();
    if(loading){
        return<div>
            <AppBar/>
        <div className="flex justify-center">
            <div>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
            </div>
            </div>
        </div>
    }
    return(<div className="position: relative">
    <AppBar />
    <div className="flex justify-center">
    <div className="max-w-xl ">
        {blogs.map(blog =><Blogcard authorName={blog.author.name || "Anon"}  
        title={blog.title} 
        publishedDate="03/13/22" 
        content={blog.content}
        id={blog.id}>
        </Blogcard>).reverse()}
    </div>
    </div>
    </div>
)}