const Item = require("../../database/Item");

const getAllItems = (organizationId) => {
    const allItems = Item.getAllItems(organizationId);
    return allItems;
};

module.exports = { getAllItems };
