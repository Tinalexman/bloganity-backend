const BookRepository = require("../repositories/books.repository");
const BaseController = require("./base.controller");
const GenreController = require("./genre.controller");

class BookController extends BaseController {
  constructor() {
    super(BookRepository);
  }

  getAll = (req, res) => {
    this.repository
      .findAll(req.query.search)
      .then((data) => {
        return this.ok(res, data);
      })
      .catch((err) => {
        return this.internalError(err, res);
      });
  };

  getBooksByGenre = async (req, res) => {
    try {
      let genre = req.params.genre;
      let _controller = new GenreController();
      genre = await _controller.getGenreByName(genre);
      let books = await this.repository.getBooksByGenre(genre._id);
      this.ok(res, books);
    } catch (err) {
      return this.internalError(err, res);
    }
  };
}

module.exports = BookController;
