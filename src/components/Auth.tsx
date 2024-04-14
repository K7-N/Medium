import { SigninInput, SignupInput } from "@k7n/common";
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import { HeaderS } from "./headerSign";
import axios from "axios";
import { BACKEND_URL } from "../config";

function getInType(t: string){
    if(t === 'signup'){
        return(
            useState<SignupInput>({
                name: "",
                email: "",
                password: ""
            })
        )
    } else{
        return(
            useState<SigninInput>({
                email: "",
                password: ""
            })
        )
    }
}
const checkLoggedin = async () => {
    const token = localStorage.getItem("token")
    console.log(token)
    const navigate = useNavigate()
    if(token !== null){
        try{
            const data = {headers:{jwt: token}}
            const response = await axios.get(`${BACKEND_URL}/api/v1/user/verjwt`, data)
            if(response){
                navigate('/blogs')
            }
        } catch(e){
            console.log(e)
        }
    }
}

export const Auth = ({type}: {type: "signup" | "signin"})=>{
    const [postInputs, setPostInputs] = getInType(type)
    const navigate = useNavigate()
    checkLoggedin()
    async function sendRequest(){
        try{
            console.log(`${BACKEND_URL}/api/v1/user/${type}`)
            console.log(postInputs)
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, postInputs)
            console.log(response)
            const jwt = response.data.wt
            localStorage.setItem("token", jwt)
            const r1 = await axios.get(`${BACKEND_URL}/api/v1/blog/AuxData`,{
                headers:{
                    Authorization: localStorage.getItem("token")
                }
            })
            console.log(r1)
            localStorage.setItem("Username", r1.data.name)
            localStorage.setItem("tagline", r1.data.tagline == null ? "Budding Author":r1.data.tagline)
            navigate("/blogs")
        } catch(e){
    
        }
    }
    return<div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
            <HeaderS type={type}></HeaderS>
            {type === 'signup' ? (
            <LabelledInput label="Name" placeholder="KS" onChange={(e) =>{
                setPostInputs({
                    ...postInputs,
                    name: e.target.value
                })
            }}/> ) : null}
            <LabelledInput label="email" placeholder="mail" onChange={(e) =>{
                setPostInputs({
                    ...postInputs,
                    email: e.target.value
                })
            }}/>
            <LabelledInput label="Password" type={"password"} placeholder="pw" onChange={(e) =>{
                setPostInputs({
                    ...postInputs,
                    password: e.target.value
                })
            }}/>
            <button onClick={sendRequest} type="button" className="mt-8 w-full text-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{type==='signup'? "SignUp" : "Sign in"}</button>
        </div>
        </div>
    </div>
}

interface LabelledInputType{
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string,
}

function LabelledInput({label, placeholder, onChange, type='text'}: LabelledInputType){
    return(
        <div className= "mt-3 ">
            <label  className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <input onChange={onChange} type={type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            placeholder={placeholder}/>
        </div>
    )
}