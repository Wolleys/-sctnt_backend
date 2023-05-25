const createNewItem = async (model, newItem) => {
    try {
        const createdItem = await model.Item.create(newItem);
        return createdItem;
    } catch (error) {
        throw { status: error?.status || 500, error: error?.message || error };
    }
};

module.exports = { createNewItem };
