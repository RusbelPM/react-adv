
import { Suspense } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Routes, Route,Navigate } from "react-router-dom";
import logo from "../logo.svg";
import{routes}from"./routes";
// import { LazyPage01,LazyPage02,LazyPage03 } from '../01-lazyLoad/pages';





export const Navigation = () => {


  return (
    <Suspense fallback={<span>loading...</span>}> {/*el suspense sirve para decirle que mientras estoy cargando un module o componente, espera pero mientras carga as esto || permite  mostrar un componente o un texo*/}

        <BrowserRouter>

          <div className="main-layout">


            <nav>
              <img src={logo} alt="logo react"/>
                <ul>
                  {
                    routes.map(({to,name})=>(

                      <li key={to}>
                        <NavLink 
                        to={to} className={({isActive})=> isActive? "nav-active" : "" }
                        >{name}</NavLink>
                      </li>
                    
                    ))
                  }
                </ul>
            </nav>

                <Routes>

                  {
                    routes.map(({to,path,Component}) => (
                      
                      <Route key={to}
                      
                      path={path} 
                      element={<Component/>} />
                    ))
                  }
                  
                  <Route path="/*" element={<Navigate to={routes[0].to} replace/>} /> {/*Navigate es un componente que navega y podemos definir el to="" y el replace significa que no puede regresar*/}
              </Routes>



          </div>


        </BrowserRouter>
    </Suspense>
  )
}
