const itemService = require("../../services/item-service");

const getOneItem = async (req, res) => {
    const item = itemService.getOneItem();
    res.send("Get an existing item");
};

module.exports = { getOneItem };
