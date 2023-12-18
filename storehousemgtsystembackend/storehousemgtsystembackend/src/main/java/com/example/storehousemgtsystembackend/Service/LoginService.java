package com.example.storehousemgtsystembackend.Service;

public interface LoginService {

    boolean authenticate(String email, String password);
}