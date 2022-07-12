import {InputHTMLAttributes} from "react";
import classNames from "classnames";

interface props extends InputHTMLAttributes<HTMLInputElement>{

}

const Input = ({...props}:props)=>{

    const inputClasses = classNames(
        'w-full pb-[4px] border-b-[1px] border-white text-left text-[20px] font-semibold text-white bg-transparent outline-0 caret-white',
        'placeholder:text-[#757575] placeholder:capitalize',
        'focus:border-[#2FD66F]'
    )

    return(
        <input className={inputClasses} {...props}/>
    )
}

export default Input