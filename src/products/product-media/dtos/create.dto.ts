import { IsNotEmpty } from 'class-validator';

export class CreateDto {
  @IsNotEmpty()
  readonly url: string;
}
