const itemService = require("../../services/item-service");

const createNewItem = async (req, res) => {
    const createdItem = itemService.createNewItem();
    res.send("Create a new item");
};

module.exports = { createNewItem };
