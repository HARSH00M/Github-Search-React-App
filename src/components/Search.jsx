import {useRef} from 'react';




export default function Search() {
    const user = useRef('')

    function findUser(){
        console.log(user.current.value)
    }

  return (
    <div className='flex flex-row justify-center items-center py-10'>
        
        <div className='lg:w-1/3 w-3/4 flex flex-row gap-x-5 shadow-lg'>
        <input type="text" ref={user} placeholder='Enter.....' className='w-full lg:h-[50px] rounded-lg border-none px-10' />

        <button onClick={findUser} className=' py-2 px-4 font-bold text-white transform duration-300 hover:scale-105 rounded-lg bg-green-600 '>Search</button>

        </div>
    </div>
  )
}
