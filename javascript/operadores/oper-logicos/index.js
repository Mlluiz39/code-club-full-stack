const log = (...value) => console.log(value);

/*
Operadores Lógicos

&& -> E -> AND  // FILHO OBEDIENTE
true && true -> true
true && false -> false
false && true -> false
false && false -> false

|| -> OU -> OR  // FILHO ESPERTINHO
true || true -> true
true || false -> true
false || true -> true
false || false -> false

! -> NÃO -> NOT  // FILHO DO CONTRA / REBELDE
!true -> false
!false -> true
*/

log(!(!(true && true && true) && !(false && true || true)))