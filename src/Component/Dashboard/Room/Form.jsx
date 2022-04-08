import React, {useEffect, useState} from 'react'
import axios from 'axios'



// console.log(Arrey);

export default function Form() {

    const [name, setName] = useState("");
    const [rate, setRate] = useState("");
    const [phone, setPhone] = useState("");
    const [discription, setdescription] = useState("");
    const [roomtype, setRoomType] = useState("");
    const [bedtype, setBedType] = useState("");
    const [roomImage, setRoomImage] = useState();


    const [noRoom, setNoRoom] = useState("");
    const [features, setFeatures] = useState([]);



    let data = {roomImage, name, discription, bedtype, roomtype, rate, noRoom, features};


    // const newData = data.stringify
    const saveUser = () => {
        console.log(data);

        let formData = new FormData();


        formData.append('roomtype', roomtype);
        formData.append('name', name);
        formData.append('discription', discription);
        formData.append('bedtype', bedtype);
        formData.append('rate', rate);
        formData.append('noRoom', noRoom);
        formData.append('features', features);
        formData.append('roomImage', roomImage);


        if(name === "" || rate === "" || phone === "" || discription === "" || roomtype === "" || bedtype === "" || roomImage === "" || noRoom === "" || features === ""){


        try {
          const response =  axios({
            method: 'post',
            url: 'http://localhost:5000/room',
            data: formData,
            body: formData,
            headers: {
              "Content-Type": "application/json",
            },
          });
        } catch(error) {
          console.log(error)
        }
    }
      
    }
   

  return (

    <div class="user-dashboard-form-container">

    <div class="user-dashboard-form">
        <div>
            <h1 class="user-dashboard-form-title">Add Room</h1>
        </div>

        <div class="user-dashboard-form-wrapper">
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>

        <div class="user-dashboard-type-price">

            <div class="user-dashboard-form-wrapper">
                <label>Room type</label>
                <select value={roomtype} onChange={(e)=>{setRoomType(e.target.value)}}>
                    <option>Single Room</option>
                    <option>Double Room</option>
                    <option>Standard Room</option>
                    <option>Delxue Room</option>
                </select>
            </div>

            <div class="user-dashboard-form-wrapper">
                <label>Bed type</label>
                <select value={bedtype} onChange={(e)=>{setBedType(e.target.value)}}>
                    <option>Single bed</option>
                    <option>Double bed</option>
                </select>
            </div>

        </div>

        <div class="user-dashboard-type-price">
            <div class="user-dashboard-form-wrapper">
                <label>No of Rooms</label>
                <input type="number" value={noRoom} onChange={(e)=>{setNoRoom(e.target.value)}}/>
            </div>

            <div class="user-dashboard-form-wrapper">
                <label>Price</label>
                <input type="number" value={rate} onChange={(e)=>{setRate(e.target.value)}}/>
            </div>
        </div>


        <div class="user-dashboard-features-wrapper">
            Features
            <div class="user-dashboard-features">

                <div class="user-dashboard-features-option">
                    <input type="checkbox" value='A/C' onChange={(e)=>{setFeatures((oldArray) => [...oldArray, e.target.value])}}/> <label>A/C</label>
                </div>

                <div class="user-dashboard-features-option">
                    <input type="checkbox" value='Bathtub' onSubmit={(e)=>{setFeatures((oldArray) => [...oldArray, e.target.value])}}/> <label>Bathtub</label>
                </div>

                <div class="user-dashboard-features-option">
                    <input type="checkbox" value='Bathrobes and slippers' onChange={(e)=>{setFeatures((oldArray) => [...oldArray, e.target.value])}}/> <label>Bathrobes and slippers</label>
                </div>


                <div class="user-dashboard-features-option">
                    <input type="checkbox" value='Gym or fitness center' onChange={(e)=>{setFeatures((oldArray) => [...oldArray, e.target.value])}}/> <label>Gym or fitness center</label>
                </div>

                <div class="user-dashboard-features-option">
                    <input type="checkbox" value='Relaxation Devices' onChange={(e)=>{setFeatures((oldArray) => [...oldArray, e.target.value])}}/> <label>Relaxation Devices</label>
                </div>

                <div class="user-dashboard-features-option">
                    <input type="checkbox" value='TV with cable' onChange={(e)=>{setFeatures((oldArray) => [...oldArray, e.target.value])}}/> <label>TV with cable</label>
                </div>

                <div class="user-dashboard-features-option">
                    <input type="checkbox" value='Kitchen facilities' onChange={(e)=>{setFeatures((oldArray) => [...oldArray, e.target.value])}}/> <label>Kitchen facilities</label>
                </div>


                <div class="user-dashboard-features-option">
                    <input type="checkbox" value='Toiletries' onChange={(e)=>{setFeatures((oldArray) => [...oldArray, e.target.value])}}/> <label>Toiletries</label>
                </div>

                <div class="user-dashboard-features-option">
                    <input type="checkbox" value='Coffee Kit' onChange={(e)=>{setFeatures((oldArray) => [...oldArray, e.target.value])}}/> <label>Coffee Kit</label>
                </div>
            </div>
        </div>

        <div class="user-dashboard-form-wrapper">
            <label class="user-dashboard-discription">discription</label>
            <textarea rows="10" value={discription} onChange={(e)=>{setdescription(e.target.value)}}></textarea>
        </div>

        <div class="user-dashboard-form-image">
            <label>Upload Image</label>
            <input type="file" class="user-dashboard-input-file"  onChange={(e)=>{setRoomImage(e.target.files[0])}}/>
        </div>

        <div class="user-dashboard-btn">
            <button onClick={saveUser}>Submit</button>
        </div>
    </div>
    </div>
  )
}