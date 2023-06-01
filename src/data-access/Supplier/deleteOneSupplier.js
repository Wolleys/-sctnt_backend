const { deleteOneEntity } = require("../data-access-module");

const deleteOneSupplier = (model, supplierId) => {
    const entity = "a supplier";
    const cond = { id: supplierId };
    const attrs = ["id"];

    return deleteOneEntity(model.Supplier, entity, supplierId, cond, attrs);
};

module.exports = { deleteOneSupplier };
