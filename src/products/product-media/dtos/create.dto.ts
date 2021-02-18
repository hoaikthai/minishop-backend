import { IsNotEmpty } from 'class-validator';

export class CreateDto {
  @IsNotEmpty()
  readonly url: string;

  @IsNotEmpty()
  readonly uuid: string;
}
