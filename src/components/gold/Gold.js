import React from 'react'
import Data from '../diamond/Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../diamond/Diamond.css'
function Gold() {
 
  const landdata=[
    {
      price:"₹45 Lacs",
      title:'3 Acres Agriculture land for Sale in Turkabad, Gangapur, Aurangabad',
      place:"Gangapur Nehari, Maharashtra",
      suitablecrop:"Suitable For Sugarcane",
      phone:7207206694,
      image1:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/WhatsApp_Image_2022-11-13_at_17_53d7ee25-4e9a-4339-bd36-47169c50382f.jpeg",
      image2:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/WhatsApp_Image_2022-11-13_at_17_0f8681d0-5035-4f20-9ec0-d611368f395a.jpeg",
      image3:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/images_(90)_1521eb65-dd2a-410a-9691-c0dd3a6967a5.jpeg"
     },
     {
      price:"₹48 Lacs",
      title:'60 Acre Land available for Sale in Village Dikadla, Paniptat',
      place:"Dikadla, Haryana",
      suitablecrop:"Suitable For Wheat, Rice",
      phone:6207206694,
      image1:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/IMG-20230320-WA0003_180fc829-2d31-4b97-811a-6e7c03a3877f.jpg",
      image2:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/IMG-20230320-WA0004_6b330073-1e55-4f4a-a940-3b1b1bba40bf.jpg",
      image3:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/IMG-20230320-WA0005_9724e734-2860-442f-942d-8698cf2fa2a8.jpg"
     },
     {
      price:"₹51.20 Lacs",
      title:'5.12 Acre Land for Sale in Aurangabad',
      place:"Ghodegaon, Maharashtra",
      suitablecrop:"Suitable For Not Applicable",
    
      image1:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/WhatsApp_Image_2022-06-28_at_4_c09db3a5-105f-4aef-af13-725a28c9fbe1.jpeg",
      image2:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/WhatsApp_Image_2022-06-28_at_4_4727d4a6-58e9-481d-8789-8065fdb45c50.jpeg",
      image3:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/images_(90)_1521eb65-dd2a-410a-9691-c0dd3a6967a5.jpeg"
     },
     {
      price:"₹80 Lacs",
      title:'2 acre land for sale @khandewadi , Gevrai Tanda, Aurangabad',
      place:"Paithan, Maharashtra",
      suitablecrop:"Suitable For Soyabean, Cotton",
 
      image1:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/IMG-20230228-WA0010_ac37d00a-19c5-42db-bf0e-3ae7dd03285b.jpeg",
      image2:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/IMG-20230228-WA0004_2d1066e8-6e82-42f9-8f7c-0fa18c87c272.jpeg",
      image3:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/IMG-20230228-WA0002_00603b25-b52e-455e-98a7-35700e984a65.jpeg"
     },
     {
      price:"₹83.25 Lacs",
      title:'18.5 Bigha Agriculture Land in Bhogpur, Buland Shahar',
      place:"Urf Bhogpur, Uttar Pradesh",
      suitablecrop:"Suitable For Wheat, Rice",
 
      image1:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/WhatsApp_Image_2022-08-25_at_2_9f92bdc7-e28b-40ef-a9fa-2a99d53c6b92.jpeg",
      image2:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/WhatsApp_Image_2022-08-25_at_2_8821f2a2-529a-4824-9b87-688a41ed8902.jpeg",
      image3:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/WhatsApp_Image_2022-08-25_at_2_536a3afc-e336-4519-8835-c20324d43b69.jpeg"
     },
     {
      price:"₹90 Lacs",
      title:'2.4 Bigha R-Zone Land available for Sale in Sarang Pur, Delhi',
      place:"Sarang Pur, Delhi",
      suitablecrop:"Suitable For Wheat, Sugarcane, Rice",
 
      image1:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/sarang_pur_3_0cb52b9b-b36e-4d57-828e-3c56f915466b.jpeg",
      image2:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/WhatsApp_Image_2022-08-25_at_2_536a3afc-e336-4519-8835-c20324d43b69.jpeg",
      image3:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/WhatsApp_Image_2022-08-25_at_2_8821f2a2-529a-4824-9b87-688a41ed8902.jpeg"
     }

    
  ];


  return (
  <div>
    <div className='diamond justify-content-center '> 
    <div className="image mx-auto text-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ZM_SFXuCNWIqJNXSO2ZHdRnpBrqE5EE48A&usqp=CAU" className='mt-3 mb-3  ' alt="" />
    </div>
    <div className="shortmessage text-center mb-3">
      <p className='text-white  px-5 py-4'>Explore the fertile expanse of lands you desire, offering a myriad of farming and business opportunities. Unlock the potential of this expansive terrain, where agriculture thrives and commerce flourishes. Embrace a world where your dreams of land ownership merge seamlessly with your entrepreneurial aspirations. Step into a realm where the possibilities are as vast as the horizons that stretch before you. Welcome to the lands that hold the key to your farming and business ventures.</p>
    </div>
      <div className='cont mt-3'>
        {
          landdata.map(({price,title,place,suitablecrop,phone,image1,image2,image3})=>(
            <Data price={price} title={title} place={place} suitablecrop={suitablecrop} phone={phone} image1={image1} image2={image2} image3={image3}  />
          ))
        }

      </div>
    </div>

    </div>
  )
}

export default Gold