import * as typeorm from 'typeorm'

// TODO - check this should not be needed
import { ConnectionOptions } from 'typeorm'

import * as connectionConfig from '../ormconfig'

import { User } from './entity/User'
import { UserRole } from './entity/UserRole'
import { Post } from './entity/Post'
import { Tag } from './entity/Tag'
import { Like } from './entity/Like'
import { Achievement } from './entity/Achievement'
import { UserToAchievement } from './entity/UserToAchievement'
import { Comment } from './entity/Comment'

// All database calls from this application are sharing the same connection
export default async () => {
  try {
    return typeorm.createConnection({
      ...connectionConfig,
      entities: [ User, UserRole, Post, Tag, Like, Achievement, Comment, UserToAchievement ]
    } as ConnectionOptions);
  } catch (err) {
    throw err;
  }
};