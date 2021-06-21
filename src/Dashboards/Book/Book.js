import React, { useContext, useState } from 'react';


import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { UserContext } from './../../App';
import { useForm } from 'react-hook-form';


const Book = (props) => {


    const { register, handleSubmit, watch, errors } = useForm();
    // const [imageURL, setImageURL] = useState(null);
    const [addedService, setAddedService] = useState(false);
    const [employerData,setEmployerData] = useState({});
    // const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {

        const serviceData = {
            name: data.title,
            email:data.email,
            location: data.location,
            company: data.company,
           
            
        }
        setEmployerData(serviceData)
      

        setAddedService(true);


    };


    const singlePackage = props.selectPackage;

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [placeOrder, setPlaceOrder] = useState(false);

    const handlePaymentSuccess = (id, type) => {
        const packageDetails = { ...props.singlePackage, ...employerData};
        const newEmployer = {
            packageName: packageDetails.packageName,
           
            
            buyerName: packageDetails.name,
            buyerEmail: packageDetails.email,
            location: packageDetails.location,
            company: packageDetails.company,
            paymentId: id,
            paymentMethod: type,
            date: new Date(),
        }

        fetch('http://localhost:4001/addEmployer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEmployer)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        setPlaceOrder(true);
        console.log(id)
    }

    return (
       
           <div>
              

              

{
                    addedService ?  <div style={{ width: '50%', backgroundColor: 'tomato', padding: '100px', margin:'20px 350px' }}>

                    <h3 className="text-dark">Sign Up As An Employer</h3>
                   
     
     {
         placeOrder? <h2>Signed Up Successfully</h2>
         : <div> 
            
     
     <small>You have to pay ${singlePackage.price}</small>
     <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
     </div>
     }
     </div>
                        : <form onSubmit={handleSubmit(onSubmit)}>
                            <div  >
                                <div>
                                    <label htmlFor="">Your full name</label>
                                    <br />
                                    <input className="input form-control" type="text" placeholder="full name" {...register('title')} />
                                    <br />
                                    <label htmlFor="">Email</label>
                                    <br />
                                    <input className="input form-control" type="text" placeholder="full name" {...register('email')} />
                                    <br />
                                    <label htmlFor="">Location</label>
                                    <br />
                                    <input className="input form-control" type="text" placeholder="Job location" {...register('location')} />
                                    <br />
                                    <label htmlFor="">Company</label>
                                    <br />
                                    <input className="input form-control" type="text" placeholder="Company name" {...register('company')} />
                                    <br />
                                    <label htmlFor="">Company</label>
                                    <br />
                                    
                                    
                                   
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
       
    );
};

export default Book;






// const handleOrderNow = () => {


// }