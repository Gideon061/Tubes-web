import React from 'react'
import { MenuData } from '../Menu/MenuData'
import './Carousel.css'
import '../../App.css'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import Slider from 'react-slick'
function Carousel() {

  const [imageIndex,setImageIndex] = React.useState(0)

  const NextArrow =({onClick}) =>{
    return(
      <div className='arrow next' onClick={onClick}>
        <MdChevronRight className='slider-icon' />
      </div>
    )
  }
  const PrevArrow =({onClick}) =>{
    return(
      <div className='arrow next' onClick={onClick}>
        <MdChevronLeft className='slider-icon' />
      </div>
    )
  }
  const settings = {
    infinite: true,
    lazyLoad:true,
    speed: 300,
    slidesToShow: 4,
    centerMode: true,
    centerPadding:0,
    nextArrow:<NextArrow />,
    PrevArrow:<PrevArrow />,
    responsive:[
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

  const Data = MenuData.map((data,index)=>{
    return(
      <div key ={index}className='card slider-card'>
        <div className='card-header'>
          <img src={data.url}></img>
        </div>
        <div className="card-body">
          <h4>{data.name}</h4>
          <p>{data.body}</p>
        </div>
      </div>
    )
  })
  return (
    <div>
    <div className ='row-menu container'>
      <Slider {...settings}>
        {Data}
      </Slider>
      </div>
      </div>
      
  )
}

export default Carousel
