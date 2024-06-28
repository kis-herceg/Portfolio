package com.example.backend.repository;

import com.example.backend.model.TechCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TechCardRepository extends JpaRepository<TechCard, Integer> {
}
