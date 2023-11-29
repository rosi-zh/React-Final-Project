import { useState } from "react";
import { emailValidator, passwordValidator } from "../utils/validators";

const touchErrors = (errors) => {
    return Object.entries(errors).reduce((acc, [field, fieldError]) => {
        acc[field] = {
            ...fieldError,
            dirty: true
        };
        return acc;
    }, {});
};

export const useLoginFormValidator = (form) => {
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
        }
    });

    const validateForm = ({ form, field, errors, forceTouchErrors = false}) => {
        let isValid = true;
    
        let nextErrors = JSON.parse(JSON.stringify(errors));
    
        if (forceTouchErrors) {
            nextErrors = touchErrors(errors);
        }
    
        const { email, password } = form;
    
        if (nextErrors.email.dirty && (field ? field === "email" : true)) {
            const emailMessage = emailValidator(email, form);
            nextErrors.email.error = !!emailMessage;
            nextErrors.email.message = emailMessage;
    
            if (!!emailMessage) {
                isValid = false;
            }
        }
    
        if (nextErrors.email.dirty && (field ? field === "password" : true)) {
            const passwordMessage = passwordValidator(password, form);
            nextErrors.password.error = !!passwordMessage;
            nextErrors.password.message = passwordMessage;
    
            if (!!passwordMessage) {
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

