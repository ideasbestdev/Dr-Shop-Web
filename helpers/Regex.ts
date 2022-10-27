export function emailRegex(email: string): boolean {
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(email)) {
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