import jwt from 'jsonwebtoken';
import { ObjectId } from "mongodb";

import mongoConnect from "../util/database.js";

class User {
  constructor(name, email, password, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this._id = id ? new ObjectId(id) : null;
  }

  async save() {
    const db = await mongoConnect();
    return db.collection('users').insertOne(this);
  }

  static authenticate(email, userId) {
    const token = jwt.sign(
      {
        email,
        userId,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d'
      }
    )

    return {
      token,
      userId
    }
  }

  static async findById(id) {
    const db = await mongoConnect();
    return db.collection('users').findOne({ _id: new ObjectId(id) })
  }

  static async findByEmail(email) {
    const db = await mongoConnect();
    return db.collection('users').findOne({ email });
  }
}

export default User;