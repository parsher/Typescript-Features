class Vehicle {
  // color: string;

  // constructor(color) {
  //   this.color = color;
  // }

  constructor(public color: string) {

  }


  // public drive(): void {
  //   console.log("chugga chugga");
  // }

  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(color: string, public wheels: number) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  starDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car('blue', 4);
car.starDrivingProcess();
