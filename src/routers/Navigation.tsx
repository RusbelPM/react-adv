
import { BrowserRouter, NavLink } from "react-router-dom";
import { Routes, Route,Navigate } from "react-router-dom";
import logo from "../logo.svg";




export const Navigation = () => {
  return (
    <BrowserRouter>

      <div className="main-layout">


        <nav>
          <img src={logo} alt="logo react"/>
            <ul>
                <li>
                   <NavLink to="/home" className={({isActive})=> isActive? "nav-active" : "" }>Home</NavLink>
                </li>
                <li>
                   <NavLink to="/about" className={({isActive})=> isActive? "nav-active" : "" }>About</NavLink>
                </li>
                <li>
                  <NavLink to="/users" className={({isActive})=> isActive? "nav-active" : "" }>User</NavLink>
                </li>
            </ul>
        </nav>

            <Routes>
              <Route path="about" element={<h1>About pages</h1>} />
              <Route path="users" element={<h1>Users pages</h1>} />
              <Route path="home" element={<h1>Home pages</h1>} />
              <Route path="/*" element={<Navigate to="/home" replace/>} /> {/*Navigate es un componente que navega y podemos definir el to="" y el replace significa que no puede regresar*/}
          </Routes>



      </div>


    </BrowserRouter>
  )
}
