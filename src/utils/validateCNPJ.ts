export default (CNPJ) => {
  let soma = 0;
  let resto;

  if (CNPJ === '00000000000000') return false;
  for (let i = 1; i <= 9; i++) soma += Number(CNPJ.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) resto = 0;
  if (resto !== Number(CNPJ.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) soma += Number(CNPJ.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) resto = 0;
  if (resto !== Number(CNPJ.substring(10, 11))) return false;
  return true;
};
