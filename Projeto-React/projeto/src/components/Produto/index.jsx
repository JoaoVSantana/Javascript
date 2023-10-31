import './Produto.css'

function Produto(props) {
    return(
      <div className='produto'>
            <img src={props.img} alt="Imagem do Produto" />
        <div className='textos-produto'>
            <h2 className='tituloProduto'>{props.title}</h2>
            <p className='descProduto'>{props.desc}</p>
            <div className='precos'>
                <p className='precoAtual'>{props.preco}</p>
                <p className='precoAntigo'>{props.precoAnt}</p>
            </div>  
        </div>
      </div>  
    )
}

export default Produto;