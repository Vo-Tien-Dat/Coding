package com.main.back_end_coding.controller.Rating;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RatingController {
    @GetMapping("/rating")
    public String getRating() {
        return "rating";
    }
}
