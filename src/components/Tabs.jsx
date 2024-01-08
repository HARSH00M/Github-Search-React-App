// import UserContainer from "./UserContainer";

//Custom hook to render the detail at the bottom of profile of each user...
const Tabs = ({type, setType}) => {


  return (
    <> 
    <div className='border-b-2 mt-[10%] pb-6 text-white text-2xl flex flex-row justify-center gap-x-10'>
        <button onClick={()=>setType("repo")} 
        className={type === "repo" ? "text-cbg": undefined} >Repositories</button>
        <button onClick={()=>setType("recieved_events")}
        className={type==="recieved_events" ? "text-cbg": undefined}>Activity</button>
        <button onClick={()=>setType('f')}
        className={type === 'f' ? "text-cbg": undefined}>Followers</button>

    </div>
    


    </>
    
  )
}


export default Tabs;