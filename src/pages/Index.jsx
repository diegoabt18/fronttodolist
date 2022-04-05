import React from 'react'
import image from '../images/image3.png'

const Index = () => {
    return (
        <div className='grid text-center items-center justify-center grid-cols-1 lg:grid-cols-2'>
            <div>
                <h1 className='text-color5 text-[2.5rem] font-bold'>Todo List</h1>
                <div className='flex justify-center items-center'>
                    <img src={image} alt="no fount" />
                </div>
            </div>
            <h1 className='text-white text-[2rem]'>Bienvedio al sistema de tareas</h1>
        </div>
    )
}

export default Index