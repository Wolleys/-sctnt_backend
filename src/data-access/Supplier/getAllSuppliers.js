const { getAllEntities } = require("../data-access-module");

const getAllSuppliers = (model) => {
    return getAllEntities(
        model.Supplier,
        ["id", "first_name", "last_name", "phone_number", "email"],
        [["created_at", "DESC"]]
    );
};

module.exports = { getAllSuppliers };
