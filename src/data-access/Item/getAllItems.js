const { Op } = require("sequelize");
const { getPagination } = require("../helpers/getPagination");
const { getPagingData } = require("../helpers/getPagingData");

const getAllItems = async (model, page, size, q) => {
    var condition = q
        ? {
            [Op.or]: {
                description: { [Op.like]: `%${q}%` },
                part_number: { [Op.like]: `%${q}%` },
                price: { [Op.like]: `%${q}%` },
                location: { [Op.like]: `%${q}%` },
                part_status: { [Op.like]: `%${q}%` },
            },
        }
        : null;

    const { limit, offset } = getPagination(page, size);

    try {
        const allItems = await model.Item.findAndCountAll({
            limit,
            offset,
            where: { ...condition },
            order: [["created_at", "DESC"]],
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
        return getPagingData(allItems, page, limit);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { getAllItems };
