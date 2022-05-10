import { useSession, signIn, signOut } from "next-auth/react";
import * as yada from "./services";

export default function Component() {
  // const services = new Services()

  const { data: session } = useSession();
  if (session) {
    console.log(yada.Services());
    const res = yada.Services();
    
    return (
      <>
        Signed in {res.username}<br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
