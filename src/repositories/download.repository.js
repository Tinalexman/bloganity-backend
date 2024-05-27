const BaseRepository = require("./base.repository");
const download = require("../models/download.models");

class DownloadRepository extends BaseRepository {
  constructor() {
    super(download);
  }
}

module.exports = DownloadRepository;
