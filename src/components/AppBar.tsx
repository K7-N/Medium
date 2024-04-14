import { useState } from "react";
import { Link } from "react-router-dom"

export const AppBar = () => {
    return <div className="py-2 border-b flex justify-between px-100 ">
        <Link to={'/blogs'}>
            <div className="flex justify-center flex-col h-full ml-5 font-semibold border rounded-lg bg-gray-200 pl-2 pr-2">
                Blog It
            </div>
        </Link>
        <div className="flex justify-center ">
            <div className="flex justify-center flex-col pr-4">
            <Appbutton name={localStorage.getItem("Username") || "Anon"}></Appbutton>
            </div>
            <Link to={'/publish'}>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-5" >Publish</button>
            </Link>
        </div>

    </div>
}

function Appbutton({ name }: { name: string }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div>
            <Avatar name={name} toggleDropdown={toggleDropdown}></Avatar>
            {showDropdown && (
                <div className="absolute z-10 right-32 bg-white rounded-lg shadow w-44">
                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
                        <li>
                            <Link to={'/blogs'}>
                            <a className="block px-4 py-2 hover:bg-gray-100">
                                Home
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/profile'}>
                            <a className="block px-4 py-2 hover:bg-gray-100">
                                Profile
                            </a>
                            </Link>

                        </li>
                        <li>
                            <Link to={'/signin'} onClick={Signout}>
                            <a className="block px-4 py-2 hover:bg-gray-100">
                                Sign out
                            </a>
                            </Link>

                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}


function Avatar({name, toggleDropdown}: {name: string, toggleDropdown: ()=>void}){
    return(
    <div onClick={toggleDropdown} className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-300 rounded-full">
        <span className="font-medium text-gray-800">{name[0]}</span>
    </div>
    )
}
const Signout = async () => {
    localStorage.removeItem("token")
    console.log("heh")
}