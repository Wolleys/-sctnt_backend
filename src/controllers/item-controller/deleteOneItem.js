const itemService = require("../../services/item-service");

const deleteOneItem = async (req, res) => {
    itemService.deleteOneItem();
    res.send("Delete an existing item");
};

module.exports = { deleteOneItem };
