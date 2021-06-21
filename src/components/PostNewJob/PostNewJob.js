import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Header from '../../containers/Header/Header';



// import { UserContext } from '../../../../App';


const PostNewJob = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    // const [imageURL, setImageURL] = useState(null);
    const [addedService, setAddedService] = useState(false);
    // const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {

        const serviceData = {
            title: data.title,
            location: data.location,
            company: data.company,
            created_at: new Date(),
            url: data.link,
            job_level:data.level
        }
        console.log(serviceData)
        const url = `http://localhost:4001/addJob`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                console.log(res)
            })

        setAddedService(true);


    };



    // const handleImageUpload = event =>{
    //     console.log(event.target.files[0])
    //     const imageData = new FormData();
    //     imageData.set('key', 'b437b2988a9a7d177ebe83d13b4dc437')
    //     imageData.append('image', event.target.files[0])

    //     axios.post('https://api.imgbb.com/1/upload', imageData)
    //     .then(response =>{
    //         console.log(response.data.data.display_url)
    //         setImageURL(response.data.data.display_url)
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })

    // }


    return (

        <div >
            <Header></Header>

            <div className="text-center m-5 p-5">
                <h3 className="text-dark">Post A New Job</h3>
                {
                    addedService ? <h3 className="text-dark"> Your Job posted Successfully</h3>
                        : <form onSubmit={handleSubmit(onSubmit)}>
                            <div  >
                                <div>
                                    <label htmlFor="">Job Title</label>
                                    <br />
                                    <input className="input form-control" type="text" placeholder="Post new job" {...register('title')} />
                                    <br />
                                    <label htmlFor="">Location</label>
                                    <br />
                                    <input className="input form-control" type="text" placeholder="Job location" {...register('location')} />
                                    <br />
                                    <label htmlFor="">Company</label>
                                    <br />
                                    <input className="input form-control" type="text" placeholder="Company name" {...register('company')} />
                                    <br />
                                    <label htmlFor="">Apply Link</label>
                                    <br />
                                    <input className="input form-control" type="text" placeholder="Company name" {...register('link')} />
                                    <br />
                                    <label htmlFor="">Job Level</label>
                                    <select className="form-control" {...register("level")}>
                                        <option value="Intern">InternShip</option>
                                        <option value="Entry">Entry</option>
                                        <option value="Mid">Mid-Senior</option>
                                        <option value="Senior">Senior</option>
                                    </select>
                                </div>



                                {/* <div>
                <br/>
               <label htmlFor="">Add Photo</label>
               <br/>
               <input className="input"  className="form-control" type="file" onChange={handleImageUpload} />
                
              </div> */}
                            </div>
                            <br />
                            <div className="text-center">
                                <input className="save-btn btn btn-primary" type="submit" />
                            </div>
                        </form>
                }
            </div>


        </div>

    );
};



export default PostNewJob;