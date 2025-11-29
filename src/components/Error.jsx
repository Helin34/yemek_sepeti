import React from 'react'
import Home from '../pages/Home'


const Error = ({msg,retry}) => {
  return (
    <div className='bg-red-100 my-20 p-10 rounded-md text-lg text-center'>
      <p className='font-semibold'>Üzgünüz bir hata oluştu</p>
      <p>{msg}</p>
        <div className='flex justify-center'>
        <button onClick={retry} 
        className='border p-2 px-4 rounded-md hover:bg-zinc-100 transition'>
            Tekrar Dene</button>
    </div>
    </div>
  
  )
}

export default Error
