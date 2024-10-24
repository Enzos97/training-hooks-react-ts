import { useState } from "react"
interface User {
    uuid:string;
    name:string
}
export const Usuario = () => {
const [user, setUser] = useState<User>()
const login = () =>{
    setUser({
        uuid: 'ABC123',
        name: 'Enzo Sanchez'
    })
}
  return (
    <div className="mt-5">
        <h3>Usuario: useState</h3>
        <button
            onClick={login}
            className="btn btn-outline-primary">
            Login
        </button>
        {
            (!user)
                ?<pre>No hay usuario</pre>
                :<pre>{JSON.stringify(user)}</pre>
        }
    </div>
  )
}
