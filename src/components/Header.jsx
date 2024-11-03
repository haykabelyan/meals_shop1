import { NavLink as Link } from "react-router-dom"

export function Header(){


    return <div className="Header flex justify-between items-center p-4 bg-slate-700 text-white text-2xl">
        <div className="logo"> <span className=" text-orange-500">L</span>ogo </div>
        <div className="navbar">
            <Link className=' mr-2' to='/'> <span className=" text-orange-500">H</span>ome </Link>
            <Link className=' mr-2' to='/about'> <span className=" text-orange-500">A</span>bout  </Link>
            <Link className=' mr-2' to='/contact'> <span className=" text-orange-500">C</span>ontact </Link>
        </div>
        <div className="search text-orange-500 cursor-pointer"> <i className="fas fa-search"></i> </div>

    </div>
}