import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FamilyTree from './FamilyTree'
import Welcome from './Welcome';
import '../css/style.css'
import '../css/popup.css'

const App = () => {
  return (
    <Router>
      <>
      <Routes>
      <Route exact path='/' element={<Welcome />} />
      <Route exact path='/tree' element={<FamilyTree />} />
      </Routes>
      </>
    </Router>
    
  )
}

export default App


