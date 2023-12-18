import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
export default function Home() {

    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
     
        loadItems();
    }, []);

    const loadItems=async()=>{
        const result=await axios.get("http://localhost:8080/items");
        setItems(result.data);
    };
    const deleteItem= async (id) =>{
      await axios.delete(`http://localhost:8080/item/${id}`);
      loadItems();

    };

  return (
    
    <div className='container'>  
    <div className='py-4'>
    <table className="table border shadow">
    
  <thead>
    <tr>
      <th scope="col">itemCode</th>
      <th scope="col">itemName</th>
      <th scope="col">Quantity</th>
      <th scope="col">UnitPrice</th>
      <th scope="col">TotalPrice</th>
      <th scope="col">addedDate</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
    items.map((item,index)=>(
        <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{item.itemName}</td>
        <td>{item.quantity}</td>
        <td>{item.unitPrice}</td>
        <td>{item.totalPrice}</td>
        <td>{item.addedDate}</td>
        <td>
        <Link
                    className="btn btn-primary mx-2"
                    to={`/viewitem/${item.itemCode}`}
                  >
                    View
                    </Link>
            <Link className="btn btn-outline-primary mx-2"
            to={`/edititem/${item.itemCode}`}>
              Edit</Link>
              <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteItem(item.itemCode)}
                  >
                    Delete
                  </button>
        </td>
        
      </tr>
    
    ))
  }
  </tbody>
 
</table>
        </div>
    </div>
  );
}
