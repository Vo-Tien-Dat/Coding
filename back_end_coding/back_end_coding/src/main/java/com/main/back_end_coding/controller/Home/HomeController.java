package com.main.back_end_coding.controller.Home;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping(value = "/home")
    public static String getHome() {
        return "hello world";
    }

}
