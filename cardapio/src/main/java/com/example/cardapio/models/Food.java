package com.example.cardapio.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Table(name = "foods")
@Entity(name = "foods")
@Getter
@Setter
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String imagem;
    private Integer preco;
}
