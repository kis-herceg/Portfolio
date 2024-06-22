package com.example.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "test")
public class TechCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "testText")
    private String text;
}
