const BaseRepository = require("./base.repository");
const book = require("../models/book.models");

const GenreRepository = require("./genre.repository");

class BookRepository extends BaseRepository {
  constructor() {
    super(book);
  }

  async getBooksByGenre(id) {
    let books = await this.mongooseCollection.find({
      genre: String(id),
    });
    return books;
  }

  async create(body) {
    let genre = await new GenreRepository().getGenreByName(body.genre);
    body.genre = new String(genre._id);
    body.file = "";
    let data = await this.mongooseCollection.create(body);
    return data;
  }

  async update(body) {
    if (!body.file.startsWith("https")) {
      body.file = "";
    }
    body.genre = new String(body.genre);
    body._id = new String(body._id);
    let data = await this.mongooseCollection.findByIdAndUpdate(body._id, body);
    return data;
  }

  async findAll(query) {
    if (query) {
      const regexQuery = new RegExp(query, "i");
      let data = await this.mongooseCollection
        .find({
          $or: [
            { title: { $regex: regexQuery } },
            { author: { $regex: regexQuery } },
          ],
        })
        .populate("genre")
        .lean()
        .exec();
      return data;
    } else {
      let data = await this.mongooseCollection
        .find()
        .populate("genre")
        .lean()
        .exec();

      return data;
    }
  }
}

module.exports = BookRepository;
