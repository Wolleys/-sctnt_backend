const supplierService = require("../../services/supplier-service");

const getAllSuppliers = async (req, res) => {
    const model = req.models;

    try {
        const allSuppliers = await supplierService.getAllSuppliers(model);
        res.send({ status: "OK", allSuppliers });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getAllSuppliers };
