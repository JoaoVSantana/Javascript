import './Meritos.css';

function Meritos () {
    return (
        <section className='meritos'>
            <div className='content-final'>
                <img src="./images/trofeu.png" alt="" />
                <div className='text-final'>
                <h4>High Quality</h4>
                <p>crafted from top materials</p>
                </div>
            </div>
            <div className='content-final'>
                <img src="./images/selo.png" alt="" />
                <div className='text-final'>
                <h4>Warranty Protection</h4>
                <p>Over 2 years</p>
                </div>
            </div>
            <div className='content-final'>
                <img src="./images/entrega.png" alt="" />
                <div className='text-final'>
                <h4>Free Shipping</h4>
                <p>Order over 150 $</p>
                </div>
            </div>
            <div className='content-final'>
                <img src="./images/atendimento.png" alt="" />
                <div className='text-final'>
                <h4>24 / 7 Support</h4>
                <p>Dedicated support</p>
                </div>
            </div>
        </section>
    )
}

export default Meritos;