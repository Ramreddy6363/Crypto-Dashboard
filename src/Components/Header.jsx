import { Link } from "react-router";
const Header = () => {
    return ( 
        <div className="text-blue-400 font-semibold text-center mt-4 p-1"> 
            <Link className="mr-2" to="/">
              Home
            </Link>
            <Link to="/about">About</Link>
        </div>
     );
}
export default Header;