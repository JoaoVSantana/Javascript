import { useState, useEffect } from 'react'
import './Temas.css'

function Temas (){
    const [tema, setTema] = useState('claro');
    const toggleTheme = () => {
        if(tema === 'claro') {
            setTema('escuro');

        } else {
            setTema('claro');
        }
    };
    
    useEffect(() => {
        document.body.className = tema;
      }, [tema]);
    return(
        <>
        <button onClick={toggleTheme}>Alterar tema</button>
        </>
    );
}

export default Temas;