const { getOneEntity } = require("../controller-module");
const supplierService = require("../../services/supplier-service");

const getOneSupplier = (req, res) => {
    getOneEntity(req, res, "supplierId", supplierService.getOneSupplier);
};

module.exports = { getOneSupplier };
