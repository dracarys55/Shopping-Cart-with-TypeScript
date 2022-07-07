const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
});

const formatCurrency = (number: any) => {
  return CURRENCY_FORMATTER.format(number);
};

export default formatCurrency;
