package com.example.storehousemgtsystembackend.controller;

import com.example.storehousemgtsystembackend.Service.LoginService;
import com.example.storehousemgtsystembackend.model.Login;
import com.example.storehousemgtsystembackend.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/login")
public class LoginController {

    private final LoginService loginService;
    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }


    @PostMapping
    public ResponseEntity<Map<String, String>> login(@RequestBody Login login) {

        boolean isAuthenticated = loginService.authenticate(login.getEmail(), login.getPassword());

        if (isAuthenticated) {
            Map<String, String> response = new HashMap<>();
            response.put("message", "Login Success");
            return ResponseEntity.ok(response);
        } else {
            Map<String, String> response = new HashMap<>();
            response.put("message", "Invalid credentials");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }



}
