const supplierService = require("../../services/supplier-service");
const { createEntity } = require("../controller-module");

const createNewSupplier = async (req, res) => {
    await createEntity(req, res, supplierService.createNewSupplier);
};

module.exports = { createNewSupplier };
