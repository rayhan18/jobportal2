
import { BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/Home'
import Notfound from './pages/Notfound'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='*' element= {<Notfound/>}/>
      </Routes>
    </BrowserRouter>
    
     
    </>
  )
}

export default App
