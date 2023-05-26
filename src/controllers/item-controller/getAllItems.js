const itemService = require("../../services/item-service");

const getAllItems = async (req, res) => {
    const model = req.models;
    const { page, size, q } = req.query;

    try {
        const allItems = await itemService.getAllItems(model, page, size, q);
        res.send({ status: "OK", data: allItems });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", error: error?.message || error });
    }
};

module.exports = { getAllItems };
