const alreadyExists = async (model, column, value, attributes) => {
    const recordToCheck = await model.findOne({
        where: { [column]: value },
        attributes: attributes,
    });

    if (recordToCheck) {
        throw {
            status: 400,
            message: `'${value}' has already been added.`,
        };
    }
    return recordToCheck;
};

module.exports = { alreadyExists };
