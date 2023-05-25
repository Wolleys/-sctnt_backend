const itemService = require("../../services/item-service");

const deleteOneItem = async (req, res) => {
    const model = req.models;
    const itemId = req.params.itemId;

    try {
        await itemService.deleteOneItem(model, itemId);
        res.send({ status: "OK", message: "Record deleted successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", error: error?.message || error });
    }
};

module.exports = { deleteOneItem };
