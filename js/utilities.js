function getDonationTotal(id) {
    let donatetionTotal = convertToNumber(document.getElementById(id).innerText)
    return donatetionTotal
}
function getDonationValue(id) {
    let donateValue = convertToNumber(document.getElementById(id).value)
    return donateValue
}
function showPagesByID(id) {
    document.getElementById('donation').classList.add('hidden')
    document.getElementById('history').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}

function getHeadingUsingParent(id) {
    const parent = document.getElementById(id).parentNode.parentNode
    let heading = parent.nextElementSibling.textContent
    return heading
}

//Creating elements and appending
function addHistory(heading, amount) {
    const date = new Date()
    let history = document.createElement('div')
    history.classList.add('border', 'rounded-2xl', 'p-8', 'space-y-4', 'mb-6')

    let historyHeading = document.createElement('h3')
    historyHeading.textContent = `${amount} Taka is Donated for ${heading}`


    let historyTime = document.createElement('p')
    historyTime.textContent = `Date: ${date}`
    history.append(historyHeading, historyTime)

    document.getElementById('history').appendChild(history)
}