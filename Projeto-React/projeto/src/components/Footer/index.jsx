import './Footer.css';

function Footer () {
    return (
    <section className='footer'>
        <div className='part1'>
            <div className='texta'>
                <h4>Funiro.</h4>
                <p>400 University Drive Suite 200 Coral Gables,</p>
                <p>FL 33134 USA</p>
            </div>
            <div className='textb'>
                <h4>Links</h4>
                <p>Home</p>
                <p>Shop</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div className='textc'>
                <h4>Help</h4>
                <p>Payment Options</p>
                <p>Returns</p>
                <p>Privacy Policies</p>
            </div>
            <div className='textd'>
                <h4>Newsletter</h4>
                <div className='contentd'>
                    <div className='left'>
                        <p>Enter Your Email Address</p>
                        <img src="./images/linha1.png" alt="" />
                    </div>
                    <div className='right'>
                        <p>SUBSCRIBE</p>
                        <img src="./images/linha1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='part2'>
            <img src="./images/linha2.png" alt="" />
            <p>2023 furino. All rights reserved</p>
        </div>
    </section>
    )
}

export default Footer;