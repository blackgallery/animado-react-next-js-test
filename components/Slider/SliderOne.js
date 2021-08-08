import React from 'react';
import SlickSlider from '../UI/Carousel/slick'
import SliderData from '../../data/Slider/home-one' 
import Link from 'next/link';

const NextArrow = ({className, onClick}) => {
    return (
        <button className={className} onClick={onClick}><i className="arrow_right"/></button>
    )
};

const PrevArrow = ({className, onClick}) => {
    return (
        <button className={className} onClick={onClick}><i className="fa fa-facebook"/></button>
    )
};

    const Slider = () => {

        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            margin:0,
            infinite: true,
            dots: true,
            autoplay: false,
            autoplaySpeed: 5000,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
            responsive: [
                {
                    breakpoint: 1229,
                    settings: {
                        arrows: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                }
            ]
        };


        return (
            <div className="slides_wrapper">
                <div className="slider_home">
                    <SlickSlider {...settings}>
                        {
                            SliderData.map(item => (
                                <div className={`slider-${item.id}`} key={item.id}>
                                    <div className="single_slider"
                                        style={{backgroundImage: `url(${('../../assets/images/' + item.bg)})`}} >
                                        <div className="slider_item_tb">
                                            <div className="slider_item_tbcell">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-sm-12">   
                                                            <h2 dangerouslySetInnerHTML={{__html: item.title}}/>
                                                            <p> {item.description}</p>
                                                            <div className="slider_btn">
                                                                <Link href={`${item.btnLink}`}>
                                                                    <a className="slider_btn_one more-link"> 
                                                                        {item.btnText} 
                                                                    </a> 
                                                                </Link>
                                                            </div> 

                                                        </div>
                                                        <div className="animate_item animate_item4 bounce_animate col-lg-6 col-sm-12">
                                                            <img src={ ` ${('../../assets/images/' + item.smallImg)} ` } alt="" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </SlickSlider>
                </div>
            </div>
        );
    };

export default Slider;