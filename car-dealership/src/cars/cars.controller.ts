import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carService.getAllCars();
  }

  @Get(':id')
  getCarById(@Param('id') id) {
    return this.carService.getCarById(id);
  }
}
