import './App.css';
import {BrowserRouter , Routes ,Route} from "react-router-dom"
import Show from "./views/Show/Show"
import Add from "./views/Add/Add"
import AddItem from './views/AddItem/AddItem';
import Update from "./views/Update/Update"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Show />}></Route>
        <Route path='/Add' element={<Add />}></Route>
        <Route path='/AddItem' element={<AddItem />}></Route>
        <Route path='/Update' element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
