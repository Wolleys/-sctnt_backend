const yup = require("yup");

const itemSchema = yup.object({
    name: yup.string().required("Name is required"),
    price: yup.string().required("Price is required"),
    color: yup.string().required("Color is required"),
    location: yup.string().required("Location is required"),
});

module.exports = { itemSchema };
