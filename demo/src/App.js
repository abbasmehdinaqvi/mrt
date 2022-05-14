
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './Component/Login';
import Edit from './Component/Edit';
import Successful from './Component/Successful';
import Form from './Component/Form';
import Registration from './Component/Registration';
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Form/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/successful" element={<Successful/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/edit" element={<Edit/>}/>
      </Routes>
    </Router>
  );
}

export default App;
