import { useEffect } from "react"

const ComponenteTest = () => {
    const [state, setState] = useState()
    useEffect(() => {
        const callback = (e)=>{
            if(e.target.id=="modal"){
                setState(false)
            }
        }

        document.addEventListener("click",callback)
        
        return () => {
            document.removeEventListener("click",callback)
        }
    }, [])


    return (
        <div>ComponenteTest</div>
    )
}

export default ComponenteTest