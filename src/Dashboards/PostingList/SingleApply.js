import React from 'react';


const SingleApply = (props) => {
  const order =props.order;
    return (
        <div style={{ height: '350px',width: "18rem" }} className="card text-center col-md-3 col-sm-6 m-3 p-3">
         <small style={{color:'green'}}>{order.status}</small>
          <img style={{ height: '100px' }} src={order.productPhoto} className="card-img-top mt-3" alt="" />
          <div className="card-body">
              <h3>{order.productName}</h3>
            <p className="card-text">{order.desc}</p>
          </div>
        </div>
    );
};

export default SingleApply;