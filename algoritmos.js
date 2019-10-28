/**
 * Método principal que regresa un arreglo de correos electrónicos validos.
 * @param emails Arreglo de correos
 */
var emailsUnicos = function (emails) {
  return emails.map(_email => filterRules(_email));
}

/**
 * Método que limpia el correo electronico
 * @param item correo electrónico a analizar.
 */
var filterRules = function (item) {
  const _posicionEn = item.lastIndexOf('@');
  const nombreDominio = item.substring(_posicionEn);
  let nombreLocal = item.substring(0, _posicionEn).replace(/[.]+/g, '');

  if (nombreLocal.match(/[+]+/g)) {
    nombreLocal = nombreLocal.substring(0, nombreLocal.lastIndexOf('+'));
  }

  return `${nombreLocal}${nombreDominio}`;
}


/**
 * Correos para probar.
 */
var _emails = [
  'test.email+alex@kavak.com',
  'test.e.mail+bob.cathy@kavak.com',
  'testemail+david@ka.vak.com'
];
