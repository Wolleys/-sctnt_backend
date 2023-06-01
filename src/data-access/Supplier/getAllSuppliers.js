const { getAllEntities } = require("../data-access-module");

const getAllSuppliers = (model) => {
    const order = [["created_at", "DESC"]];
    const attrs = ["id", "first_name", "last_name", "phone_number", "email"];

    return getAllEntities(model.Supplier, attrs, order);
};

module.exports = { getAllSuppliers };
