const { getOneEntity } = require("../controller-module");
const supplierService = require("../../services/supplier-service");

const getOneSupplier = async (req, res) => {
    await getOneEntity(req, res, "supplierId", supplierService.getOneSupplier);
};

module.exports = { getOneSupplier };
