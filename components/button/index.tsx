import classNames from "classnames";
import {ButtonHTMLAttributes} from "react";

interface props extends ButtonHTMLAttributes<HTMLButtonElement>{
    color? : 'green'|'red'
    size? : 'normal' | 'large'
}

const Button = ({size='normal' , color= "green" , children , className , ...props}:props)=>{

    const buttonClasses = classNames(
        'px-[16px] rounded-[8px] font-bold uppercase',
        color === 'green' ? 'bg-[#2FD66F] text-black' : 'bg-[#DA143C] text-white',
        size === 'normal' ? 'h-[36px]' : 'h-[48px]'
    )

    return(
        <button className={buttonClasses} {...props}>
            <>{children}</>
        </button>
    )
}

export default Button