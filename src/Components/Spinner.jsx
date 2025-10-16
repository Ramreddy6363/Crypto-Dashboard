import { BarLoader } from "react-spinners";

const overRide = {
    display:'block',
    margin:"0 auto"
}

const Spinner = ({color='blue',size='150'}) => {
    return ( 
        <div>
            <BarLoader color={color} size={size} cssOverride={overRide} aria-label="Loading..."/>
        </div>
     );
}
 
export default Spinner;