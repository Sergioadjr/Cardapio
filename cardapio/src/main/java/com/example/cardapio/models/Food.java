package com.example.cardapio.models;

import com.example.cardapio.dto.FoodRequestDTO;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "foods")
@Entity(name = "foods")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode (of ="id")
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String imagem;
    private Integer preco;

    public Food (FoodRequestDTO data) {
        this.titulo = data.titulo();
        this.imagem = data.imagem();
        this.preco = data.preco();
    }
}
