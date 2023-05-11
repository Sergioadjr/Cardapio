package com.example.cardapio.dto;

import com.example.cardapio.models.Food;

public record FoodResponseDTO (Long id, String titulo, String imagem, Integer preco) {
   public FoodResponseDTO(Food food){
    this(food.getId(), food.getTitulo(), food.getImagem(), food.getPreco());
   }
}
