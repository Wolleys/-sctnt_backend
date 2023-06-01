const createNewEntity = async (model, newEntity) => {
    try {
        const createdEntity = await model.create(newEntity);
        return createdEntity;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const getAllEntities = async (model, attributes = [], order = []) => {
    try {
        const allEntities = await model.findAll({
            order: order,
            attributes: attributes,
        });
        return allEntities;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const getOneEntity = async (model, entityId, attributes, entityName) => {
    try {
        const entity = await model.findOne({
            where: { id: entityId },
            attributes,
        });
        if (!entity) {
            throw {
                status: 404,
                message: `Can't find ${entityName.toLowerCase()} with the id '${entityId}'`,
            };
        }
        return entity;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { createNewEntity, getAllEntities, getOneEntity };
