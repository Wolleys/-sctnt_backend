const itemService = require("../../services/item-service");

const getOneItem = async (req, res) => {
    const model = req.models;
    const itemId = req.params.itemId;

    try {
        const item = await itemService.getOneItem(model, itemId);
        res.send({ status: "OK", data: item });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", error: error?.message || error });
    }
};

module.exports = { getOneItem };
