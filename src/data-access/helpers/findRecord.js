const findRecord = async (model, record, cond, attributes) => {
    try {
        const recordToFind = await model.findOne({ where: cond, attributes });
        if (!recordToFind) {
            throw {
                status: 400,
                message: `Can't find ${record.toLowerCase()} with the specified condition`,
            };
        }
        return recordToFind;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { findRecord };
