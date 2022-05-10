import { useSession } from "next-auth/react"
import Login from './login'

export default Quizzes;

function Quizzes() {
    const { data: session, status } = useSession()
  

if (status === "authenticated") {
  return <p>Signed in as {session.user.email}</p>
  
}

return <Login/>

}