(function () {
  'use strict';

  const first = 'qwertyuiop[]';
  const second = 'asdfghjkl;\'';
  const third = 'zxcvbnm,./';

  console.log(first);
  console.log(second);
  console.log(third);

  const firstLength = first.length;
  const secondLength = second.length;
  const thirdLength = third.length;

  console.log(firstLength);
  console.log(secondLength);
  console.log(thirdLength);

  let firstAndLastElementStr_1 = first.charAt(0) + first.charAt(firstLength - 1);
  let firstAndLastElementStr_2 = second.charAt(0) + second.charAt(secondLength - 1) ;
  let firstAndLastElementStr_3 = third.charAt(0) + third.charAt(thirdLength - 1);

  console.log(firstAndLastElementStr_1);
  console.log(firstAndLastElementStr_2);
  console.log(firstAndLastElementStr_3);

  let subStr_1 = first.indexOf('[');
  let subStr_2 = first.indexOf(']');

  console.log( 'Result [ = ', subStr_1, 'Result ] = ', subStr_2 );

  console.log(`String 1 = ${ first }, Length = ${ firstLength }, First and Last element = ${firstAndLastElementStr_1}, Result = ${subStr_1}`);
  console.log(`String 2 = ${ second }, Length = ${ secondLength }, First and Last element = ${firstAndLastElementStr_2}, Result = ${subStr_2}`);
  console.log(`String 3 = ${ third }, Length = ${ thirdLength }, First and Last element = ${firstAndLastElementStr_3}`);
})();
