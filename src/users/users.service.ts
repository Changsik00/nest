import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find()
  }

  async findOne(id: string): Promise<User> {
    return await this.usersRepository.findOne(id)
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id)
  }

  async create(user: User) {
    return await this.usersRepository.save(user)
  }

  async update(id: number, updatedUser: User): Promise<User | null> {
    const user = await this.usersRepository.findOneOrFail(id)
    if (!user.id) {
      console.error("User doesn't exist")
    }
    await this.usersRepository.update(id, updatedUser)
    return await this.usersRepository.findOne(id)
  }
}
