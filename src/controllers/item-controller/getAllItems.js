const itemService = require("../../services/item-service");

const getAllItems = async (req, res) => {
    const allItems = itemService.getAllItems();
    res.send({ status: "OK", allItems });
};

module.exports = { getAllItems };
