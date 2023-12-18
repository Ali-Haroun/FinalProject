package com.example.storehousemgtsystembackend.controller;

import com.example.storehousemgtsystembackend.exception.ItemNotFoundException;
import com.example.storehousemgtsystembackend.model.Store;
import com.example.storehousemgtsystembackend.repository.StorehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class StorehouseController {
    @Autowired
    private StorehouseRepository storehouseRepository;

    @PostMapping("/item")
    Store newStore(@RequestBody Store newStore) {
        return storehouseRepository.save(newStore);
    }

    @GetMapping("/items")
    List<Store> getAllStores() {
        return storehouseRepository.findAll();
    }

    @GetMapping("/item/{id}")
    Store getStoreById(@PathVariable Long id) {
        return storehouseRepository.findById(id).orElseThrow(() -> new ItemNotFoundException(id));

    }

    @PutMapping("/item/{id}")
    Store updateStore(@RequestBody Store newStore, @PathVariable Long id) {
        return storehouseRepository.findById(id).map(item -> {
            item.setItemName(newStore.getItemName());
            item.setQuantity(newStore.getQuantity());
            item.setUnitPrice(newStore.getUnitPrice());

            return storehouseRepository.save(item);
        }).orElseThrow(() -> new ItemNotFoundException(id));
    }

    @DeleteMapping("/item/{id}")
    String DeleteItem(@PathVariable Long id) {
        if (!storehouseRepository.existsById(id)) {
            throw new ItemNotFoundException(id);

        }
        storehouseRepository.deleteById(id);
        return "Item with item code " + id + " has been deleted successfully";
    }
    @GetMapping("/item/name/{itemName}")
    public Store getStoreByName(@PathVariable String itemName) {
        return storehouseRepository.findByItemName(itemName)
                .orElseThrow(() -> new ItemNotFoundException(itemName));
    }
   @GetMapping("/items/highTotalPrice")
   public List<Store> getItemsWithHighTotalPrice() {
       return storehouseRepository.findByTotalPriceGreaterThan(30000);
   }

}
