import { useState } from "react";
import { emailValidator, passwordValidator, repeatPasswordValidator, nameValidator } from "../utils/validators";

const touchErrors = (errors) => {
    return Object.entries(errors).reduce((acc, [field, fieldError]) => {
        acc[field] = {
            ...fieldError,
            dirty: true
        };
        return acc;
    }, {});
};

export const useRegisterFormValidator = (form) => {
    const [errors, setErrors] = useState({
        email: {
            dirty: false,
            error: false,
            message: '',
        },
        password: {
            dirty: false,
            error: false,
            message: '',
        },
        rePassword: {
            dirty: false,
            error: false,
            message: '',
        },
        firstName: {
            dirty: false,
            error: false,
            message: '',
        },
        lastName: {
            dirty: false,
            error: false,
            message: '',
        }
    });

    const validateForm = ({ form, field, errors, forceTouchErrors = false}) => {
        let isValid = true;
    
        let nextErrors = JSON.parse(JSON.stringify(errors));
    
        if (forceTouchErrors) {
            nextErrors = touchErrors(errors);
        }
    
        const { firstName, lastName, email, password, rePassword } = form;

        if (nextErrors.firstName.dirty && (field ? field === "firstName" : true)) {
            const firstNameMessage = nameValidator('First name', firstName);
            nextErrors.firstName.error = !!firstNameMessage;
            nextErrors.firstName.message = firstNameMessage;
    
            if (!!firstNameMessage) {
                isValid = false;
            }
        }

        if (nextErrors.lastName.dirty && (field ? field === "lastName" : true)) {
            const lastNameMessage = nameValidator('Last name', lastName);
            nextErrors.lastName.error = !!lastNameMessage;
            nextErrors.lastName.message = lastNameMessage;
    
            if (!!lastNameMessage) {
                isValid = false;
            }
        }
    
        if (nextErrors.email.dirty && (field ? field === "email" : true)) {
            const emailMessage = emailValidator(email);
            nextErrors.email.error = !!emailMessage;
            nextErrors.email.message = emailMessage;
    
            if (!!emailMessage) {
                isValid = false;
            }
        }
    
        if (nextErrors.password.dirty && (field ? field === "password" : true)) {
            const passwordMessage = passwordValidator(password);
            nextErrors.password.error = !!passwordMessage;
            nextErrors.password.message = passwordMessage;
    
            if (!!passwordMessage) {
                isValid = false;
            }
        }

        if (nextErrors.rePassword.dirty && (field ? field === "rePassword" : true)) {
            const rePasswordMessage = repeatPasswordValidator(rePassword, form);
            nextErrors.rePassword.error = !!rePasswordMessage;
            nextErrors.rePassword.message = rePasswordMessage;
    
            if (!!rePasswordMessage) {
                isValid = false;
            }
        }
    
        setErrors(nextErrors);
    
        return {
            isValid,
            errors: nextErrors,
        };
    };

    const onBlurField = (e) => {
        const field = e.target.name;
        const fieldError = errors[field];
        if (fieldError.dirty) {
            return;
        }

        const updateErrors = {
            ...errors, 
            [field]: {
                ...errors[field],
                dirty: true,
            },
        };

        validateForm({ form, field, errors: updateErrors});
    };

    return {
        validateForm,
        onBlurField,
        errors
    };
};

