package com.example.storehousemgtsystembackend.ServiceImpl;

import com.example.storehousemgtsystembackend.Service.LoginService;
import com.example.storehousemgtsystembackend.model.Login;
import com.example.storehousemgtsystembackend.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {

    private final LoginRepository loginRepository;

    @Autowired
    public LoginServiceImpl(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    @Override
    public boolean authenticate(String email, String password) {

        Login user = loginRepository.findByEmail(email);
        return user != null && user.getPassword().equals(password);
    }
}
