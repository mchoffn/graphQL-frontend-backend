const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

const resolvers = {
  Mutation: {
    async register(_, { username, email, password }, context, info) {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return { success: false, error: "Username already taken" };
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, email, password: hashedPassword });
      await user.save();

      return { success: true };
    },
  },
};

module.exports = resolvers;