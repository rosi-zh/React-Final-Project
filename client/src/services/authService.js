const baseUrl = 'http://localhost:3030/users';

const endpoints = {
    login: '/login',
}

export const login = async (email, password) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            email,
            password
        })
    }
     
    try {
        const response = await fetch(baseUrl + endpoints.login, options);

        if (response.ok == false) {
            const err = await response.json();
            throw new Error(err.message);
        }
        
        const result = await response.json();
        return result;
    } catch (error) {
        alert(error.message);
        throw error;
    }
}