const BaseController = require("./base.controller");
const DownloadRepository = require("../repositories/download.repository");

class DownloadController extends BaseController {
  constructor() {
    super(DownloadRepository);
  }
}

module.exports = DownloadController;
