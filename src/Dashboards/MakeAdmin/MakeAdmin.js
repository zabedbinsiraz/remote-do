import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const [addedAdmin,setAddedAdmin] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
       
        console.log(data.email)
        const admin = {
            email:data.email
        };

       

        fetch('http://localhost:4001/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            setAddedAdmin(true)
        
    };

   
    return (
    //     <div className="row m-2 p-2">
    //     <div className="col-md-3">
    //         <AdminSidebar></AdminSidebar>
    //     </div>
       
    // </div>

    <div style={{width:'60%',backgroundColor:'salmon',padding:'30px',marginTop:'30px'}} >
    <h3 className="text-dark">Make Admin</h3>
    {
        addedAdmin? <h3>Added Admin Successfully</h3>
        : <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
        <div>
          <label htmlFor="">E-mail</label>
           <br/>
        <input className="input" type="email" className="form-control" placeholder="valid email address" {...register('email')} />
             <br/>
          </div>
         
          
         
      
        </div>
        <br/>
       <div className="text-center">
       <input className="save-btn btn btn-primary" type="submit" />
       </div>
      </form>
    }
    </div>
    );
};

export default MakeAdmin;