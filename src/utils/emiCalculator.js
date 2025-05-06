

export function calculateEMI(principal, annualRate, years) {
  const months = years * 12;
  const monthlyRate = annualRate / (12 * 100);
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);
  return parseFloat(emi.toFixed(2));
}

export function getAmortizationSchedule(principal, annualRate, years) {
  const months = years * 12;
  const monthlyRate = annualRate / (12 * 100);
  const emi = calculateEMI(principal, annualRate, years);
  const schedule = [];
  let balance = principal;

  for (let i = 1; i <= months; i++) {
    const interest = parseFloat((balance * monthlyRate).toFixed(2));
    const principalPaid = parseFloat((emi - interest).toFixed(2));
    balance = parseFloat((balance - principalPaid).toFixed(2));
    schedule.push({ month: i, principalPaid, interest, balance: balance > 0 ? balance : 0 });
  }
  return schedule;
}