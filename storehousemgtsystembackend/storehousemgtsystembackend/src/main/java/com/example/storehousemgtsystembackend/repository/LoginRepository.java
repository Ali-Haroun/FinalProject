package com.example.storehousemgtsystembackend.repository;

import com.example.storehousemgtsystembackend.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<Login, Login> {
    Login findByEmail(String email);


}
