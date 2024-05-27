const BlogRepository = require("../repositories/blogs.repository");
const BaseController = require("./base.controller");

class BlogController extends BaseController {
  constructor() {
    super(BlogRepository);
  }
  
}

module.exports = BlogController;
