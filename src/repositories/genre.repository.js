const BaseRepository = require("./base.repository");
const genre = require('../models/genre.models');


class GenreRepository extends BaseRepository {
    constructor() {
        super(genre)
    }

    async getGenreByName(name) {
        let genre = (await this.mongooseCollection.find({name: name}))[0]; // Get the first genre in the list
        return genre;
    }
}

module.exports = GenreRepository;