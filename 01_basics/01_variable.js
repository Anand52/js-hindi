const accountId = 144553
let accountEmail = "ap6974040@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;
//accountId = 2  not allowed

/*
prefer not to use var
because of issue in block scope and functional scope 
*/
accountEmail = "hc@dc.com"
accountPassword = "21212121"
accountCity = "bangluru"
 console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
