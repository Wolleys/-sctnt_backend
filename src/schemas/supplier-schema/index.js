const yup = require("yup");
const { phoneRegExp } = require("../regex/phoneRegExp");

const supplierSchema = yup.object({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
    phone_number: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Phone number is required"),
});

module.exports = { supplierSchema };
