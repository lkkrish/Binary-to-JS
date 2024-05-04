const data = ["01110011", "01110100", "01100001", "01111001", "00100000", "01100001", "01110111", "01100001", "01111001", "00100000", "01100110", "01110010", "01101111", "01101101", "00100000", "01110100", "00100000", "01100111", "01101001", "01110010", "01101100"];
horiontal = ""
data.forEach(each => {
    const charCode = parseInt(each, 2); // Convert binary string to decimal
    const character = String.fromCharCode(charCode); // Convert decimal to character
    horiontal += character
});
    console.log(horiontal);