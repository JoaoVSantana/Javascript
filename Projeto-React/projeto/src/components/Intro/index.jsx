import './Intro.css'
import Card from '../Card';

function Intro() {
    return (
        <div className='introdução'>
            <div className='textosIntro'>
                <h2 className='tituloIntro'>Browse The Range</h2>
                <h3 className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            </div>

            <div className='div-imagens'>
                <Card img="./images/imageDining.png" text="Dining" />
                <Card img="./images/imageLiving.png" text="Living"/>
                <Card img="./images/imageBedroom.png" text="Bedroom"/>
            </div>
        </div>
    );
}

export default Intro;