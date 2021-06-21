import React, { useEffect, useState } from 'react';


const ManageJobs = () => {

    const [services, setServices] = useState([]);




    const loadProducts = () => {
        fetch('http://localhost:4001/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }
    loadProducts();
    const handleDelete = (id) => {
        fetch(`http://localhost:4001/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    loadProducts();
                }
            })

    }

    return (
        // <div className="row m-2 p-2">
        //     <div className="col-md-3">
        //         <AdminSidebar></AdminSidebar>
        //     </div>

        // </div>
        <div style={{ backgroundColor: 'salmon', padding: '20px', marginTop: '30px' }}>

            <h3 className="text-dark">Manage Services</h3>

            <table className="table table-success table-striped">

                <thead>
                    <tr>
                        <th scope="col">SL.</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service =>
                            <tr>
                                <th scope="row">{1}</th>
                                <td>{service.productName}</td>
                                <td>{service.price}</td>
                                <td><button onClick={() => handleDelete(service._id)} className="btn btn-primary">delete</button></td>
                            </tr>)
                    }

                </tbody>
            </table>


        </div>
    );
};

export default ManageJobs;