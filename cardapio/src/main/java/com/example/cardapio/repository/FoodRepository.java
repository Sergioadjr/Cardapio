package com.example.cardapio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.cardapio.models.Food;

public interface FoodRepository extends JpaRepository<Food, Long> {
    
}
