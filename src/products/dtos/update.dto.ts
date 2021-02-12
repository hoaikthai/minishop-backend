import { IsNotEmpty } from "class-validator";

export class UpdateDto {
  @IsNotEmpty()
  readonly id: number;

  readonly name: string;

  readonly description: string;
}