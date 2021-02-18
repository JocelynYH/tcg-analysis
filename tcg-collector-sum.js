
// on the collections page, copy and paste the following into the inspector EACH TIME YOU REFRESH. 

// Everytime you change the collection, run getAllPrice()

const minPricesText = Array.from(document.querySelectorAll('.minPrice')).map(e => e.textContent)


const extractPrices = myQuery => {
    let priceCells = Array.from(document.querySelectorAll(myQuery));
    let prices = priceCells.map(elem => Number(elem.textContent.replace(/[^0-9.]/g, "")));
    return prices
}

const sumPrices = pricesArray => {
    return pricesArray.reduce((a,b) => a+b)
}

const getAllPrices = () => {
    const cardsTotalLow = sumPrices(extractPrices('.minPrice'))
    const cardsTotalMid = sumPrices(extractPrices('.avgPrice'))
    console.log('LOW PRICE TOTAL', cardsTotalLow.toFixed(2))
    console.log('MID PRICE TOTAL', cardsTotalMid.toFixed(2))
}

getAllPrices()