const supplierService = require("../../services/supplier-service");
const { getAllEntities } = require("../controller-module");

const getAllSuppliers = (req, res) => {
    getAllEntities(req, res, supplierService.getAllSuppliers);
};

module.exports = { getAllSuppliers };
