package com.example.backend.service.impl;

import com.example.backend.model.TechCard;
import com.example.backend.repository.TechCardRepository;
import com.example.backend.service.TechCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TechCardServiceImpl implements TechCardService {

    @Autowired
    private TechCardRepository techCardRepository;

    @Override
    public List<TechCard> getTechCards() {
        return techCardRepository.findAll();
    }
}
