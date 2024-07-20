const calculateTotal = require('../services/calculate.js');
const getDiscount = require('../services/discountCode');

const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

const testInvoice = {
    expenses: DUMMY_EXPENSES,
    discount: 0.10
}

const testInvoice2 = {
  expenses: DUMMY_EXPENSES,
}

test('discount to equal 0.10', () => {
    expect(getDiscount('save10')).toBe(0.10)
});

test('discount to be undefined', () => {
    expect(getDiscount('save40')).toBe(undefined)
});

test('discount to equal 0.05', () => {
    expect(getDiscount('save')).toBe(0.05)
})

test('subTotal to equal 1638.28', () => {
    expect(calculateTotal(testInvoice).subTotal).toBe(1638.28)
})

test('discount to equal 0.10', () => {
    expect(calculateTotal(testInvoice).discount).toBe(0.10)
})

test('discountAmount to equal 163.83', () => {
    expect(calculateTotal(testInvoice).discountAmount).toBe(163.83)
})

test('tax to equal 191.68', () => {
  expect(calculateTotal(testInvoice).tax).toBe(191.68)
})

test('total to equal 1666.13', () => {
    expect(calculateTotal(testInvoice).total).toBe(1666.13)
})

test('subTotal to equal 1638.28', () => {
  expect(calculateTotal(testInvoice2).subTotal).toBe(1638.28)
})

test('discount to equal null', () => {
  expect(calculateTotal(testInvoice2).discount).toBe(null)
})

test('discountAmount to equal 0', () => {
  expect(calculateTotal(testInvoice2).discountAmount).toBe(0)
})

test('tax to equal 212.98', () => {
expect(calculateTotal(testInvoice2).tax).toBe(212.98)
})

test('total to equal 1851.26', () => {
  expect(calculateTotal(testInvoice2).total).toBe(1851.26)
})
