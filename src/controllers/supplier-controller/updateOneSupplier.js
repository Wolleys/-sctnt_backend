const supplierService = require("../../services/supplier-service");

const updateOneSupplier = async (req, res) => {
    const body = req.body;
    const model = req.models;
    const supplierId = req.params.supplierId;
    try {
        await supplierService.updateOneSupplier(model, supplierId, body);
        res.send({ status: "OK", message: "Record updated successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", error: error?.message || error });
    }
};

module.exports = { updateOneSupplier };
