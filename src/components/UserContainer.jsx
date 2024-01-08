import { Link } from "react-router-dom";


//design of each flex unit of user in Home Menu
export default function UserContainer({ users }) {
  return (
    <div className="flex flex-row flex-wrap gap-10 lg:gap-x-10 lg:gap-y-0 py-10  items-center justify-center font-serif">
      {users &&
        users.map((user, idx) => {
          return (
            <div
              key={idx}
              className="lg:w-[200px] w-[150px] flex flex-col items-center border rounded-xl border-gray-400 lg:mx-10 lg:my-10 bg-gray-900 shadow-md py-10"
            >
              <img
                className="lg:w-28 w-24 mb-3 border-4 border-cbg rounded-full"
                src={user.avatar_url}
                alt=""
              />
              <h3 className="text-xl my-2 text-white">{user.login}</h3>
              <Link
                to={`/${user.login}`}
                className="cursor-pointer hover:scale-105 duration-300 mt-2"
              >
                <span className="text-xl border-1  border-black rounded-lg bg-cbg px-4 py-[4px] text-white">
                  view
                </span>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
