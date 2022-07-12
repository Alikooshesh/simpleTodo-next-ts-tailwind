import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from "../components/button";
import Input from "../components/input";
import {useState} from "react";
import {Itodo} from "../interface/interfaces";
import TodoCard from "../components/todoCard";

const Home: NextPage = () => {

    const [inputVal , setInputVal] = useState("")

    const [todoList , setTodoList] = useState<Itodo[]>([])

    const deleteFunction = (id:number)=>{
        const todoListTemp = todoList.filter(item => item.id !== id)

        setTodoList(todoListTemp)
    }

    const addButtonClickHandler = ()=>{
        if (inputVal){
            setTodoList([...todoList , {text : inputVal , id : Date.now()}])
        }
    }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full p-[16px] flex flex-col items-center gap-y-[36px]'>
        <div className='w-full flex flex-col justify-center items-center gap-y-[4px] text-white'>
          <p className='text-[36px] font-bold'>TO DO LIST</p>
          <p className='font-medium text-[18px]'>Create a list of tasks :</p>
        </div>
          <div className={'w-full max-w-[400px] flex justify-center items-center gap-x-[8px]'}>
              <Input placeholder={'Add a new task'} value={inputVal} onChange={(e)=>setInputVal(e.target.value)}/>
              <Button size={'large'} onClick={addButtonClickHandler}>ADD</Button>
          </div>
          <div className={'w-full max-w-[600px] flex flex-col gap-y-[16px]'}>
              {todoList.map(todo => {
                  return(
                      <TodoCard
                          key={`todo-${todo.id}`}
                          id={todo.id}
                          text={todo.text}
                          deleteFunc={deleteFunction}
                      />
                  )
              })}
          </div>
      </main>
    </div>
  )
}

export default Home
