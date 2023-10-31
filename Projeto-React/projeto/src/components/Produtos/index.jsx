import './Produtos.css'
import Produto from '../Produto'

function Produtos() {
    return (
        <div className='produtos'>
            <div className='tituloProdutos'>
                <h2>Our Products</h2>
            </div>

            <div className='lista1'>
                <Produto img='./images/produto1.png' title="Syltherine" desc="Stylish cafe chair" preco="Rp 2.500.000" precoAnt="Rp 3.500.000" />
                <Produto img='./images/produto1.png' title="Leviosa" desc="Stylish cafe chair" preco="Rp 2.500.000" />
                <Produto img='./images/produto3.png' title="Lolito" desc="Luxury big sofa" preco="Rp 7.000.000" precoAnt="Rp 14.000.000" />
                <Produto img='./images/produto4.png' title="Respira" desc="Outdoor bar table and stool" preco="Rp 500.000"/>
            </div>

            <div className='lista2'>
                <Produto img='./images/produto1.png' title="Syltherine" desc="Stylish cafe chair" preco="Rp 2.500.000" precoAnt="Rp 3.500.000" />
                <Produto img='./images/produto1.png' title="Syltherine" desc="Stylish cafe chair" preco="Rp 2.500.000" precoAnt="Rp 3.500.000" />
                <Produto img='./images/produto1.png' title="Syltherine" desc="Stylish cafe chair" preco="Rp 2.500.000" precoAnt="Rp 3.500.000" />
                <Produto img='./images/produto1.png' title="Syltherine" desc="Stylish cafe chair" preco="Rp 2.500.000" precoAnt="Rp 3.500.000" />
            </div>

            <button className='botaoCompra'>Show More</button>
        </div>
    )
}

export default Produtos;