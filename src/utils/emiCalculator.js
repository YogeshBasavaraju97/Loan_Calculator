export function calculateEMI(principal, annualRate, years) {

  const months = years * 12;
  const monthlyRate = annualRate / (12 * 100);
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, monthlyRate)) / (Math.pow(1 + monthlyRate, months) - 1);

  return parseFloat(emi.toFixed(2));

}