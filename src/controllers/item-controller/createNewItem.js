const itemService = require("../../services/item-service");

const createNewItem = async (req, res) => {
    const body = req.body;
    const model = req.models;

    try {
        const createdItem = await itemService.createNewItem(model, body);
        res.status(201).send({ status: "OK", data: createdItem });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", error: error?.message || error });
    }
};

module.exports = { createNewItem };
