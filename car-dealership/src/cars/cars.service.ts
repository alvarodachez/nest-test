import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = ['Toyota', 'Jeep', 'Hyundai'];
  getAllCars() {
    return this.cars;
  }
  getCarById(id) {
    return this.cars[id];
  }
}
