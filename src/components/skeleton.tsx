import { Circle } from "./BlogCard"

export const BlogSkeleton = ()=>{
return<div role="status" className="max-w-full animate-pulse">
<div className="border-b border-slate-200 p-4  cursor-pointer">
        <div className="flex w-full">
            
            <div className="flex justify-center flex-col">
                <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
            </div>
            <div className="font-extralight pl-2 flex justify-center flex-col">
            <div className  ="h-2 bg-gray-200 rounded-full "></div>
            </div>
            <div className="flex justify-center flex-col pl-2">
                <Circle></Circle>
            </div>
            <div className="pl-2 font-thin text-slate-500 flex justify-center flex-col">
                <div className ="h-2 w-10 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
        </div>
        <div className="pt-3 text-xl font-semibold">
        <div className ="h-2 w-1/2 mb-2.5 bg-gray-200 rounded-full "></div>
        </div>
        <div className="pt-1 text-md font-thin">
            <div className ="h-2 w-96 mb-2.5 bg-gray-200 rounded-full "></div>
             <div className ="h-2 w-96 mb-2.5 bg-gray-200 rounded-full "></div>
             <div className ="h-2 w-32 mb-2.5 bg-gray-200 rounded-full "></div>
        </div>
        <div className="text-slate-400 test-sm font-thin pt-4">
            <div className ="h-2 w-10 bg-gray-200 rounded-full "></div>
        </div>
    </div>
    

    <span className ="sr-only">Loading...</span>
</div>


}