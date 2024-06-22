package com.example.backend.repository;

import com.example.backend.model.TechCard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TechCardRepository extends JpaRepository<TechCard, Integer> {
}
