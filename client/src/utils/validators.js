export function emailValidator(email) {
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    
    if (!email) {
        return 'Email is required';
    } else if (regex.test(email)) {
        return 'Invalid email address';
    }

    return '';
}

export function passwordValidator(password) {
    if (!password) {
        return 'Password is required';
    } else if (password.length < 8) {
        return 'Password must be atleast 8 characters long';
    }

    return '';
}

export function repeatPasswordValidator(rePassword) {
    if (!rePassword) {
        return 'Repeat password is required';
    } else if (rePassword.length < 8) {
        return 'Repeat password must be atleast 8 characters long';
    }

    return '';
}

export function nameValidator(fieldName, value) {
    if (!value) {
        return `${fieldName} is required`;
    } else if (value.length < 2) {
        return `${fieldName} must be atleast 2 characters long`;
    }

    return '';
}