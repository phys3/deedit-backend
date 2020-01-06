import * as typeorm from 'typeorm'

// TODO - check this should not be needed
import { ConnectionOptions, Connection } from 'typeorm'

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
let connection = null as Connection | null;

export default async () => {
  try {
    if (connection === null) {
      connection = await typeorm.createConnection({
        ...connectionConfig,
        entities: [ User, UserRole, Post, Tag, Like, Achievement, Comment, UserToAchievement ]
      } as ConnectionOptions);
      console.log("Database connection initialized");
    }

    return connection;
  } catch (err) {
    throw err;
  }
};