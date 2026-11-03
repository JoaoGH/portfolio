/**
 * Calcula dinamicamente os anos de experiência a partir de um ano ou data de início.
 * 
 * @param {number|string|Date} [startDate=2019] - Ano (ex: 2019) ou data inicial (ex: '2019-01-01').
 * @param {Date} [currentDate=new Date()] - Data atual de referência (útil para testes).
 * @returns {number} Quantidade de anos completos de experiência.
 */
export const getYearsOfExperience = (startDate = 2019, currentDate = new Date()) => {
  if (typeof startDate === 'number') {
    return Math.max(0, currentDate.getFullYear() - startDate);
  }

  const start = new Date(startDate);
  if (isNaN(start.getTime())) {
    return 0;
  }

  let years = currentDate.getFullYear() - start.getFullYear();
  const monthDiff = currentDate.getMonth() - start.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < start.getDate())) {
    years--;
  }

  return Math.max(0, years);
};
