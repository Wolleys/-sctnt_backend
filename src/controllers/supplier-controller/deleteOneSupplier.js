const { deleteOneEntity } = require("../controller-module");
const supplierService = require("../../services/supplier-service");

const deleteOneSupplier = (req, res) => {
    deleteOneEntity(req, res, "supplierId", supplierService.deleteOneSupplier);
};

module.exports = { deleteOneSupplier };
