//Profile template for each user


import React, {useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Tabs from './Tabs';
// import UserContainer from './UserContainer';



const UserInfo = ()=> {

  const [user, setUser] = useState([]);
  const [type, setType] = useState();
  
  
  const navigate = useNavigate();
  const {pathname} = useLocation();


    let Endpoint = "https://api.github.com/users";

    async function GetUserInfo(){

        const res = await fetch(Endpoint + pathname)
        const data = await res.json()

        setUser(()=>[data]);
        console.log("UserData");
        console.log(data);
    }
    async function GetUrls(){
      const res = await fetch(Endpoint + pathname + `/${type}`);
      const data = await res.json();
      console.log(data);
      setInfo(data);
    }
    useEffect(()=>{
        GetUserInfo();
        GetUrls();        
    }, [pathname, type])
    //fetching the data after every changes of Pathname and Type

  return (
    <div className=''>
       
       <button
        onClick={() => navigate('/')}
        className="px-5 py-1 font-medium mx-1 my-4 w-20 bg-cbg rounded-lg text-gray-200"
      >
        BACK
      </button>
      {user &&
        user?.map((uinfo, i) => (
          <div
            key={i}
            className="flex justify-center md:flex-row
             md:px-0 px-4 flex-col gap-10 text-white font-serif font-bold my-10"
          >
            <img
              src={uinfo.avatar_url}
              className="lg:w-[350px] border-4 border-cbg rounded-lg md:mx-0 mx-auto w-2/3"
            />
            <div className="text-lg leading-10 px-3 flex flex-col self-center justify-center">
              <h1 className="text-3xl pb-4">{uinfo.name}</h1>
              <h1>
                <span className="text-cbg">Login_name</span> :{uinfo.login}
              </h1>
              <h1>
                <span className="text-cbg">followers : </span>
                {uinfo.followers}
              </h1>
              <h1>
                <span className="text-cbg">following : </span>
                {uinfo.following}
              </h1>
              <h1>
                <span className="text-cbg">public_repositories : </span>
                {uinfo.public_repos}
              </h1>
              <h1>
                <span className="text-cbg">Join : </span>
                {new Date(uinfo.created_at).toLocaleDateString()}
              </h1>
              <a
                href={uinfo.html_url}
                target="_blank"
                className="text-gray-200 
                  font-semibold rounded-lg cursor-pointer bg-cbg px-4 py-1 hover:scale-105 duration-300 my-3 w-20 tracking-wide"
              >
                Visit
              </a>
            </div>
          </div>
        ))}
        <Tabs type={type} setType={setType}/>
        <div>
    {type === "recieved_events" && 
      <div className='text-white'>
        Section for all the Contribution by user
      </div>
    }
    {type === "repo" && 
      <div className='text-white'>
        Section for all the Repositories of User
      </div>
    }
    {type === "followers" && 
      <div className='text-white'>
        {/* <UserContainer users = {info}/> */}
        Section for all the followers of the user
      </div>
    }

    </div>
        
    </div>
  )
}

export default UserInfo;
