import React from 'react';
import { useForm } from "react-hook-form";
import Select from 'react-select';

const UpdateStatus = (props) => {
    const singleOrder = props.singleOrder;
    const { register, handleSubmit, watch, errors } = useForm();

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]



    const onSubmit = data => {
        const updateData = {...singleOrder}
        singleOrder.status = data.status;
       
      
        console.log(updateData)

        fetch(`http://localhost:4444/updateOrder/${updateData._id}`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(updateData)
        })
        .then(res=>res.json())
        .then(result =>{
          if(result){
              console.log('updated successfully') 
          }
        })

       
        
    };
    return (
        <div>
            <h3>Update Order Status</h3>
                    <form  onSubmit={handleSubmit(onSubmit)}>
           <div className="form-control">
           <div>
             <label htmlFor="">Customer Name</label>
              <br/>
           <input className="input" type="text" className="form-control" value={singleOrder.buyerName} {...register('name')} />
                 <br/>
             <label htmlFor="">Product Name</label>
              <br/>
           <input className="input" type="text" className="form-control" value={singleOrder.productName} {...register('product')} />
                 <br/>
           <label htmlFor="">Order Status</label>
             <br/>
           <input className="input" type="text" className="form-control"  {...register('status')}/>
           <Select options={options}    />
  
            <br/>
           
            
          </div>
           </div>
           <br/>
          <div className="text-center">
          <input className="save-btn btn btn-primary" type="submit" />
          </div>
         </form>  
        </div>
    );
};

export default UpdateStatus;