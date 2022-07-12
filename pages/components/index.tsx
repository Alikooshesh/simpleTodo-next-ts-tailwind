import Button from "../../components/button";
import Input from "../../components/input";
import TodoCard from "../../components/todoCard";

const Components = ()=>{
    return(
        <div className={'p-[16px] flex flex-col items-center gap-y-[32px]'}>
            <Button>test</Button>
            <Button size={'large'}>test</Button>
            <Button color={'red'}>test</Button>
            <Button color={'red'} size={'large'}>test</Button>
            <Input placeholder={'test'}/>
            <TodoCard id={"test"} text={"test"}/>
        </div>
    )
}

export default Components