const yup = require("yup");

const itemSchema = yup.object({
    description: yup.string().required("Description is required"),
    part_number: yup.string().required("Part No. is required"),
    price: yup.string().required("Price is required"),
    part_status: yup.string().required("Status is required"),
    location: yup.string().required("Location is required"),
    supplier_id: yup.string().required("Supplier is required"),
});

module.exports = { itemSchema };
