export function stringIsEmptyOrNull(value?: string) {
    if (value == null || value == undefined || value.trim().length == 0) {
        return true;
    }
    return false;
}

export function generateRandomNumber(length: number): string {
    let randomNumer = "";
    for (let i = 0; i < length; i++) {
        const rand = Math.floor(Math.random() * 10);
        randomNumer += rand;
    }
    return randomNumer;
}
