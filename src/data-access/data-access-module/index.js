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

const getOneEntity = async (model, entityId, attributes, desc) => {
    try {
        const entity = await model.findOne({
            where: { id: entityId },
            attributes,
        });
        if (!entity) {
            throw {
                status: 404,
                message: `Can't find ${desc.toLowerCase()} with the id '${entityId}'`,
            };
        }
        return entity;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const updateOneEntity = async (model, entityId, updateData) => {
    try {
        await model.update({ ...updateData }, { where: { id: entityId } });
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const deleteOneEntity = async (model, desc, entityId, cond, attrs) => {
    try {
        const entity = await model.destroy({
            where: cond,
            attributes: attrs,
        });
        if (!entity) {
            throw {
                status: 400,
                message: `Can't find ${desc.toLowerCase()} with the id '${entityId}'`,
            };
        }
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    createNewEntity,
    getAllEntities,
    getOneEntity,
    updateOneEntity,
    deleteOneEntity,
};
