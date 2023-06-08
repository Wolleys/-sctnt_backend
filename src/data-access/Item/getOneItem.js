const { getOneEntity } = require("../data-access-module");

const getOneItem = (model, itemId) => {
    const desc = "an item";
    const cond = { id: itemId };
    const attrs = [
        "id",
        "description",
        "part_number",
        "price",
        "part_status",
        "location",
        "supplier_id",
    ];

    return getOneEntity(model.Item, desc, itemId, cond, attrs);
};

module.exports = { getOneItem };
