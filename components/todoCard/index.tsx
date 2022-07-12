import {Itodo} from "../../interface/interfaces";
import classNames from "classnames";
import Button from "../button";
import {useEffect, useState} from "react";

interface props extends Itodo{
    deleteFunc : Function,
}

const TodoCard = ({id,text,doneFunc,deleteFunc}:props)=>{

    const [isDone , setIsDone] = useState(false)

    const todoCardClasses= classNames(
        'w-full p-[16px] bg-[#342F4E] rounded-[8px] text-white font-medium',
        'flex items-center justify-between',
        isDone && 'opacity-40'
    )

    return(
        <div className={todoCardClasses}>
            <p className={isDone ? 'line-through' : ''}>{text}</p>
            <div className={'flex items-center gap-[16px]'}>
                <Button onClick={()=> setIsDone(!isDone)}>{isDone ? 'UNDONE' : 'Done'}</Button>
                <Button color={'red'} onClick={()=> deleteFunc(id)}>DELETE</Button>
            </div>
        </div>
    )
}

export default TodoCard