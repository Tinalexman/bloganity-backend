const UserRepository = require("../repositories/user.repository");
const BaseController = require("./base.controller");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const jwt_secret = process.env.JWT_SECRET;

class UserController extends BaseController {
  constructor() {
    super(UserRepository);
  }

  signIn = async (req, res) => {
    const { email, password } = req.body;
    let user = await this.repository.getUser(email);
    if (!user) {
      this.validationError({ error: "There is no user with this email" }, res);
    } else {
      bcrypt.compare(password, user.password).then(async (doMatch) => {
        if (doMatch) {
          const token = jwt.sign({ _id: user._id }, jwt_secret);
          const { email, fullName } = user;
          this.ok(res, {
            token,
            user: { email: email, fullName: fullName },
          });
        } else {
          this.forbiddenError({ error: "Wrong Password" }, res);
        }
      });
    }
  };

  signUp = async (req, res) => {
    const userDetails = req.body;
    const { email, password } = req.body;
    let user = await this.repository.getUser(email);
    if (user) {
      this.forbiddenError(
        { error: "This email is attached to an account" },
        res
      );
    } else {
      let hashed = await bcrypt.hash(password, 4);
      userDetails.password = hashed;
      let user = await this.repository.create(userDetails);
      const { email } = user;
      const token = jwt.sign({ _id: user._id }, jwt_secret);
      this.ok(res, { token, user: { email: email } });
    }
  };
}

module.exports = UserController;
