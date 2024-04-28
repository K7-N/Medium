import axios from "axios"
import { UpdTagline, getArticles } from "../hooks"
import { useState } from "react"
import { BACKEND_URL } from "../config"


export const Prof = () =>{
    const [tagl, stagl] = useState("")
    
    let justUped = false;
    const [tluped, stlup] = useState(false)
    const tlupd = async () =>{
        axios.post(`${BACKEND_URL}/api/v1/blog/Updatetagline`, {tagline:tagl},{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        }).then(response =>{
                if(response.data === "Updated"){
                    localStorage.setItem("tagline", tagl)
                }
                stlup(true)
        })
    }

    const c = getArticles()
    return<div>
        {tluped ? 
        <div className="border mx-1 border-green-400 rounded bg-green-100 px-4 py-3 text-green-700">
            <p>Tagline Updated</p>
        </div> : null
        }
        <div className="mt-10 flex justify-center flex-col">
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
        <input onChange={(e) => {
                stagl(e.target.value)
            }} placeholder={localStorage.getItem("tagline") || " "} className="w-72"/>
        <div className="mb-1 pb-2 border-b">
        <button onClick={tlupd} type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-7 py-1.5 text-center" >Save</button>
        </div>
        <div className="font-bold text-stone-700">
            Articles Published: {c.ans}
        </div>
        </div>
        </div>
    </div>
    </div>
}