import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css'
import Navv from './navbar';


const Home = () => {
    const settings= {
        dots: false,
        infinite: true,
        speed: 1900,
        slidesToShow: 3, 
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        autoplay: true,
        autoplaySpeed: 0,
    };
    return (
        
        <div className="container">
            <h1 className='br'>Be Real.</h1>
            <Slider {...settings}>
                    <img src="https://i.pinimg.com/564x/97/5a/cd/975acd9d84a70d3fb59c3f95084ed1ce.jpg" alt="ft1" className="a"/>
                    <img src="https://i.pinimg.com/564x/17/d9/f7/17d9f787ea01c169608215b5e44faa33.jpg" alt="ft2" className="b" />
                    <img src="https://i.pinimg.com/564x/a9/6c/83/a96c830087cec685ce115d6783a77b47.jpg" alt="ft3" className="c" />
                    <img src="https://i.pinimg.com/564x/f1/23/27/f1232759eb3c9a9745249fee0dbfcfa8.jpg" alt="ft4" className="d" />
                    <img src="https://i.pinimg.com/564x/8a/5e/3a/8a5e3a41e16bd2d6246111d22271456a.jpg" alt="ft5" className="e" />
                    <img src="https://i.pinimg.com/564x/9a/19/a5/9a19a58fff4397ada880cd7e71f7f16f.jpg" alt="ft6" className="f" />
            </Slider>
            <Navv />
        </div>
        
    )
}
export default Home
