import React from 'react'
import { RiCheckboxBlankCircleFill, RiEdit2Line, RiCheckboxBlankCircleLine, RiCheckFill, RiCheckDoubleFill, RiCloseFill } from "react-icons/ri";
import { id } from 'react-modal-datepicker';
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom';

const Task = ({ item, title, description, task, state, date, data, setIsOpen, setId, apiGet }) => {
    const navigate=useNavigate()
    function edit() {
        data.tl_title = title
        data.tl_description = description
        data.tl_date = ""
        data.tl_task = task.split(',')
        data.tl_state = false
        setIsOpen(true)
        setId(item.tl_id)
    }

    function deleteTask(id) {
        axios.delete(`https://backtodolist-v1.herokuapp.com/todolist/delete/${id}`)
            .then(res => {
                console.log(res.data)
            })
        //apiGet()
        alert("Tarea Eliminada")
        navigate("/category")
    }

    function editState(item) {
        item.tl_state = true
        Object.assign(item, { "id": item.tl_id })
        delete item["tl_id"]
        console.log(item)
        axios.put('https://backtodolist-v1.herokuapp.com/todolist/update', item)
            .then(res => {
                console.log(res)
            })
        alert("Tarea Completada")
    }

    return (
        <div className='bg-color2 flex justify-between px-4 gap-2 rounded-lg '>
            <div className='text-white py-2 w-[80%]'>
                <div className='flex gap-1 items-center'>
                    <div><button onClick={edit}><RiEdit2Line style={{ color: "yellow", display: "inline", fontSize: "1.5rem" }} /></button> </div>
                    <h1 className='text-[1.5rem] text-color9'>{title}</h1>
                </div>
                <div className='bg-color1 rounded-md pl-2  sm:h-12'>{description}</div>
                <h3 className='text-color7 font-bold'>List Task</h3>
                <div className='pl-2'>{task}</div>
                <div className=''><span className='text-color4 font-bold'>Date: </span>{date}</div>
            </div>
            <div className='flex flex-col justify-between items-end py-2'>
                <div  >{state ? <RiCheckboxBlankCircleFill style={{ color: "green", display: "inline", fontSize: "1.5rem" }} /> : <RiCheckboxBlankCircleLine style={{ color: "red", display: "inline", fontSize: "1.5rem" }} />}</div>
                <div className='flex'>
                    <div>
                        <form >
                            <button type="submit" onClick={() => deleteTask(item.tl_id)}> {state ? "" : <RiCloseFill style={{ color: "red", display: "inline", fontSize: "1.5rem" }} />} </button>
                        </form>
                    </div>
                    <div>
                        <form >
                            <button type="submit" onClick={() => editState(item)}>{state ? "" : <RiCheckFill style={{ color: "green", display: "inline", fontSize: "1.5rem" }} />}</button>
                        </form>
                    </div>
                    <div>
                        <form >
                            <button type="submit" onClick={() => deleteTask(item.tl_id)}>{state ? <RiCheckDoubleFill style={{ color: "green", display: "inline", fontSize: "1.5rem" }} /> : ""}</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Task