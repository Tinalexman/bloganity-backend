const BaseRepository = require("./base.repository");
const blog = require("../models/blog.models");


class BlogRepository extends BaseRepository {
  constructor() {
    super(blog);
  }
}

module.exports = BlogRepository;
