const DownloadRepository = require("../repositories/download.repository");
const BookRepository = require("../repositories/books.repository");
const GenreRepository = require("../repositories/genre.repository");

class OverviewController {
  async getAll(req, res) {
    try {
      let downloadRepository = new DownloadRepository();
      let bookRepository = new BookRepository();
      let genreRepository = new GenreRepository();

      let downloads = await downloadRepository.findAll();
      let genres = await genreRepository.findAll();
      let books = await bookRepository.findAll();

      res.status(200).send({
        message: "Successful",
        payload: {
          books: books.length,
          genres: genres.length,
          downloads: downloads,
        },
      });
    } catch (err) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  }
}

module.exports = OverviewController;
