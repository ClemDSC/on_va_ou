const {
  getAll,
  getUnique,
  createOne,
  updateOne,
  removeOne,
} = require("../models/destinationsDataAccess");

exports.getAll = async (req, res) => {
  try {
    const destinations = await getAll();
    if (destinations.length === 0) {
      return res.status(404).send("Aucune destination trouvée");
    }
    return res.status(200).json(destinations);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

exports.getOne = async (req, res) => {
  const destinationId = parseInt(req.params.id, 10);
  try {
    const data = await getUnique(destinationId);
    if (!destinationId) {
      return res.status(404).send("Aucune destination trouvée");
    }
    return res.status(200).json(data);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

exports.createOne = async (req, res) => {
  if (!req.body) {
    res.sendStatus(400);
  } else {
    const data = await createOne(req.body);
    res.status(201).json(data);
  }
};

exports.updateOne = async (req, res) => {
  const destinationId = parseInt(req.params.id, 10);
  try {
    const data = await updateOne(destinationId, req.body);
    if (!data) {
      return res.sendStatus(404).send("Aucune destination trouvée");
    }
    return res.status(200).json(data);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

exports.deleteOne = async (req, res) => {
  const destinationId = parseInt(req.params.id, 10);
  try {
    const data = await removeOne(destinationId);
    if (!data) {
      return res.sendStatus(404).send("Aucune destination trouvée");
    }
    return res.status(200).send("Destination supprimée");
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};
