import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = ({data})=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    };
    return (
        <div>
            <Slider {...settings}>
                {
                    data.map((item)=>(
                        <div key={item.id} >
                            <div 
                            className="carrousel_wrapper"
                            style={{
                                background:`url(/images/arts/${item.name}) no-repeat`
                            }}>
                                <div>{item.title}</div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}


export default CarouselComponent;