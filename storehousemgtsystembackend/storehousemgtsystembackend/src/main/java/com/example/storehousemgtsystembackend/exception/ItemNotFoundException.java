package com.example.storehousemgtsystembackend.exception;

import org.springframework.web.bind.annotation.ControllerAdvice;


public class ItemNotFoundException extends RuntimeException {
    public ItemNotFoundException(Long id){
        super("Could not found the item with item code " +id);
    }
    public ItemNotFoundException(String itemName){
           super("Could not found the item with item name "  +itemName);
    }

}
