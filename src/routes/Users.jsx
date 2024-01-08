//Home display of all the User profile
  

import { useState, useEffect, useRef } from "react"
import UserContainer from "./UserContainer";
// import Search from "./Search";
import Loading from "./Loading";
// import NotFound from "./NotFound";



export default function Users() {    
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState("");
  // const [found, setFound] = useState("");

  let baseURL = "https://api.github.com/users";
  
  async function AllUsers(){
    const res = await fetch(baseURL);
    const data = await res.json();
    setUsers(data);
    
  } //listing all the user at the time of opening

  useEffect(()=>{
    AllUsers();
  }, [setUsers]);


  const reff = useRef('')
  
    async function findUser(){ // listing searched user
        const value = reff.current.value;
        console.log(reff.current.value)

        if(value!==""){
          setUsers("");
          setLoading(true);
          const jData = await fetch(baseURL+"/"+value);
          const Data = await jData.json();

          setUsers(()=>[Data]);

          // users.login ? setFound(true) : setFound(false);

        


          reff.current.value = "";

          setLoading(false);
          

        }else{
          AllUsers(); 
        }
    }


  return (
    <div >

    <div className='flex flex-row justify-center items-center py-10'>
        
        <div className='lg:w-1/3 w-3/4 flex flex-row gap-x-5 shadow-lg'>
        <input type="text" ref={reff} placeholder='Enter UserName......' className='w-full lg:h-[50px] rounded-lg border-none px-10' />

        <button onClick={findUser} className=' py-2 px-4 font-bold text-white transform duration-300 hover:scale-105 rounded-lg bg-cbg '>Search</button>

        </div>
    </div>
       
    {loading ? <Loading/>: <UserContainer  users = {users}/> }

    </div>
  )
}
