import * as yup from 'yup';

export const generateSchema = params => {
    const keys = Object?.keys(params);
    const schema = {};
    keys?.map(key => {
        if (key.indexOf('email') !== -1) {
            schema[key] = yup
                ?.string()
                ?.email('Email must be a valid email')
                ?.matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter valid email')
                ?.required('Email address is required');
        }
        else if (key.indexOf('password') !== -1) {
            schema[key] = yup
                ?.string()
                ?.min(6, 'Password should be at least 6 characters long.')
                ?.required('Password is required');
        } else if (key.indexOf('confirmPassword') !== -1) {
            schema[key] = yup
                ?.string()
                ?.min(6, 'Confirm password should be at least 6 characters long.')
                ?.required('Confirm password is required');
        }
        else if (key.indexOf('firstName') !== -1) {
            schema[key] = yup
                ?.string()
                ?.max(30)
                ?.matches(/^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)?$/, 'Please enter valid first name')
                ?.required('First name is required');
        } else if (key.indexOf('lastName') !== -1) {
            schema[key] = yup
                ?.string()
                ?.max(30)
                ?.matches(/^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)?$/, 'Please enter valid last name')
                ?.required('Last name is required');
        }
        else {
            schema[key] = yup?.string().required(`${key} is required`);
        }
    });
    return yup.object()?.shape(schema);
};