package com.example.backend.controller;

import com.example.backend.model.TechCard;
import com.example.backend.service.TechCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/tech")
public class TechCardController {
    @Autowired
    private TechCardService techCardService;

    @GetMapping
    public List<TechCard> getTests() {
        return techCardService.getTechCards();
    }
}
