import '../allcss/Home.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import  {useCollapse} from 'react-collapsed'
 
 
function Home() {

   const [open,setOpen]=useState(false)
  
  const navigate=useNavigate()
 
  const handleOpen=()=>{
    setOpen(!open);
  }
  const DiamondOpen=()=>{
    navigate('/Diamond');
   
  }
  const SilverOpen=()=>{
    navigate('/Silver');
   
  }

  const GoldOpen=()=>{
    navigate('/Gold');
   
  }

  const PostLandOpen=()=>{
    navigate('/PostLand');
   
  }

  const HelpOpen=()=>{
    navigate('/Help');
   
  }

  const LegalServicesOpen=()=>{
    navigate('/LegalServices');
   
  }





  return (
    <div> 
        <div itemID="carouselExampleSlidesOnly"  className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active"  data-bs-interval="1000">
    <img src="https://abazaar.s3-ap-south-1.amazonaws.com/images/banner/banner1.svg" className="d-block w-100" alt="..." />
      
    </div>
    <div className="carousel-item"  data-bs-interval="1000">
    <img src="https://abazaar.s3-ap-south-1.amazonaws.com/images/banner/banner3.svg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" >
      <img src="https://abazaar.s3-ap-south-1.amazonaws.com/images/banner/banner5.svg" className="d-block w-100" alt="..." />
    </div>
     

  </div>
</div>
        <div className="container mt-2 ">

      {/*first  row */}
          <div className="row text-center   ">
               {/*Diamond section */}
            <div className="col-sm-4 " >
            <div className="card">
            <div className="face face1">
                <div className="content">
                    <div className='icon'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwHAqmtd0-y8KcrxLg5msqOqCa3mFWylmLaw&usqp=CAU"  width="350px" height='200px' className='d-block ' alt="" />
                         <h3  >Diamond Listings</h3>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <h3>
                        <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
                    </h3>
                     <button className="btn draw-border bg-black text-white " onClick={DiamondOpen}>Buy Land</button>
                </div>
            </div>
        </div>
            </div>
          {/*government section */}
            <div className="col-sm-4 ">
            <div className="card">
            <div className="face face1">
                <div className="content">
                    <div className="icon">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCSrPRBUVcVL5yoAsD2K1Cueoo4eaiG2_cbQ&usqp=CAU"  width='350px' height='200px' className='d-block w-100' alt="" />
                        <h3  >Silver Listings</h3>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <h3>
                        <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
                    </h3>
                    <button className="btn draw-border bg-black text-white" onClick={SilverOpen}>Buy Land</button>
                </div>
            </div>
        </div>
            </div>
          {/*crop sell  section */}
            <div className="col-sm-4">
            <div className="card">
            <div className="face face1">
                <div className="content">
                    <div className="icon">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHbEWH6O3YkHEdCYT7GHIfbwGtB2N2DRnTg&usqp=CAU" width='350px' height='200px' className='d-block w-100'  alt="" />
                        <h3>Gold Listings</h3>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <h3>
                        <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
                    </h3>
                    <button className="btn draw-border bg-black text-white" onClick={GoldOpen}>Buy Land</button>
                </div>
            </div>
        </div>
            </div>
             
          </div>

     
        
         

        </div>

         {/*second row */}
         <div className="container">

        <div className="row text-center">

                {/*solution section */}
                <div className="col-sm-4">
                <div className="card">
                <div className="face face1">
                    <div className="content">
                        <div className="icon">
                            <img src="https://trendingonlinenow.in/wp-content/uploads/2019/09/Government-Schemes-for-Development-of-Agriculture-in-India-758x437.jpg" width='350px' height='200px' className='d-block w-100'   alt="" />
                            <h3>Post A Land</h3>
                        </div>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <h3>
                            <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
                        </h3>
                        <button className="btn draw-border bg-black text-white" onClick={PostLandOpen}>Post a Land</button>
                    </div>
                </div>
                </div>
                </div>
                {/*Training section */}
                <div className="col-sm-4">
                <div className="card">
                <div className="face face1">
                    <div className="content">
                        <div className="icon">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeW1Hxc4atDjz4ZEpZt9FP3ue8JlEsheB-Qg&usqp=CAU" width='350px' height='200px' className='d-block w-100' alt="" />
                            <h3>Legal Services</h3>
                        </div>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <h3>
                            <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
                        </h3>
                        <button className="btn draw-border bg-black text-white" onClick={LegalServicesOpen}>Legal services</button>
                    </div>
                </div>
                </div>
                </div>
                {/*Help section */}
                <div className="col-sm-4">
                <div className="card">
                <div className="face face1">
                    <div className="content">
                        <div className="icon">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy9mgg3CtGWY4rw0HAALblXf4OTNY3GrqEqQ&usqp=CAU" width='350px' height='200px' className='d-block w-100'  alt="" />
                            <h3>Help?</h3>
                        </div>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <h3>
                            <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
                        </h3>
                        <button className="btn draw-border bg-black text-white" onClick={HelpOpen}>Help?</button>
                    </div>
                </div>
                </div>
                </div>
 
         </div>

         </div>



    </div>
  )
}

 

export default Home