import './Card.css'

function Card (props) {
    return(
        <div>
            <img src={props.img} alt="Imagem do Card" />
            <p className='textoImagem'>{props.text}</p>
        </div>
    )
}

export default Card;