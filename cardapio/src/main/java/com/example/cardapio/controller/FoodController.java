package com.example.cardapio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.cardapio.models.Food;
import com.example.cardapio.repository.FoodRepository;

@RestController
@RequestMapping("food")
public class FoodController {
    
    @Autowired
    private FoodRepository foodRepository;
    
    @GetMapping
    public List<Food> getAll() {
        
        List<Food> foodList = foodRepository.findAll();
        return foodList;
    }

    @PostMapping
    public Food criar(@RequestBody Food food){
        Food foodSalvo = foodRepository.save(food);
        return foodSalvo;
    }


}
