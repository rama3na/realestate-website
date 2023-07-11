import React from 'react'
import Data from '../diamond/Data';
import 'bootstrap/dist/css/bootstrap.min.css';
 import '../diamond/Diamond.css'
function Silver() {
 
  const landdata=[
    {
      price:"₹1.05 Cr",
      title:'Land for sale in Aurangabad 3 acres',
      place:"Aurangpur, Maharashtra",
      suitablecrop:"Suitable For Tur",
      image1:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/WhatsApp_Image_2021-11-30_at_10_2dc46de4-cc22-4551-8477-9f58a68e1c32.jpeg",
      image2:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/WhatsApp_Image_2021-11-30_at_10_53decff3-6720-45a5-82f2-6a9e58dd3321.jpeg",
      image3:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/images_(90)_1521eb65-dd2a-410a-9691-c0dd3a6967a5.jpeg"
     },
     {
      price:"₹1.20 Cr",
      title:'Land Available for Factory or Company',
      place:"Sanaswadi, Maharashtra",
      suitablecrop:"Suitable For Tur",
      image1:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/IMG_20211024_111300_effd0005-b177-4077-accd-765efc647aa4.jpg",
      image2:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/WhatsApp_Image_2022-05-27_at_15_bc89bd91-bd14-48c2-bbe8-febd775b468e.jpeg",
      image3:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/WhatsApp_Image_2022-05-27_at_15_fd184c4e-f863-41f0-b925-07bfeb00baa5.jpeg"
     },
     {
      price:"₹6 Cr",
      title:'Land Available at Ranjangaon Aurangabad',
      place:"Ranjangaon, Maharashtra",
      suitablecrop:"Suitable For Tur",
      phone:9207206694,
      image1:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/WhatsApp_Image_2021-11-30_at_10_e36a0ec5-e03f-4eb0-818c-b632ac9ac5bf.jpeg",
      image2:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/sarang_pur_3_0cb52b9b-b36e-4d57-828e-3c56f915466b.jpeg",
      image3:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/images_(90)_1521eb65-dd2a-410a-9691-c0dd3a6967a5.jpeg"
     },
     {
      price:"₹99.64 Cr ",
      title:'47 Acres land available in Gannaur Sonipat',
      place:"Garhi Kalan, Haryana",
      suitablecrop:"Suitable For Wheat, Sugarcane, Rice",
      image1:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/4_796b6047-2b0a-4eeb-a2b7-2f1b2070f8c6.jpeg",
      image2:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/image_picker5109403678803172781_8b916eaa-3b88-40b7-89d4-0169484617e9.jpg",
      image3:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/image_picker289175895988821878_fd28dfd3-507c-46ac-bb2d-c2fae6e8acd3.jpg"
     },
     {
      price:"₹112.50 Cr",
      title:'25 Acre Land for sale - 100% TEBALPLOT',
      place:"Wadgaon Kh., Maharashtra",
      suitablecrop:"Suitable For  Gram",
      phone:7607206694,
      image1:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/IMG_20220907_124204_96bbfcae-1627-49df-bd2b-4cfd16ef901d.jpg",
      image2:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/IMG_20220907_125747_12b58267-fc9c-494f-bd71-e143c3bb4812.jpg",
      image3:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/agriculture_10_19bc3f00-9409-4e88-ab93-ce3b7f8bb8ca.jpg"
     },
     {
      price:"₹350 Cr",
      title:'Sale 2.5 Acre Land malhera in Rewari',
      place:"Meerpur , Haryana",
      suitablecrop:"Suitable For  cotton",
      phone:8707206694,
      image1:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/IMG-20230408-WA0011_1cf208c0-a165-4123-9076-a4bad093d4f1.jpg",
      image2:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/IMG-20230408-WA0012_20307ebd-7122-44e2-b983-1ab02ba9622f.jpg",
      image3:"https://s3.ap-south-1.amazonaws.com/cloudfarmdefaultbucket/IMG-20230408-WA0007_79f64b8c-5320-4688-bb72-b8ea4638f268.jpg"
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

export default Silver