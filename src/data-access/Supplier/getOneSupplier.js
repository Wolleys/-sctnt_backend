const { getOneEntity } = require("../data-access-module");

const getOneSupplier = (model, supplierId) => {
    return getOneEntity(
        model.Supplier,
        supplierId,
        ["id", "first_name", "last_name", "phone_number", "email"],
        "a supplier"
    );
};

module.exports = { getOneSupplier };
