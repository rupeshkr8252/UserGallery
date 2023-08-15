import React from 'react'
import { NfbCollection } from '../../Data/Data';
import "../Banner/Banner.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { useMediaQuery } from "react-responsive";

const CollectionCard = () => {

  // const isMobile = useMediaQuery({ maxWidth: 827 });

 

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      showDots: false,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      showDots: false,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1,
    },
  };


  const isMobileOrTablet = window.innerWidth <= 824;

  

  const carouselStyle = {
    padding: "0 10px",
    margin: "0 10px",
  };

  const itemStyle = {
    margin: "0 10px",
  };

  return (
    <div>
    <Carousel
              className="d-flex justify-content-between text-center mt-3 collection-cnt"
              responsive={responsive}
              showDots="true"
              arrows="true"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              autoPlay={"true"}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              infinite={true}
              style={{carouselStyle}}
            > 
            {NfbCollection.map((item,index) => (
        <div className='' style={itemStyle}>
            <img src={item.imgsrc} alt="" className='img-responsive w-100 collection-imgs'/>
            <h6 className='creator-heading'>{item.heading}</h6>
        <p className='creator-para'>{item.desc}</p>
    </div>
   
            
    ))
     } 
            </Carousel>

   
    
        
    </div>
      
  )
}

export default CollectionCard
