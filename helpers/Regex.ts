export function emailRegex(email?: string): boolean {
    const emailRegex = /\S+@\S+\.\S+/;
    if (email != undefined && emailRegex.test(email)) {
        return true;
    }
    return false;
}

export function passwordRegex(password?: string): boolean {
    const passwordRegex = /^(?=.*\d).{8,}$/;
    if (password != undefined && passwordRegex.test(password)) {
        return true;
    }
    return false;
}

export function priceRegex(price?: string): boolean {
    const priceRegex = /^\$[0-9]+(\.[0-9][0-9])?$/;
    if (price != undefined && priceRegex.test(price)) {
        return true;
    }
    return false;
}