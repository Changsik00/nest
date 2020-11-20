import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from './user.entity'

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  getAll() {
    return this.service.findAll()
  }

  @Get(':id')
  get(@Param() params) {
    return this.service.findOne(params.id)
  }

  @Post()
  create(@Body() user: User) {
    return this.service.create(user)
  }

  @Put(':id')
  update(@Param() params, @Body() user: User) {
    console.log("#@# user", user)
    return this.service.update(params.id, user)
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.service.delete(params.id)
  }
}
