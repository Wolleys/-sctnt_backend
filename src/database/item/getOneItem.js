const getOneItem = async (model, itemId) => {
    try {
        const item = await model.Item.findOne({
            where: { id: itemId },
            attributes: [
                "id",
                "description",
                "part_number",
                "price",
                "part_status",
                "location",
                "supplier_id",
            ],
        });
        if (!item) {
            throw {
                status: 404,
                message: `Can't find an item with the id '${itemId}'`,
            };
        }
        return item;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { getOneItem };
