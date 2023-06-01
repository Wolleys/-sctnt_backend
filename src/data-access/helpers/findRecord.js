const findRecord = async (model, record, recordId) => {
    const recordToFind = await model.findOne({
        where: { id: recordId },
        attributes: ["id"],
    });

    if (!recordToFind) {
        throw {
            status: 400,
            message: `Can't find ${record} with the id '${recordId}'`,
        };
    }
};

module.exports = { findRecord };
