import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";
import Logo_header from '../assets/images/logo_header.svg'

function Header(){


    return (
        <>
        <header >
            <nav  className="h-full w-full flex flex-wrap items-center justify-around bg-gray-100 text-gray-500  focus:text-gray-700 shadow-lg">
                
                    <img src={Logo_header} alt="Logo pagina" className="w-96 "/>

                    <Link to='/' className="flex  h-20 text-xl hover:bg-slate-300 items-center px-2 ">
                        Home
                    </Link>

                    <Link to='/agregar_imagen' className="flex h-20 text-xl hover:bg-slate-300 items-center px-2 cursor-pointer">
                        Agregar imagen
                    </Link>
                    <SearchBar />
                
            </nav>
        </header>
        
        </>
    );
}

export default Header;
