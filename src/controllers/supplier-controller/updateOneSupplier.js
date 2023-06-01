const { updateOneEntity } = require("../controller-module");
const supplierService = require("../../services/supplier-service");

const updateOneSupplier = (req, res) => {
    updateOneEntity(req, res, "supplierId", supplierService.updateOneSupplier);
};

module.exports = { updateOneSupplier };
