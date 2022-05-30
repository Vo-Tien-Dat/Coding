package com.main.back_end_coding.controller.Problem;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProblemController {
    @GetMapping(value = "/problem")
    String getProblem() {
        return "Problem";
    }
}
