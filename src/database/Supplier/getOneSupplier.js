const getOneSupplier = async (model, supplierId) => {
    try {
        const supplier = await model.Supplier.findOne({
            where: { id: supplierId },
            attributes: ["id", "first_name", "last_name", "phone_number", "email"],
        });
        if (!supplier) {
            throw {
                status: 404,
                message: `Can't find a supplier with the id '${supplierId}'`,
            };
        }
        return supplier;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { getOneSupplier };
