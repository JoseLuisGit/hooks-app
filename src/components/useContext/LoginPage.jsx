import { useContext } from "react";
import { UserContext } from "./context/UserContext";


const currentUser = {
  id: 'hello',
  name: 'Jose'
}

export const LoginPage = () => {

  const {user, setUser} = useContext(UserContext) 


  return (
    <>
      <h1>LoginApp { user?.name }</h1>
      <br />

      <button className="btn btn-primary" onClick={ () => {setUser(currentUser)}} >
        Load User
      </button>
    </>
  );
};
