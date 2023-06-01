const createNewEntity = (model, newEntity, dataAccess) => {
    try {
        const createdEntity = dataAccess.createNewEntity(model, newEntity);
        return createdEntity;
    } catch (error) {
        throw error;
    }
};

module.exports = { createNewEntity };
