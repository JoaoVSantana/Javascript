import './Carrosel.css';

function Carrosel () {
    return (
        <section className='carrosel'>
            <div className='content'>
                <h3>50+ Beautiful rooms inspiration</h3>
                <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <button className='botao3'>Explore More</button>
            </div>
            <img src="./images/InnerPeace.png" alt="" />
            <div className='content2'>
                <img id="img1" src="./images/foto1.png" alt="" />
                <img id="img2" src="./images/opcoes.png" alt="bolinhas" />
            </div>
            
        </section>
    )
}

export default Carrosel;