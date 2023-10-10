import './Formulario.css';
import CampoTexto from '../CampoTexto';

const Formulario = () => {
    return (
        <section className= "formulario">
            <form>
                <h2>Preencha os seus dados para a compra</h2>
                <CampoTexto label="Nome: " placeholder="Digite seu Nome"/>
                <CampoTexto label="Sobrenome: " placeholder="Digite seu Nome"/>
            </form>
        </section>
    );
}

export default Formulario