const {
    errorHandler,
    conflictError,
} = require("../data-access-module/errorHandler");

const alreadyExists = async (model, cond, value, attributes) => {
    try {
        const recordToCheck = await model.findOne({ where: cond, attributes });
        if (recordToCheck) {
            conflictError(value);
        }
        return recordToCheck;
    } catch (error) {
        errorHandler(error);
    }
};

module.exports = { alreadyExists };
