const getAllSuppliers = async (model) => {
    try {
        const allSuppliers = await model.Supplier.findAll({
            order: [["created_at", "DESC"]],
            attributes: ["id", "first_name", "last_name", "phone_number", "email"],
        });
        return allSuppliers;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { getAllSuppliers };
