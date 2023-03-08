import { IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";

export class Student {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsInt()
  @Max(99)
  @Min(7)
  age: number;
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
  getInfo() {
    console.log(this.constructor);
  }
}
