
import { BrowserRouter, NavLink } from "react-router-dom";
import { Routes, Route,Navigate } from "react-router-dom";
import logo from "../logo.svg";
import { LazyPage01,LazyPage02,LazyPage03 } from '../01-lazyLoad/pages';





export const Navigation = () => {
  return (
    <BrowserRouter>

      <div className="main-layout">


        <nav>
          <img src={logo} alt="logo react"/>
            <ul>
                <li>
                   <NavLink to="lazy1" className={({isActive})=> isActive? "nav-active" : "" }>Lazy1</NavLink>
                </li>
                <li>
                   <NavLink to="lazy2" className={({isActive})=> isActive? "nav-active" : "" }>Lazy2</NavLink>
                </li>
                <li>
                  <NavLink to="lazy3" className={({isActive})=> isActive? "nav-active" : "" }>Lazy3</NavLink>
                </li>
            </ul>
        </nav>

            <Routes>
              <Route path="lazy1" element={<LazyPage01/>} />
              <Route path="lazy2" element={<LazyPage02/>} />
              <Route path="lazy3" element={<LazyPage03/>} />
              <Route path="/*" element={<Navigate to="lazy1" replace/>} /> {/*Navigate es un componente que navega y podemos definir el to="" y el replace significa que no puede regresar*/}
          </Routes>



      </div>


    </BrowserRouter>
  )
}
