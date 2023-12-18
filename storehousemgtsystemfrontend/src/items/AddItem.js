import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddItem() {
  let navigate=useNavigate()
  const [item, setItem] = useState({
    itemName: "",
    quantity: "",
    unitPrice: ""
  });

  const { itemName, quantity, unitPrice } = item;

  const onInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  const onSubmit =async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/item", item);
    navigate("/home");

  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Insert Item</h2>
          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Item" className="form-label">
              itemName
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter item name"
              name="itemName" 
              value={itemName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Item" className="form-label">
              Quantity
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Quantity"
              name="quantity" 
              value={quantity}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Item" className="form-label">
              unitPrice
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter UnitPrice"
              name="unitPrice"
              value={unitPrice}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <Link  className="btn btn-outline-danger mx-2" to="/home">
            Cancel
          </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
