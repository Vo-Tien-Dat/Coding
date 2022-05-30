package com.main.back_end_coding.service.Login;

import com.main.back_end_coding.repository.Login.LoginRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServices {
    @Autowired
    LoginRepository loginrepository;

    public Boolean AddUser(String username, String password) {
        try {
            loginrepository.AddUser(username, password);
        } catch (Exception ex) {
            System.out.println("Loi them user");
            return false;
        }
        return true;
    }
}
