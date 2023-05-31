const supplierService = require("../../services/supplier-service");

const getOneSupplier = async (req, res) => {
    const model = req.models;
    const supplierId = req.params.supplierId;

    try {
        const supplier = await supplierService.getOneSupplier(model, supplierId);
        res.send({ status: "OK", data: supplier });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", error: error?.message || error });
    }
};

module.exports = { getOneSupplier };
