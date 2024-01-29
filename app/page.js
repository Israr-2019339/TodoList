"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [discription, setdiscription] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, discription }]);
    settitle("")
    setdiscription("")
    console.log(mainTask)
  }
  const clickHandler = (i) => {
    let task = [...mainTask]
    task.splice(i, 1)
    setmainTask(task)
  }
  let renderTask = <h2> No Task Availabale</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <ol key={i} className='flex items-center justify-between mb-5'>
          <div className='flex justify-between items-center mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-lg font-semibold'>{t.discription}</h6>
          </div>
          <button
            onClick={() => { clickHandler(i) }}
            className='bg-red-400 text-white rounded px-4 py-2 font-bold'>
            Delete
          </button>
        </ol>

      )
    })
  } 
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center"> ISRAR TODOLIST
      </h1>
      <form action='' onSubmit={submitHandler}>
        <input
          type='text'
          className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2'
          placeholder='Enter your Task here'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />
        <input
          type='text'
          className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2'
          placeholder='Enter Discription here'
          value={discription}
          onChange={(e) => {
            setdiscription(e.target.value)
          }}
        />
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task
        </button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ui>
          {renderTask}
        </ui>

      </div>

    </>
  );
};

export default page;