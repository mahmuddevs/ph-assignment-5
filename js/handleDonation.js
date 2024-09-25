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
        if (isNaN(donationValue) || isNaN(donateTotal) || donationValue <= 0) {
            alert('Invalid input Amount.')
            return
        }
        //Getting headings
        let heading = getHeadingUsingParent(donateTotalID)
        let totalDonation = calculateTotalDonation(donateTotal, donationValue)
        let remainingBalance = calculateCurrentBalance(balance, donationValue)

        document.getElementById(donateTotalID).innerText = totalDonation
        document.getElementById('balance').innerText = remainingBalance
        document.getElementById(donateInputId).value = ""
        document.getElementById('modal').showModal()
        //Adds History In History Page
        addHistory(heading, donationValue)
    })
}