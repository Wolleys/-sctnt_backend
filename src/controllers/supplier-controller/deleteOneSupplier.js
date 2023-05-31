const supplierService = require("../../services/supplier-service");

const deleteOneSupplier = async (req, res) => {
    const model = req.models;
    const supplierId = req.params.supplierId;

    try {
        await supplierService.deleteOneSupplier(model, supplierId);
        res.send({ status: "OK", message: "Record deleted successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", error: error?.message || error });
    }
};

module.exports = { deleteOneSupplier };
