const createNewEntity = async (model, newEntity) => {
    try {
        const createdEntity = await model.Entity.create(newEntity);
        return createdEntity;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { createNewEntity };
