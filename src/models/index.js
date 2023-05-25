const { itemModel } = require("./item-model/item");

function setupModels(sequelize) {
    try {
        const Item = itemModel(sequelize);

        return { Item };
    } catch (err) {
        throw err;
    }
}

module.exports = { setupModels };
