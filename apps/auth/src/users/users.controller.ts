import { Controller } from '@nestjs/common';

import { UsersService } from './users.service';

import {
  CreateUserDto,
  Empty,
  FindOneUserDto,
  UpdateUserDto,
  User,
  Users,
  UsersServiceController,
  UsersServiceControllerMethods,
} from '@app/common';
import { Observable } from 'rxjs';

@Controller()
@UsersServiceControllerMethods()
export class UsersController implements UsersServiceController {
  constructor(private readonly usersService: UsersService) {}

  createUser(request: CreateUserDto) {
    return this.usersService.createUser(request);
  }

  findAllUsers(): Users | Promise<Users> | Observable<Users> {
    return this.usersService.findAll();
  }

  findOneUser(
    request: FindOneUserDto,
  ): User | Promise<User> | Observable<User> {
    return this.usersService.findOne(request.id);
  }

  removeUser(
    request: FindOneUserDto,
  ): Empty | Promise<Empty> | Observable<Empty> {
    return this.usersService.remove(request.id);
  }

  updateUser(request: UpdateUserDto): User | Promise<User> | Observable<User> {
    return this.usersService.update(request.id, request);
  }
}
