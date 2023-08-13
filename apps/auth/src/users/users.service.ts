import { CreateUserDto, UpdateUserDto, Users } from '@app/common';
import { UserEntity } from '@app/common/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    await this.userRepository.save(user);
    return user;
  }

  async findAll() {
    const users = await this.userRepository.find();
    console.log(users);
    return { users };
  }

  async findOne(id: number) {
    return await this.userRepository.findOneBy({
      id,
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({
      id,
    });
    const updatedUser = Object.assign(user, updateUserDto);
    return await this.userRepository.save(updatedUser);
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
  }
}
