import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import { ModalTitle } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
function Dashboard() {

    let [users,setusers]=useState([])
    let [show,setshow]=useState(false)

    let [dataTOEdit,setDataToEdit]=useState({})
    let [err,seterror]=useState('')
    let {register,handleSubmit,formState:{errors},setValue,getValues}=useForm()

    let showModal=()=>setshow(true)
    let closeModal=()=>setshow(false)

    let editdata=(dataObjToBeEdited)=>{
      showModal();
      setDataToEdit(dataObjToBeEdited)
      //fill input details with user data
      setValue("title",dataObjToBeEdited.title);
      //setValue("owners",dataObjToBeEdited.owners);
      setValue("Area",dataObjToBeEdited.Area);
      // setValue("price",dataObjToBeEdited.price);
       // setValue("address",dataObjToBeEdited.address);
       // setValue("pincode",dataObjToBeEdited.pincode);
        //setValue("village",dataObjToBeEdited.village);
        //setValue("district",dataObjToBeEdited.district);
       // setValue("state",dataObjToBeEdited.state);
       // setValue("SuitableCrop",dataObjToBeEdited.SuitableCrop);
       // setValue("soilType",dataObjToBeEdited.soilType);
       // setValue("TubeWells",dataObjToBeEdited.TubeWells);
        //setValue("Roads",dataObjToBeEdited.Roads);
      //  setValue("image",dataObjToBeEdited.image);
     
    }

    //save data

    let saveData=()=>{
      closeModal();
      let modifiedData=getValues()

      //set id
      modifiedData.id=dataTOEdit.id;
      axios.put(`http://localhost:3500/land-api/update-land/${modifiedData.id}`,modifiedData)
      .then(res=>{
        if(res.status===200){
          getData()
        }
      })
      .catch(err=>{
        console.log("err is",err);
        if(err.response){
          seterror(err.message)
        }
        else if(err.request){
          seterror(err.message)
        }
      })
    }

    let getData=()=>{
      axios.get("http://localhost:3500/land-api/getland")
      .then((response)=>{
        if(response.status===200){
          setusers(response.data)
        }
      })
      .catch((err)=>{
        console.log("err is at getdata dashboard",err)
        if(err.response){
          seterror(err.message)
        }
        else if(err.request){
          seterror(err.message)
        }
      })
    }

    //delete land data
    useEffect(()=>{
      getData()
    },[])



  return (
    <div> 

<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
    {
      users.map((dataObj)=> <div className='col mx-auto text-center' key={dataObj.id} >
        <div className="card">
          <div className="card-body">
        
                <p>{dataObj.title}</p>
                <p>{dataObj.Area}</p>
                <button className="btn btn-primary float-start" onClick={()=>editdata(dataObj)}>Edit</button>
          </div>
        </div>

      </div> )


    }
  </div>


        {/*modal */}

      <Modal show={show}
       onHide={closeModal}
       backdrop='static'
       >
        <Modal.Header>
         <Modal.Title>
          edit
         </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {/*form to edit */}

         <form >
            <label htmlFor="title">Title</label>
            <input type="text"
            id='title'
             className='form-control  mt-3 mb-3'
             {...register("title")}
            />
            

            <label htmlFor="Area">Area</label>
            <input type="number"
            id='Area'
             className='form-control mt-3'
             {...register("Area" )}
            />
             

          
             
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-primary' onClick={saveData}>Save</button>
        </Modal.Footer>
      </Modal>
  

    </div>
  )
}

export default Dashboard