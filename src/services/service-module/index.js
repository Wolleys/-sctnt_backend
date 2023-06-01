const createNewEntity = (model, newEntity, dataAccess) => {
    try {
        const createdEntity = dataAccess(model, newEntity);
        return createdEntity;
    } catch (error) {
        throw error;
    }
};

const getAllEntities = (model, dataAccess) => {
    try {
        const allEntities = dataAccess(model);
        return allEntities;
    } catch (error) {
        throw error;
    }
};

module.exports = { createNewEntity, getAllEntities };
