import { useState } from 'react';
import './ToDoList.css';
import '../Temas'
import Temas from '../Temas';

function ToDoList() {

    const [tarefas, setTarefa] = useState([]);
    const [textoTarefa, SetTextoTarefa] = useState("");

    function adicionarTarefas() {
        console.log(textoTarefa)
        if (textoTarefa.length < 2) {
            alert("Nome da tarefa é muito curto")
            return
        }

        let novaTarefa = [...tarefas, textoTarefa];
        setTarefa(novaTarefa)

        console.log(novaTarefa)
    }

    return (
        <>
            <div>
                <Temas/>
                <h2>Lista de tarefas</h2>
                <input type="text" placeholder='Digite sua tarefa' onInput={event => { SetTextoTarefa(event.target.value) }} />
                <button onClick={adicionarTarefas}>Adicionar</button>
            </div>
            <div>
                {
                    tarefas.map((tarefaTexto, index) => {
                        return (
                            <p key={index}>{tarefaTexto}</p>
                        );
                    }
                    )}
            </div>
        </>
    );
}

export default ToDoList;