const akanNameCalculator = (CC, YY, MM, DD, gender) => {
    // BODMAS
    const calculationResult = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
    let wholeNumber = Number(calculationResult.toFixed())

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    if (wholeNumber >= 7) {
        // TODO - Check this later
        // Extra work would be to randomize wholeNumber
        // Using Math library
        wholeNumber = wholeNumber - 1;
    }

    if (gender == 'Male') {
        return { 'name': maleNames[wholeNumber], 'day': daysOfTheWeek[wholeNumber] };
    } else {
        return { 'name': femaleNames[wholeNumber], 'day': daysOfTheWeek[wholeNumber] };
    }
}