import{Link} from "react-router-dom";
function Edit() {

    return (
      <div className="container">
            <div className="title"> Edit </div>
      <form >
      <div className="user-details">
            <div className="button">
            <Link to="/successful">  <input type="submit" value="Update"/> </Link>
            </div>
            <div className="button">
            <Link to="/successful">  <input type="submit" value="Add"/></Link>
            </div>
       </div>
      </form>
      </div>
    );
  }
  
  export default Edit;