import React from 'react';
import BannerImage from "../../Assets/Images/5.png"
import "./Banner.css";
import Avatar from "../../Assets/Images/th.jpg"
import CollectionCard from '../Card/Card';
import ClubCard from '../Card/ClubCard';



const Banner = () => {


 
  return (
    <>
     <div className='container'>
     <div className='banner position-relative'>
       <img src={BannerImage} alt="" className='img-responsive banner-img'/>
       <img src={Avatar} alt="" className='position-absolute avatar-img translate-middle' />
     </div>

     <div className='creator-div'>
        <h6 className='creator-heading'>Creator/Investor Name</h6>
        <p className='creator-para'>Artist</p>

     </div>

     <div className='follow-div'>
        <div className='d-flex justify-content-around'>
            <div className='  d-flex followers'>
            <div>
            <h6 className='creator-heading'>250</h6>
            <p className='creator-para'>Bonds</p>
            </div>
            
            
            <div>
            <h6 className='creator-heading'>3000</h6>
        <p className='creator-para'>Follower</p>
            </div>
          
           
           <div>
           <h6 className='creator-heading'>5000</h6>
        <p className='creator-para'>Following</p>
           </div>
           
            </div>
            <div className=''>
                <button className='follow-btn' style={{padding:"5px 20px"}}>
                    Follow
                </button>
            </div>
        </div>
     </div>

     <div className='mt-4 mb-4'>
     <p className='creator-para'>Note about the product that can explain the idea or importance of the product that can explain the idea or importance of the product and USP</p>
     </div>

     <div className='nfb-collection d-flex justify-content-between'>
     <h6 className='creator-heading'>My NFB Collection</h6>
        <button style={{backgroundColor:'black' , border:"1px solid #ccc" , padding:"5px 10px"}} >
            View All
        </button>
        
       
     </div>
     <CollectionCard/>
     <div className='nfb-collection d-flex justify-content-between mt-3'>
     <h6 className='creator-heading'>My NFB Clubs</h6>
        <button style={{backgroundColor:'black' , border:"1px solid #ccc" , padding:"5px 10px"}} >
            View All
        </button>
        
       
     </div>
     <ClubCard/>


     </div> 

    
    </>
  )
}

export default Banner




