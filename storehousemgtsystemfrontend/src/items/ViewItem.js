import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function ViewItem() {
    const [item, setItem]=useState ({
        itemName: "",
        quantity: "",
        unitPrice: "",
        totalPrice:"",
        addedDate: "",
    })

    const {id}=useParams();
    useEffect(() => {
        loadItem();

    }, []);
    const loadItem = async () =>{
        const result= await axios.get(`http://localhost:8080/item/${id}`);
        setItem(result.data);
    }


  return (
    <div className="container">
     <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Item Details</h2>


        <div className="card">
            <div className="card-header">
                Details of item with item code : {item.itemCode}
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                    <b>itemName:</b>
                    {item.itemName}
                    </li>
                    <li className="list-group-item">
                    <b>Quantity:</b>
                    {item.quantity}
                    </li>
                    <li className="list-group-item">
                    <b>UnitPrice:</b>
                    {item.unitPrice}
                    </li>
                    <li className="list-group-item">
                    <b> TotalPrice:</b>
                    {item.totalPrice}
                    </li>
                    <li className="list-group-item">
                    <b>addeDate:</b>
                    {item.addedDate}
                    </li>
                </ul>
            </div>
        </div>
        <Link className="btn btn-primary my-2" to="/home">
            Back to Home
          </Link>
       </div>
      </div>
    </div>
       
  );
}
