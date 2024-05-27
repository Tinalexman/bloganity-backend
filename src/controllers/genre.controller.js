const GenreRepository = require("../repositories/genre.repository");
const BaseController = require("./base.controller");

class GenreController extends BaseController {
  constructor() {
    super(GenreRepository);
  }

  async getGenreByName(name) {
    let genre = await this.repository.getGenreByName(name);
    return genre;
  }
}

module.exports = GenreController;
