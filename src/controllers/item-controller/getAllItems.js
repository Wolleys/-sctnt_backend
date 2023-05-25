const itemService = require("../../services/item-service");

const getAllItems = async (req, res) => {
    const model = req.models;

    try {
        const allItems = await itemService.getAllItems(model);
        res.send({ status: "OK", allItems });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", error: error?.message || error });
    }
};

module.exports = { getAllItems };
