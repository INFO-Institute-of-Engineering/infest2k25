import React from 'react'

const Menu = () => {
    return (
        <div>
            <div className=' flex flex-col gap-10 border p-10 rounded-md w-[20%] h-full items-center'>
                <p className=' font-medium text-gray-700 hover:underline hover:decoration-blue-600'>Home</p>
                <p className=' font-medium text-gray-700 hover:underline hover:decoration-blue-600'>About</p>
                <p className=' font-medium text-gray-700 hover:underline hover:decoration-blue-600'>Events</p>
                <p className=' font-medium text-gray-700 hover:underline hover:decoration-blue-600'>Contact</p>
            </div>
        </div>
    )
}

export default Menu