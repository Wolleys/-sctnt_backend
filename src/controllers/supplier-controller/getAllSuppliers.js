const { getAllEntities } = require("../controller-module");
const supplierService = require("../../services/supplier-service");

const getAllSuppliers = (req, res) => {
    getAllEntities(req, res, supplierService.getAllSuppliers);
};

module.exports = { getAllSuppliers };
