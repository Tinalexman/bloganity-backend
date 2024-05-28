class BaseController {
  constructor(repoClass) {
    this.repository = new repoClass();
  }

  getAll = async (req, res) => {
    try {
      let data = await this.repository.findAll();
      this.ok(res, data);
    } catch (err) {
      this.internalError(err, res);
    }
  };

  getById = async (req, res) => {
    try {
      let id = req.params.id;
      let data = await this.repository.findById(id);
      this.ok(res, data);
    } catch (err) {
      this.internalError(err, res);
    }
  };

  create = async (req, res) => {
    try {
      let body = req.body;
      let data = await this.repository.create(body);
      this.created(res, data);
    } catch (err) {
      this.internalError(err, res);
    }
  };

  update = async (req, res) => {
    try {
      let body = req.body;
      let data = await this.repository.update(body);
      this.ok(res, data);
    } catch (err) {
      this.internalError(err, res);
    }
  };

  deleteById = async (req, res) => {
    try {
      await this.repository.deleteById(req.params.id);
      this.ok(res);
    } catch (err) {
      this.internalError(err, res);
    }
  };


  ok = (response, data) => {
    if (data) {
      response.status(200).send({ message: "Successful", payload: data });
    } else {
      response.status(200).send({ message: "Successful" });
    }
  };

  created = (response, data) => {
    if (data) {
      response.status(201).send({ message: "Created", payload: data });
    } else {
      response.status(201).send({ message: "Created" });
    }
  };

  internalError = (error, response) => {
    response
      .status(500)
      .send({ message: "Internal Server Error", error: error });
  };

  notFound = (error, response) => {
    response.status(404).send({ message: "Not Found" });
  };

  validationError = (error, response) => {
    response.status(400).send(error);
  };

  forbiddenError = (error, response) => {
    response.status(403).send(error);
  };

  validationError = (error, response) => {
    response.status(400).send(error);
  };
}

module.exports = BaseController;
