import { NavLink,Routes,Route,Navigate } from "react-router-dom";
import { LazyPage01,LazyPage02,LazyPage03 } from "../pages";

export const LazyLayout = () => {
  return (
    <div>
        <h1>lazy layout Page</h1>
          {/*rutas hijas iran aqui*/}
          <ul>
              <li>
                  <NavLink to="lazy1" className={({isActive})=> isActive? "nav-active" : "" }> lazyload01</NavLink>
              </li>
              <li>
                  <NavLink to="lazy2" className={({isActive})=> isActive? "nav-active" : "" }> lazyload02</NavLink>
              </li>
              <li>
                  <NavLink to="lazy3" className={({isActive})=> isActive? "nav-active" : "" }> lazyload03</NavLink>
              </li>
          </ul>

          <Routes>
            <Route path="lazy1" element={<LazyPage01/>}/>
            <Route path="lazy2" element={<LazyPage02/>}/>
            <Route path="lazy3" element={<LazyPage03/>}/>
            <Route path="*" element={<Navigate replace to="lazy1" />}/> {/**para madar carga por defecto de rutas hijas */}
          </Routes>
    </div>
  )
}

export default LazyLayout;
