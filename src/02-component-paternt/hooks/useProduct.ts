import { useEffect, useRef, useState } from "react"
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {

    producto:Product;
    onChange?:(args:onChangeArgs) => void
    value?:number
}

export const useProduct = ({onChange,producto, value = 0}:useProductArgs) => {

    
    const [counter, setCounter] = useState(0);
    const isController = useRef(!!onChange);

    const increaseBy = (value:number)=>{

        if(isController){
            return onChange!({count:value,producto})
        }

        

        const newValue  = Math.max(counter + value , 0)

        setCounter(newValue)

        onChange && onChange({count:newValue, producto})
    }

    useEffect(() => {

        setCounter(value)
   
    }, [value])
    

   
    return {
        counter,
        increaseBy
    }
}
