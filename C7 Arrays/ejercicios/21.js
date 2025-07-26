function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  const result = [];
  array.map((month) => {
    if (month === 'Enero' || month === 'Marzo' || month === 'Noviembre') {
      result.push(month);
    }
  });
  const allFound = ['Enero', 'Marzo', 'Noviembre'].every((month) =>
    result.includes(month)
  );

  if (allFound) return result;
  return 'No se encontraron los meses pedidos';
}

module.exports = mesesDelAño;
