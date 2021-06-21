import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from './../../App';
import Header from './../../containers/Header/Header';


const ApplicantInfo = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [addedReview,setAddedReview] = useState(false);
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
     const [rating,setRating] = useState({})
    
    const onSubmit = data => {
       
        const infoData = {
            photo:loggedInUser.photo,
            name:data.name,
            email:loggedInUser.email,
            rank:data.rank,
            ratings:rating.rate,
            desc:data.desc
        }
        console.log(infoData)

        const url =`http://localhost:4001/addApplicant`;
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(infoData)
        })
        .then(res=>{
            console.log(res)
        })

        setAddedReview(true);
       
        
    };

    // const ratingChanged = (newRating) => {
    //     setRating({rate:newRating});
    //     console.log(newRating)
    // };

    return (
      
        <div >
            <Header></Header>
            <h3 className="text-dark"> Apply For this Post</h3>
       {
           addedReview? <h3>Your applied successfully</h3>
           :  <form  onSubmit={handleSubmit(onSubmit)}>
           <div >
           <div>
             <label htmlFor="">Your Name</label>
              <br/>
           <input type="text" className="form-control" placeholder="Your Full Name" {...register('name')} />
                 <br/>
             <label htmlFor="">Company's Designation</label>
              <br/>
           <input  type="text" className="form-control" placeholder="email" {...register('rank')} />
                 <br/>
           <label htmlFor="">Description</label>
             <br/>
           <input  type="text" className="form-control" placeholder="cover letter" {...register('desc')} />
             </div>
            
          
            <br/>
           
            
          </div>
           
           <br/>
          <div >
          <input type="submit" />
          </div>
         </form> 
       }
        </div>
   
    );
};

export default ApplicantInfo;