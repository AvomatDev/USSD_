prompt("Enter your unique banking code to continue");
let opt = prompt("WELCOME TO UNITED BANK OF AFRICA\n Please select your service option to continue:\n 1) Airtime\n 2) Withdraw\n 3) Transfer\n 4) Check Balance\n 5) Pay Bills")

if(opt==1){
let dpl= parseInt(prompt("Please Enter Amount"))
let message = ("Your " + dpl + " Airtime Transaction Successful")
alert(message)

}
else if(opt==3){
    let acc=prompt(" Please enter your Account Number:\n aaa)Main")
    let amt=prompt("Enter Amount")
    let Bank=parseInt(prompt("Select Bank:\n aa) First Bank\n bb) UBA Bank\n cc) Fidelity Bank\n dd)Union Bank"))
    let dispense=alert("Your " + amt +" transfer to " + acc + " was successful")
    }
    
else(alert("Transaction not available"))

