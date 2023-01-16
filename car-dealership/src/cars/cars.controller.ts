import { Controller, Get, Param, UsePipes } from '@nestjs/common';
import { Body, Delete, Patch, Post } from '@nestjs/common/decorators';
import {
  ParseIntPipe,
  ParseUUIDPipe,
  ValidationPipe,
} from '@nestjs/common/pipes';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-card.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
/* @UsePipes(ValidationPipe) */
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  /**
   *
   * @param id Con una pipe (con parametros) que restringue que el id sea tpo uuid
   * @returns
   */
  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  update(
    @Body() updateCarDto: UpdateCarDto,
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  delete(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.delete(id);
  }
}
