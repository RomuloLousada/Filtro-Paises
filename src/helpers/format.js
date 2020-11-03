const valueFormatter = Intl.NumberFormat('pt-BR');

function formatValue(value) {
  return valueFormatter.format(value);
};

export { formatValue };