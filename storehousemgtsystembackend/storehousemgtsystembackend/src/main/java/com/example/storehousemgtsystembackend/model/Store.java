package com.example.storehousemgtsystembackend.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "storetbl")
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long itemCode;

    private String itemName;
    private Integer quantity;
    private Integer unitPrice;
    private Integer totalPrice;
    private Date addedDate;

    public Store() {
        this.addedDate = new Date();
    }


    public long getItemCode() {
        return itemCode;
    }

    public void setItemCode(long itemCode) {
        this.itemCode = itemCode;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
        calculateTotalPrice();
    }

    public Integer getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(Integer unitPrice) {
        this.unitPrice = unitPrice;
        calculateTotalPrice();
    }

    public Integer getTotalPrice() {
        return totalPrice;
    }


    public Date getAddedDate() {
        return addedDate;
    }

    public void setAddedDate(Date addedDate) {
        this.addedDate = addedDate;
    }


    private void calculateTotalPrice() {
        if (quantity != null && unitPrice != null) {
            this.totalPrice = quantity * unitPrice;
        }
    }

}
