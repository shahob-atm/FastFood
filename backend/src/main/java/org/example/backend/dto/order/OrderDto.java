package org.example.backend.dto.order;

import org.example.backend.dto.orderFoodDto.OrderFoodDto;

import java.util.List;

public record OrderDto(
        Long userId,
        List<OrderFoodDto> orderFoodDto
) {
}
