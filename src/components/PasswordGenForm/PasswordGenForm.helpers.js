const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomLower = () => String.fromCharCode(random(97, 122));
const randomUpper = () => String.fromCharCode(random(65, 90));

const randomSymbol = () => {
    const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>";
    return symbols[random(0, symbols.length - 1)];
};
const passwordGenerator = (
    isIncludeUppercase,
    isIncludeLowercase,
    isIncludeNumbers,
    isIncludeSymbols,
    passwordLength,
    toast
) => {
    const characterTypes = [];
    if (isIncludeLowercase) characterTypes.push(randomLower);
    if (isIncludeUppercase) characterTypes.push(randomUpper);
    if (isIncludeSymbols) characterTypes.push(randomSymbol);
    if (isIncludeNumbers) characterTypes.push(() => random(0, 9).toString());

    if (characterTypes.length === 0) {
        toast.error("At least one character type must be selected");
        return "";
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomChoice = random(0, characterTypes.length - 1);
        password += characterTypes[randomChoice]();
    }
    return password;
};

export default passwordGenerator;
