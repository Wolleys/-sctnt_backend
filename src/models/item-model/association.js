const { itemModel } = require("./item");
const { supplierModel } = require("../supplier-model/supplier");

function itemAssociation(sequelize) {
    try {
        const Item = itemModel(sequelize);
        const Supplier = supplierModel(sequelize);

        // 1. Supplier has many Items 1:n
        Supplier.hasMany(Item, {
            onDelete: "CASCADE",
            foreignKey: "supplier_id",
        });
        Item.belongsTo(Supplier, {
            foreignKey: "supplier_id",
        });

        return { Item };
    } catch (error) {
        throw error;
    }
}

module.exports = { itemAssociation };
