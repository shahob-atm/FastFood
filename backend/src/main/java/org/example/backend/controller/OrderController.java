package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.backend.dto.order.OrderDto;
import org.example.backend.service.order.OrderService;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @GetMapping
    public HttpEntity<?> handleGetOrder(){
        return orderService.handleGetOrder();
    }

    @PostMapping
    public HttpEntity<?> handlePostOrder(@RequestBody OrderDto orderDto){
        return orderService.handlePostOrder(orderDto);
    }
}
