import {
  AUTH_PACKAGE_NAME,
  CreateUserDto,
  USERS_SERVICE_NAME,
  UpdateUserDto,
  UsersServiceClient,
} from '@app/common';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class UsersService implements OnModuleInit {
  private usersService: UsersServiceClient;

  constructor(@Inject(AUTH_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.usersService =
      this.client.getService<UsersServiceClient>(USERS_SERVICE_NAME);
  }

  create(dto: CreateUserDto) {
    return this.usersService.createUser(dto);
  }

  findAll() {
    return this.usersService.findAllUsers({});
  }

  findOne(id: number) {
    return this.usersService.findOneUser({ id });
  }

  update(id: number, dto: UpdateUserDto) {
    return this.usersService.updateUser({ id, ...dto });
  }

  remove(id: number) {
    return this.usersService.removeUser({ id });
  }
}
