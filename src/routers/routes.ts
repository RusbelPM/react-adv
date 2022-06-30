import { lazy,LazyExoticComponent } from 'react';
// import { LazyPage01 } from '../01-lazyLoad/pages';


type JSXComponent = () => JSX.Element 


interface Route {
    to: string;
    path:string;
    Component:  LazyExoticComponent<JSXComponent> | JSXComponent;
    name:string;
}

/*renombrar lo chunks de network*/
const lazy1 = lazy(()=>import(/*webpackChunkName: "LazyPage1"*/"../01-lazyLoad/pages/LazyPage01"));
const lazy2 = lazy(()=>import(/*webpackChunkName: "LazyPage2"*/"../01-lazyLoad/pages/LazyPage02"));
const lazy3 = lazy(()=>import(/*webpackChunkName: "LazyPage3"*/"../01-lazyLoad/pages/LazyPage03"));


export const routes: Route[] = [

    {
        to:"/lazy1",
        path:"lazy1",
        Component:lazy1,
        name:"Lazy-1"

    },
    {
        to:"/lazy2",
        path:"lazy2",
        Component:lazy2,
        name:"Lazy-2"

    },
    {
        to:"/lazy3",
        path:"lazy3",
        Component:lazy3,
        name:"Lazy-3"

    }
];