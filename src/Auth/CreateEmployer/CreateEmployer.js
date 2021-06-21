import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Book from '../../Dashboards/Book/Book';

const CreateEmployer = () => {
    const [pkg,setPkg] = useState({});
    const [isPackage,setIsPackage] = useState(false);

    const handlePackage = (title,price) => {
            const packageDetail = {
                packageName:title,
                price:price
               
            };
            setPkg(packageDetail);
            setIsPackage(true);
            
    }
    const packages = [
        {
            title:'Premium',
            price: '$250',
            duration:'30 hours/month',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem accusamus natus ab.'
        },
        {
            title:'Standard',
            price: '$180',
            duration:'20 hours/month',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem accusamus natus ab.'
        },
        {
            title:'Basic',
            price: '$100',
            duration:'10 hours/month',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem accusamus natus ab.'
        }
    ]
    return (
        <div>
           {
               isPackage? <Book selectPackage={pkg}></Book>
               : <div className="p-3 m-3 col-md-4 d-flex ">
                   {
               packages.map(pkg =>  <Card
                style={{ minWidth: "50%" }}
                bg="light"
                className="m-3 p-3 text-primary"
              >
                <Card.Body>
                  <Card.Title>{pkg.title} 
                  <small>{pkg.price}</small>
                  <br/>
                  <small>{pkg.duration}</small>
                  </Card.Title>
                  <Card.Text>
                    <p>{pkg.desc}</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small
                    style={{ alignItems: "center" }}
                    className="d-flex justify-content-between text-muted"
                  >
                    <span className="align-middle">
                    
                        <Button onClick={() => handlePackage(pkg.title,pkg.price)} variant="light" size="sm">
                          Select
                        </Button>
                      
                    </span>
                  </small>
                </Card.Footer>
              </Card>)
           }
               </div>
           }
        </div>
    );
};

export default CreateEmployer;