import React,{ useEffect } from "react"
function Footer(){

    const ref = React.useRef(null)

   
       

    useEffect(()=>{
        new ResizeObserver(() => {
            if (document.body.clientHeight < window.outerHeight){
                ref.current?.style.setProperty('--bottom', '0')
            }else {
                ref.current?.style.setProperty('--bottom', 'initial')
            }
        }).observe(document.body)
        
        if (document.body.clientHeight < window.outerHeight){
            ref.current?.style.setProperty('--bottom', '0')
        }
    },[])

    return (
        <footer ref={ref} className="absolute bg-slate-200 bottom-[var(--bottom)]  w-full justify-center text-sm text-gray-600 text-center inline-flex items-center">
            <span>Creado por Wysted y Deno</span>
        </footer>
    )
}
export default Footer


// Gey