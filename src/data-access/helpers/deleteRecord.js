const deleteRecord = async (model, record, recordId) => {
    const recordToDelete = await model.destroy({
        where: { id: recordId },
        attributes: ["id"],
    });

    if (!recordToDelete) {
        throw {
            status: 400,
            message: `Can't find ${record} with the id '${recordId}'`,
        };
    }
};

module.exports = { deleteRecord };
