const getAllItems = async (model) => {
    try {
        const allItems = await model.Item.findAll({
            order: [["created_at", "DESC"]],
            attributes: ["id", "name", "price", "color", "location"],
        });
        return allItems;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { getAllItems };
