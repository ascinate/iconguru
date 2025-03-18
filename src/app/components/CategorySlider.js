"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

var settings = {
    dots:  true,
    infinite: true,
    margin:30,
    speed: 500,
    slidesToShow:3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots:  true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          infinite: true,
          dots:  true
        }
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots:  true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots:  true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots:  true
        }
      }
    ]
  };
function CategorySlider() {
    
     return(
        <>
          <div className="container">
             <div className="slider-parts">
                <Slider {...settings}>
                     <div className="items-process1">1</div>
                     <div className="items-process1">2</div>
                     <div className="items-process1">2</div>
                     <div className="items-process1">2</div>
                     <div className="items-process1">2</div>
                     <div className="items-process1">2</div>
                </Slider>
             </div>
          </div>
        </>
     );
}
export default CategorySlider;