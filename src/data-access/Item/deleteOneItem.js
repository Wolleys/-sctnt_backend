const { deleteOneEntity } = require("../data-access-module");

const deleteOneItem = (model, itemId) => {
    const desc = "an item";
    const cond = { id: itemId };
    const attrs = ["id"];

    return deleteOneEntity(model.Item, desc, itemId, cond, attrs);
};

module.exports = { deleteOneItem };
