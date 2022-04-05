import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ButtonLink from '../Components/actions/ButtonLink'
import Modal from '../Components/Modal'
import ModalCalendar from '../Components/ModalCalendar'
import { FcPlus } from "react-icons/fc";
import Task from '../Components/Task'
import { useParams } from 'react-router-dom'

var datos = {
    tl_title: "",
    tl_description: "",
    tl_date: "",
    tl_task: [],
    tl_state: false
};

const Categories = () => {

    const [data, setData] = useState([]);
    const [json, setJson] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [dateModal, setDateModal] = useState(false);
    const [date, setDate] = useState("");
    const [Id, setId] = useState(0)
    const {categories}=useParams();

    useEffect(() => {
        api();
        loadJson();
    }, [categories])

    async function api() {
        await axios.get('https://backtodolist-v1.herokuapp.com/todolist/list')
            .then(res => {
                const result = res.data;
                if(categories==undefined)
                {
                 setJson(result)
                 setData(result)
                 }
                 else
                 setData(result)
                 
            })
            console.log(categories)
    }

    function loadJson(){
        
        if(categories=="all"){
            
            setJson(data)
        }
        if(categories=="today"){
            today()
        }
        if(categories=="future"){
            future()
        }
        if(categories=="complete"){
            complete()
        }
    }

    function openModal() {
        setIsOpen(true)
    }

    function all() {
        api()
    }

      function today() {
        
         const filter = data.filter(element => {
            const date1 = element.tl_date
            const date2 = new Date().toISOString().substring(0, 10)
            if (date1 == date2) {
                return true
            }
        })
        setJson(filter)
        
    }

    function future() {
        const filter = data.filter(element => {
            const date1 = new Date(element.tl_date)
            const date2 = new Date()
            if (date1.getTime() > date2.getTime()) {
                return true
            }
        })
        setJson(filter)
    }

    function complete(){
        const filter = data.filter(element => {
            return element.tl_state==true
        })
        setJson(filter)
    }

    const showDatePicker = () => {
        setDateModal(true);
    };

    return (
        <div className='pb-[140px] pt-6' >
            <div className="flex px-4 gap-4 rounded-md shadow-sm overflow-x-scroll no-scrollbar" role="group">
                <ButtonLink fun={all} name={"Todos"} tolink={'all'} />
                <ButtonLink fun={today} name={"Hoy"} tolink={'today'} />
                <ButtonLink fun={future} name={"Planeado"} tolink={'future'} />
                <ButtonLink fun={complete} name={"Completadas"} tolink={'complete'} />
            </div>
            <h1 className='pt-4 text-white text-center text-lg text-bold text-[2rem] py-2'>Lista de tareas</h1>
            <div className='grid pt-2 gap-2 px-4 justify-center items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>

                {
                    json.map(item => {
                        return <Task key={item.id} item={item} title={item.tl_title} description={item.tl_description} task={item.tl_task} state={item.tl_state} date={item.tl_date} data={datos} setIsOpen={setIsOpen} setId={setId} apiGet={api} />
                    })
                }
            </div>

            <ModalCalendar dateModal={dateModal} setDateModal={setDateModal} setDate={setDate} setIsOpen={setIsOpen} />
            <Modal setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} setDateModal={setDateModal} date={date} data={datos} idEdit={Id} setId={setId} />
            <button className='bg-color3 p-2 fixed bottom-[70px] right-5 rounded-full' onClick={openModal}><FcPlus style={{ fontSize: "2.5rem" }} /></button>
        </div>
    )
}

export default Categories