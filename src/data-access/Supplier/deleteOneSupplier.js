const { deleteOneEntity } = require("../data-access-module");

const deleteOneSupplier = (model, supplierId) => {
    const desc = "a supplier";
    const cond = { id: supplierId };
    const attrs = ["id"];

    return deleteOneEntity(model.Supplier, desc, supplierId, cond, attrs);
};

module.exports = { deleteOneSupplier };
