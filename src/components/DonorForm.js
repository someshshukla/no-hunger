import React, { useEffect, useState } from 'react'
import "./style.css";


const DonorForm = () => {
  const data={name:"", phone:"", aadhar:"", password:""};
  const [inputData, setInputData] = useState(data)
  const [flag, setFlag] = useState(false)
  useEffect(()=>{
    console.log("Registered")
  },[flag])
  function handleData(e){
    setInputData({...inputData, [e.target.name]:e.target.value})
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(!inputData.name || !inputData.phone || inputData.aadhar){
      alert("All fields are mandatory")
    }
    else{
      setFlag(true)
    }
  }
  return (
    <>
    <div className="header">
            <h1>Donor Form</h1>
        </div>
    <form className="container" onSubmit={handleSubmit}>
        
        <div>
        <input type="text" placeholder='Your Full Name' name='name' value={inputData.name} onChange={handleData}/>
        </div>
        <div>
        <input type="text" placeholder='Your Phone Number' phone='phone'value={inputData.phone} onChange={handleData}/>
        </div>
        <div>
        <input type="number" placeholder='Your Aadhar Number' aadhar='aadhar' value={inputData.aadhar} onChange={handleData}/>
        </div>
        <div>
        <input type="text" placeholder='Your password' password='password' value={inputData.password} onChange={handleData}/>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
    </form>


    <div className='map'>
    map.innerHTML = '<iframe width="700" height="300" src="https://maps.google.com/maps?q='+latitude+','+longitude+'&amp;z=15&amp;output=embed"></iframe>';
var reqcount = 0;

navigator.geolocation.watchPosition(successCallback, errorCallback, options);
    </div>
    </>


  )
}

export default DonorForm