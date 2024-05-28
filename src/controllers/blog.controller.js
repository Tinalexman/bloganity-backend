const BlogRepository = require("../repositories/blogs.repository");
const UserRepository = require("../repositories/user.repository");
const BaseController = require("./base.controller");

class BlogController extends BaseController {
  constructor() {
    super(BlogRepository);
  }

  create = async (req, res) => {
    try {
      if (req.user === null) {
        throw new Error("The user does not exist");
      }
      const { title, content } = req.body;
      let newData = {
        title,
        content,
        author: new String(req.user._id),
      };

      let data = await this.repository.create(newData);
      this.ok(res, data);
    } catch (e) {
      this.internalError(e, res);
    }
  };

  getById = async (req, res) => {
    try {
      let id = req.params.id;
      let data = await this.repository.findById(id);
      let user = await new UserRepository().findById(data.author);
      data.author = user.name;
      this.ok(res, data);
    } catch (err) {
      this.internalError(err, res);
    }
  };

  update = async (req, res) => {
    try {
      if (req.user === null) {
        throw new Error("The user does not exist");
      }

      const { _id, title, content } = req.body;
      let newData = {
        _id,
        title,
        content,
        author: new String(req.user._id),
      };

      let data = await this.repository.update(newData);
      this.ok(res, data);
    } catch (e) {
      this.internalError(e.message, res);
    }
  };

  delete = async (req, res) => {
    try {
      if (req.user === null) {
        throw new Error("The user does not exist");
      }
      await this.repository.deleteById(req.params.id);
      this.ok(res);
    } catch (e) {
      this.internalError(e.message, res);
    }
  };
}

module.exports = BlogController;
