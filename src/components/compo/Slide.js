import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaCalendarCheck } from 'react-icons/fa';
import './Slide.css'
import { Link } from 'react-router-dom';


function Slide({ menuItem }) {
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

 



console.log(menuItem)





  return (

    
    <div className='slides'>
      <Slider {...settings}  >
        {menuItem.map((item) => {
          return <div className='slide-item' key={item.id}>
            <div className='slide-card'>
              <div className="slide-container-item">
                <div className='img-section-container'><div className='img-section' style={{ backgroundImage: `url(${item.picture})` }}></div> </div>
                <Link to={`/event/${item.id}`} key={item.id}><h2>{item.title}</h2></Link>
                <p>{item.description} Partagez votre caméra, créez des sondages et des enquêtes, posez et répondez
                Partagez votre caméra, créez des sondages et des enquêtes, posez et répondez
                </p>

              </div>


              <div className='card-icons'><FaCalendarCheck />   Tanger, {item.datevent}</div>
            </div>

          </div>
        })
        }
        <div className='slide-item'>
          <div className='slide-card'></div>
        </div>
        <div className='slide-item'>
          <div className='slide-card'></div>
        </div>
        <div className='slide-item'>
          <div className='slide-card'></div>
        </div>
     
      </Slider></div>
  );
}

export default Slide
