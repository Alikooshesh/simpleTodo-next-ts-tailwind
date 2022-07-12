import {Itodo} from "../../interface/interfaces";
import classNames from "classnames";
import Button from "../button";

interface props extends Itodo{

}

const TodoCard = ({id,text}:props)=>{

    const todoCardClasses= classNames(
        'w-full p-[16px] bg-[#342F4E] rounded-[8px] text-white font-medium',
        'flex items-center justify-between'
    )

    return(
        <div className={todoCardClasses}>
            <p>text</p>
            <div className={'flex items-center gap-[16px]'}>
                <Button>Done</Button>
                <Button color={'red'}>DELETE</Button>
            </div>
        </div>
    )
}

export default TodoCard