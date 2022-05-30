package com.main.back_end_coding.controller.Contest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContestController {
    @GetMapping("/contest")
    public String getContest() {
        return "Contest";
    }
}
