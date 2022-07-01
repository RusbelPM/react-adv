import { ReactElement } from "react";



export interface Props {
    producto:Product
    children:ReactElement | ReactElement []
}

export interface Product {
    id:string;
    title:string;
    img?:string
}

export interface ProductcontextProps {

    counter: number
    increaseBy:(value: number) => void
    producto: Product

}

export interface ProductCarHocProps  {
    
    ({ children, producto }:Props ): JSX.Element,

    Title:({ title }: { title: string })=> JSX.Element,
    Image:({ img }: {img?: string}) => JSX.Element
    Buttons:() => JSX.Element


}