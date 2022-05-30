package com.main.back_end_coding.controller.Login;

import com.main.back_end_coding.repository.Login.LoginRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.main.back_end_coding.model.Login.LoginModel;
import java.lang.Boolean;

@RestController
public class LoginController {
    @Autowired
    LoginRepository loginrepository;

    @GetMapping("/login/{username}")
    public void postLogin(@PathVariable String username) {
        System.out.println(username);
        System.out.println("post success");
    }

    @GetMapping("/login")
    public Iterable<LoginModel> getLogin() {

        try {
            System.out.println(loginrepository.findAll());
            System.out.println("hello thanh cong roi");
            System.out.println(loginrepository.findAll().getClass());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return loginrepository.findAll();
    }

    @PostMapping("/logout")
    public Boolean postLogout(@RequestParam String username, @RequestParam String password) {
        
        return true;
    }
}
