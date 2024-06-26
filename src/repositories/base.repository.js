class BaseRepository {
  constructor(_mongooseCollection) {
    this.mongooseCollection = _mongooseCollection;
  }

  async findAll() {
    let data = await this.mongooseCollection.find();
    return data;
  }

  async findById(id) {
    let data = await this.mongooseCollection.findById(id);
    return data;
  }

  async create(body) {
    let data = await this.mongooseCollection.create(body);
    return data;
  }

  async update(body) {
    let data = await this.mongooseCollection.findByIdAndUpdate(body._id, body);
    return data;
  }

  async deleteById(id) {
    await this.mongooseCollection.findByIdAndDelete(id);
    return;
  }
}

module.exports = BaseRepository;
