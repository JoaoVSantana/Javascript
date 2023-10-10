import './Header.css';

function Header () {
    return(
        <header className='Header'>
            <div className='div-logo'>
                <img src="./images/logo.png" alt="Logo do Site " />
                <h2 className='texto-logo'>Furniro</h2>
            </div>
            <div className='links-header'>
                <p>chupo pikas grandes e saborosas!</p>
                <p>Shop</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div className='icones-header'>
                <img src="./images/iconePerfil.png" alt="Ícone de Perfil" />
                <img src="./images/iconePesquisa.png" alt="Ícone de Pesquisa" />
                <img src="./images/iconeFavoritos.png" alt="Ícone de Favoritos" />
                <img src="./images/iconeCarrinho.png" alt="Ícone de Carrinho" />
            </div>
        </header>
    );
}

export default Header