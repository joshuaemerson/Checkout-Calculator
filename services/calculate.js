'use strict';

const calculateTotal = (invoice) => {
    let sum = 0
    invoice.expenses.map(item => {
        if (item['amount']) {
            sum += item['amount']
        }
    })
    const discount = invoice['discount'] ? invoice['discount']: null
    const discountAmount = invoice['discount'] ? (invoice['discount'] * sum): 0
    const tax = parseFloat(((sum - discountAmount) * 0.13).toFixed(2))
    

    return {
        subTotal: sum,
        discount: discount,
        discountAmount: parseFloat(discountAmount.toFixed(2)),
        tax: tax,
        total: parseFloat(((sum - discountAmount) + tax).toFixed(2))
        //invoice['discount'] ? parseFloat((sum * (1 - invoice['discount'])).toFixed(2)) : sum
    }
}

module.exports = calculateTotal;