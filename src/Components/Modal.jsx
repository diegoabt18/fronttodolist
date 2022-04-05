import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ModalView from 'react-modal';
import styled from 'styled-components';
import { FcUndo, FcOvertime, FcParallelTasks, FcApproval, FcDeleteRow } from "react-icons/fc"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        //width:'80%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: "#232229",

    },
};



const Modal = ({ setIsOpen, modalIsOpen, setDateModal, date, data, idEdit, setId }) => {

    const [input, setInput] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInput([])
        setCount(0)
        loadTask()
    }, [date, idEdit])

    function loadTask() {
        console.log(data.tl_task)
        let array = [];
        for (let index = 0; index < data.tl_task.length; index++) {
            // data.tl_task[index]
            const key = index + "edit";
            array.push(
                <div key={key} id={key} className="flex">
                    <input id={key} name="task" className='task bg-color1 rounded-full active:rounded-full p-2 pl-4' defaultValue={data.tl_task[index]} required autoFocus />
                    <button onClick={() => deleteCampo(key)}><FcDeleteRow style={{ fontSize: "2rem" }} /></button>
                </div>)

        }
        setInput(array);
        data.tl_task=[]
    }




    function createTask() {
        
        if (date == "") {
            data.tl_date = new Date().toISOString().substring(0, 10);
        }else{
            data.tl_date = date;
        }
        const array = document.querySelectorAll(".task")
        if (array) {
            for (let index = 0; index < array.length; index++) {
                if (array[index].value == "") {
                    continue
                }
                data.tl_task.push(array[index].value);
            }
        }
        console.log(data.tl_task.toString())
        data.tl_task = data.tl_task.toString();
        if(data.tl_task.length==0){
            alert("Fallo en la creacion de la tarea, debe Agregar Subtareas")
            closeModal()
        }
        console.log(idEdit)
        if (idEdit == 0) {
            
            setInput([])
            axios.post('https://backtodolist-v1.herokuapp.com/todolist/create', data)
                .then(res => {
                    console.log(res.data)
                })
        }else{
            setInput([])
            data=Object.assign(data,{"id":idEdit})
            console.log(data)
            axios.put('https://backtodolist-v1.herokuapp.com/todolist/update',data )
                .then(res => {
                    console.log(res.data)
                })
                
            
        }

        console.log(data)
    }




    function AgregarCampos(e) {
        e.preventDefault();
        const key = count;
        setCount(count + 1);
        const campo =
            <div key={key} id={key} className="flex">
                <input id={key} name="task" className='task bg-color1 rounded-full active:rounded-full p-2 pl-4' required autoFocus />
                <button onClick={() => deleteCampo(key)}><FcDeleteRow style={{ fontSize: "2rem" }} /></button>
            </div>
        setInput(input => [...input, campo]);
    }

    function deleteCampo(key) {
        const array = [...input];
        const filter = array.filter(item => item.props.id != key)
        setInput(filter);
    }

    function closeModal() {
        setId(0)
        data.tl_title = ""
        data.tl_description = ""
        data.tl_date = ""
        data.tl_task = []
        data.tl_state = false
        setInput([])
        setIsOpen(false);
    }

    function closeModalC() {
        setIsOpen(false);
    }

    function openModalCalendar(e) {
        e.preventDefault();
        closeModalC()
        setDateModal(true)

    }

    function handleChange(e) {
        console.log(e)
        if (e.target.id == "title") {
            data.tl_title = e.target.value
        } else {
            data.tl_description = e.target.value
        }
    }

    return (
        <div className='sm:w-1/2 text-white z-10'>
            <ModalView
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"

            >
                <div className='flex justify-end'>
                    <button onClick={closeModal}><FcUndo style={{ fontSize: "2rem" }} /></button>
                </div>
                <div><h1 className='text-lg font-bold text-color9'>Crear nueva tarea</h1></div>
                <form className='text-white flex flex-col'>
                    <input id="title" className='bg-color1 rounded-full active:rounded-full p-2 pl-4' defaultValue={data.tl_title} onChange={e => handleChange(e)} required autoFocus />
                    <label htmlFor="description">Descripcion</label>
                    <input id="description" className='bg-color1 rounded-full active:rounded-full p-2 pl-4' defaultValue={data.tl_description} onChange={e => handleChange(e)} required autoFocus />

                    <div id="campos" className='h-[10rem] mt-2 overflow-auto p-2 flex flex-col gap-2'>
                        Subtareas
                        {input}
                    </div>
                    <div className='flex flex-row pt-4  justify-between'>
                        <div className='flex gap-4'>
                            <button onClick={e => openModalCalendar(e)}><FcOvertime style={{ fontSize: "2rem" }} /></button>
                            <button onClick={e => AgregarCampos(e)}><FcParallelTasks style={{ fontSize: "2rem" }} /></button>
                        </div>
                        <button onClick={createTask} className='bg-color3 p-1 rounded-full'><FcApproval style={{ fontSize: "2rem" }} /></button>
                    </div>
                </form>
            </ModalView>
        </div>
    )
}

export default Modal
