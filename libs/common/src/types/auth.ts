/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "auth";

export interface Empty {
}

export interface PaginationDto {
  page: number;
  skip: number;
}

export interface Users {
  users: User[];
}

export interface FindOneUserDto {
  id: number;
}

export interface UpdateUserDto {
  id: number;
  username: string;
  socialMedia: SocialMedia | undefined;
}

export interface CreateUserDto {
  username: string;
  password: string;
  age: number;
}

export interface User {
  id: number;
  username: string;
  password: string;
  age: number;
  socialMedia: SocialMedia | undefined;
}

export interface SocialMedia {
  twitterUri?: string | undefined;
  fbUri?: string | undefined;
}

export const AUTH_PACKAGE_NAME = "auth";

export interface UsersServiceClient {
  findAllUsers(request: Empty): Observable<Users>;

  createUser(request: CreateUserDto): Observable<User>;

  findOneUser(request: FindOneUserDto): Observable<User>;

  updateUser(request: UpdateUserDto): Observable<User>;

  removeUser(request: FindOneUserDto): Observable<Empty>;
}

export interface UsersServiceController {
  findAllUsers(request: Empty): Promise<Users> | Observable<Users> | Users;

  createUser(request: CreateUserDto): Promise<User> | Observable<User> | User;

  findOneUser(request: FindOneUserDto): Promise<User> | Observable<User> | User;

  updateUser(request: UpdateUserDto): Promise<User> | Observable<User> | User;

  removeUser(request: FindOneUserDto): Promise<Empty> | Observable<Empty> | Empty;
}

export function UsersServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["findAllUsers", "createUser", "findOneUser", "updateUser", "removeUser"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UsersService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UsersService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USERS_SERVICE_NAME = "UsersService";
