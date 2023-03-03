import Notes from "./Notes";
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import ViewNote from "./ViewNote";
import EditList from "./EditList";
// import { Layout } from './components/Layout';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notes />}/>
          <Route path="/notes" element={<Notes />}>
          <Route path=":id/edit" element={<EditList />} />
          <Route path=":id" element={<ViewNote />} />
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
