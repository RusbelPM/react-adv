import { lazy,LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyLoad/pages/NoLazy';
// import { LazyPage01 } from '../01-lazyLoad/pages';
// import { LazyLayout } from '../01-lazyLoad/layout/LazyLayout';


type JSXComponent = () => JSX.Element 


interface Route {
    to: string;
    path:string;
    Component:  LazyExoticComponent<JSXComponent> | JSXComponent;
    name:string;
}

/*renombrar lo chunks de network*/
const LazyLayout = lazy(()=>import(/*webpackChunkName: "LazyLayout"*/"../01-lazyLoad/layout/LazyLayout"));
// const lazy2 = lazy(()=>import(/*webpackChunkName: "LazyPage2"*/"../01-lazyLoad/pages/LazyPage02"));
// const lazy3 = lazy(()=>import(/*webpackChunkName: "LazyPage3"*/"../01-lazyLoad/pages/LazyPage03"));


export const routes: Route[] = [

    {
        path:"/lazyLoad/*",
        to:"/lazyLoad/", /*si no encuentra ninguna ruta que me redireccione*/
        Component:LazyLayout,
        name:"Lazy-Layou-dash"

    },
    {
        to:"/nolazy",
        path:"nolazy",
        Component:NoLazy,
        name:"No lazy-2"

    }
];