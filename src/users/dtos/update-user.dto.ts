import { IsEmail, IsString, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  emai: string;

  @IsString()
  @IsOptional()
  password: string;
}
