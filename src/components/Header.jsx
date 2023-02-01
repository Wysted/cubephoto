import SearchBar from "./SearchBar.jsx";
import { useState } from "react"
import { Link } from "react-router-dom";


function Header(){


    return (
        <>
        <header  >
            <nav className="h-full w-full flex flex-wrap items-center justify-around bg-gray-100 text-gray-500  focus:text-gray-700 shadow-lg">
                
                    <div className="text-4xl text-gray-900  ">CubePhotos</div>

                    <Link to='/' className="flex  h-16 text-xl hover:bg-slate-300 items-center px-2 ">
                        Home
                    </Link>

                    <Link to='/agregar_imagen' className="flex h-16 text-xl hover:bg-slate-300 items-center px-2 cursor-pointer">
                        Agregar imagen
                    </Link>
                    <SearchBar />
                
            </nav>
        </header>
        
        </>
    );
}

export default Header;
