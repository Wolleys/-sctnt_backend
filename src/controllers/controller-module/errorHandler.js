const errorHandler = (res, error) => {
    res.status(error?.status || 500).send({
        status: "FAILED",
        error: error?.message || error,
    });
};

module.exports = errorHandler;
