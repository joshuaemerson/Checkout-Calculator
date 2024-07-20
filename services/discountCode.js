'use strict';

const discounts = {
    'save10': 0.10,
    'save20': 0.20,
    'save30': 0.30,
    'save': 0.05
}

const getDiscount = (discountCode) => {return discounts[discountCode]}

module.exports = getDiscount

