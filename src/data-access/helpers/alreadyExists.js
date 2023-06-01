const alreadyExists = async (model, cond, value, attributes) => {
    try {
        const recordToCheck = await model.findOne({ where: cond, attributes });
        if (recordToCheck) {
            throw {
                status: 400,
                message: `'${value}' has already been added`,
            };
        }
        return recordToCheck;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { alreadyExists };
