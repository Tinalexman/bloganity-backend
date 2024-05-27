const BaseRepository = require("./base.repository");
const user = require('../models/user.models');


class UserRepository extends BaseRepository {
    constructor() {
        super(user)
    }

    async getUser(email) {
        let user = (await this.mongooseCollection.find({email: email}).lean().exec())[0];
        return user;
    }
}

module.exports = UserRepository;