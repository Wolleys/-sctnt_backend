const supplierService = require("../../services/supplier-service");

const createNewSupplier = async (req, res) => {
    const body = req.body;
    const model = req.models;

    try {
        const createdSupplier = await supplierService.createNewSupplier(
            model,
            body
        );
        res.status(201).send({ status: "OK", data: createdSupplier });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", error: error?.message || error });
    }
};

module.exports = { createNewSupplier };
