
import{Link} from "react-router-dom";

function Successful() {

    return (   
         <div className="container">
           <div className="title">Registered successfully congratulations.</div>
            <Link to="/">Login</Link>
        </div>
    );
}

export default Successful;