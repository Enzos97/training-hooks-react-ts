import { useEffect, useRef, useState } from "react"

type TimerArgs = {
    milisegundos:number;
}

export const Timer = ({milisegundos}:TimerArgs) => {

    const [segundos, setSegundos] = useState(0)
    const ref = useRef<number>();

    useEffect(() => {
        ref.current && clearInterval(ref.current);
        ref.current=setInterval(()=> setSegundos(s=>s+1),milisegundos);
    }, [milisegundos])
    
    return (
        <div>
            <h4>Timer: <small>{segundos}</small></h4>
        </div>
    )
}
