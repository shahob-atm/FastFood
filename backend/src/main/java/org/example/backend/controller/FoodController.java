package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.backend.dto.food.FoodDto;
import org.example.backend.service.food.FoodService;
import org.springframework.http.HttpEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/food")
@RequiredArgsConstructor
public class FoodController {

    private final FoodService foodService;

    @GetMapping
    public HttpEntity<?> handleGetFoods(@RequestParam(required = false) Long categoryId) {
        return foodService.handleGetFoods(categoryId);
    }

    @PostMapping
    public HttpEntity<?> handleAddFood(@RequestBody @Validated FoodDto foodDto) {
        return foodService.handleAddFood(foodDto);
    }

    @PutMapping("/{id}")
    public HttpEntity<?> handleUpdateFood(@PathVariable Long id, @RequestBody @Validated FoodDto foodDto) {
        return foodService.handleUpdateFood(id, foodDto);
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> handleDeleteFood(@PathVariable Long id) {
        return foodService.handleDeleteFood(id);
    }
}
