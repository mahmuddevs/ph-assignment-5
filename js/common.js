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


function getDonationTotal(id) {
    let donatetionTotal = convertToNumber(document.getElementById(id).innerText)
    return donatetionTotal
}
function getDonationValue(id) {
    let donateValue = convertToNumber(document.getElementById(id).value)
    return donateValue
}

function handleDonation(btnID, donateTotalID, donateInputId) {
    document.getElementById(btnID).addEventListener('click', function (e) {
        e.preventDefault()

        const balance = convertToNumber(document.getElementById('balance').innerText)
        let donationValue = getDonationValue(donateInputId)
        let donateTotal = getDonationTotal(donateTotalID)
        if (balance < donationValue) {
            alert('Donation amount greater than current balance.')
            return
        }
        if (isNaN(donationValue) || isNaN(donateTotal) || donationValue < 0) {
            alert('Invalid input Amount.')
            return
        }

        let totalDonation = calculateTotalDonation(donateTotal, donationValue)
        let remainingBalance = calculateCurrentBalance(balance, donationValue)

        document.getElementById(donateTotalID).innerText = totalDonation
        document.getElementById('balance').innerText = remainingBalance
        document.getElementById(donateInputId).value = ""
        document.getElementById('modal').showModal()
    })
}

function showPagesByID(id) {
    document.getElementById('donation').classList.add('hidden')
    document.getElementById('history').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}