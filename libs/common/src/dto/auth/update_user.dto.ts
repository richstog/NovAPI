import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNumber, IsString, Max, Min } from "class-validator"

export class UpdateUserDto {

    @ApiProperty()
    @IsNumber()
    id: number

    @ApiProperty()
    @IsString()
    surname: string

    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    middlename: string

    @ApiProperty()
    @Min(6)
    @Max(20)
    @IsString()
    login: string

    @ApiProperty()
    @IsEmail()
    email?: string

    @ApiProperty()
    @IsString()
    password: string
}