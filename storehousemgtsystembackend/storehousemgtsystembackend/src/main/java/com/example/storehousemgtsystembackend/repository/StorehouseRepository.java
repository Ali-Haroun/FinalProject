package com.example.storehousemgtsystembackend.repository;

import com.example.storehousemgtsystembackend.model.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.List;
public interface StorehouseRepository extends JpaRepository<Store, Long> {
    Optional<Store> findByItemName(String itemName);
    List<Store> findByTotalPriceGreaterThan(Integer totalPrice);
}
