const itemService = require("../../services/item-service");

const updateOneItem = async (req, res) => {
    const updatedItem = itemService.updateOneItem();
    res.send("Update an existing item");
};

module.exports = { updateOneItem };
