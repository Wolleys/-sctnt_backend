const { supplierModel } = require("./supplier-model/supplier");
const { itemAssociation } = require("./item-model/association");

function setupModels(sequelize) {
  try {
    const Supplier = supplierModel(sequelize);
    const Item = itemAssociation(sequelize);

    return { Supplier, ...Item };
  } catch (err) {
    throw err;
  }
}

module.exports = { setupModels };
