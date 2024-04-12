import {Outlet} from 'react-router-dom'
import SideBar from './components/SideBar'

import './App.css'
import Footer from './components/Footer'

function App() {

  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Outlet />
        {/* <!-- Footer --> */}
        <Footer />
        {/* <!-- End of Footer --> */}
      </div>

    </div>
  )
}

export default App
