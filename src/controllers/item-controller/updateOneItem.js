const itemService = require("../../services/item-service");

const updateOneItem = async (req, res) => {
    const body = req.body;
    const model = req.models;
    const itemId = req.params.itemId;

    try {
        await itemService.updateOneItem(model, itemId, body);
        res.send({ status: "OK", message: "Record updated successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", error: error?.message || error });
    }
};

module.exports = { updateOneItem };
