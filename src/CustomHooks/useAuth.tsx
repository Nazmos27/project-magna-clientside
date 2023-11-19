//TODO: make a custom hook and replace it
import {useContext} from 'react'
import { AuthContext } from "../Providers/AuthProvider"


const useAuth = () => {
  const auth = useContext(AuthContext)
  return auth;
}

export default useAuth