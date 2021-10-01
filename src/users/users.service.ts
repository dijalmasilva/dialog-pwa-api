import { Injectable } from '@nestjs/common';

import users from '../db.json';

@Injectable()
export class UsersService {
  findAll() {
    return users;
  }

  findOne(id: string) {
    return users.find((user) => user._id === id);
  }

  findByName(name: string) {
    const split = name.split(' ');
    const usersResult = [];

    users.forEach((user) => {
      let hasAll = true;
      for (const word of split) {
        if (!user.name.toUpperCase().includes(word.toUpperCase())) {
          hasAll = false;
          break;
        }
      }

      if (hasAll) {
        usersResult.push(user);
      }
    });

    return usersResult;
  }
}
