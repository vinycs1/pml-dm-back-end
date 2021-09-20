import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnwsersService } from './anwsers.service';


@Controller('anwsers')
export class AnwsersController {
  constructor(private readonly anwsersService: AnwsersService) {}

  @Post()
  create(@Body() createAnwserDto) {
    return this.anwsersService.create(createAnwserDto);
  }

  @Get()
  findAll() {
    return this.anwsersService.findAll();
  }

  @Get("/members")
  findAllMembers(){
    return this.anwsersService.findAllMembers()
  }

  @Delete()
  deleteAnwsers(){
    return this.deleteAnwsers()
  }

}
