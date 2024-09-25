function convertToNumber(value) {
    if (isNaN(value) && value < 0) {
        console.log("not good")
    }
    return parseFloat(value)
}


function calculateTotalDonation(donation, total) {
    return total + donation
}

function calculateCurrentBalance(balance, donationValue) {
    return balance - donationValue
}
