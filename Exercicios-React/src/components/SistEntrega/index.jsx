import { useState } from 'react';

function DeliveryStatus () {

     const [status, setStatus] = useState("Pendente");
 
     const attPendente = () => {
        setStatus("Pendente");
     }
     
     const attTransito = () => {
        setStatus("Em Trânsito");
     }

     const attEntregue = () => {
        setStatus("Entregue");
     }

     return (
        <div>
            <h1>Situação do Pedido: {status}</h1>
            <button onClick={attPendente}>Pendente</button>
            <button onClick={attTransito}>Em trânsito</button>
            <button onClick={attEntregue}>Entregue</button>

        </div>
     )
}

export default DeliveryStatus;