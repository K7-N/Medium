import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"
import parse from 'html-react-parser'
// import parse from 'html-react-parser'

export const BlogPage = ({blog} : {blog: Blog}) =>{
    const RederedC = parse(blog.content)
    return( <div>
        <AppBar/>
    <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-2xl">
        <div className=" col-span-8">
            <div className="text-5xl font-extrabold">
                {blog.title}
            </div>
            <div className="text-slate-500 pt-2">
                Posted on 2nd Dec 2032
            </div>
            <div className="pt-4">
                {RederedC}
            </div>
        </div>
        <div className="col-span-4">
            <div className="text-slate-600">
            Author
            </div>
            <div className="flex">
             <div className="pr-2 flex justify-center flex-col">
                <Avatar name={blog.author.name || "Anon"}></Avatar>
            </div>
            <div>
                <div className="text-xl font-bold">
                    {blog.author.name || "Anonymous"}
                </div>
                <div className="text-slate-500">
                    Tagline of the Author here 
                </div>
            </div>
            </div>
           
        </div>
    </div>
    </div>
    )
}