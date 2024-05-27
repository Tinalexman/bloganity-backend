class BaseController {
  constructor(repoClass) {
    this.repository = new repoClass();
  }

  getAll = (req, res) => {
    this.repository
      .findAll()
      .then((data) => {
        return this.ok(res, data);
      })
      .catch((err) => {
        return this.internalError(err, res);
      });
  };

  getById = (req, res) => {
    let id = req.params.id;
    this.repository
      .findById(id)
      .then((data) => {
        return this.ok(res, data);
      })
      .catch((err) => {
        return this.internalError(err, res);
      });
  };

  create = (req, res) => {
    let body = req.body;
    this.repository
      .create(body)
      .then((data) => {
        return this.created(res, data);
      })
      .catch((err) => {
        return this.internalError(err, res);
      });
  };

  update = (req, res) => {
    let body = req.body;
    this.repository
      .update(body)
      .then((data) => {
        return this.ok(res, data);
      })
      .catch((err) => {
        return this.internalError(err, res);
      });
  };

  deleteById = (req, res) => {
    this.repository
      .deleteById(req.params.id)
      .then((_) => {
        return this.ok(res);
      })
      .catch((err) => {
        return this.internalError(err, res);
      });
  };

  deleteAll = (req, res) => {
    this.repository
      .deleteAll()
      .then((_) => {
        return this.ok(res);
      })
      .catch((err) => {
        return this.internalError(err, res);
      });
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
