import { getArticles } from "../hooks"
import { HeaderS } from "./headerSign"

export const Prof = () =>{
    const c = getArticles()
    return<div className="mt-10 flex justify-center flex-col">
        <div className="flex justify-center">
        <div className="border rounded p-5">
            <div className="text-3xl font-black pb-5">
                Personal Information
            </div>
        <div className="font-bold text-stone-700">
            Name:
        </div>
        <div className="text-lg font-semibold text-black mb-1 pb-1 border-b">
            {localStorage.getItem("Username")}
        </div>
        <div className="font-bold text-stone-700">
            Tagline:
        </div>
        <textarea placeholder={localStorage.getItem("tagline") || " "} className="w-72"/>
        <div className="mb-1 pb-2 border-b">
        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-7 py-1.5 text-center" >Save</button>
        </div>
        <div className="font-bold text-stone-700">
            Articles Published: {c.ans}
        </div>
        </div>
        </div>
    </div>
}