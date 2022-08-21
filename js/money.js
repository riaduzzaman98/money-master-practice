function fieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
}

document.getElementById('btn-calculate').addEventListener('click', function(){
    const clothFieldValue = fieldValueById('cloths-field');
    const rentFieldVlue = fieldValueById('rent-field');
    const foodfieldvalue = fieldValueById('food-field');

    const totalExpenses = document.getElementById('total-expenses');
    const totalFieldValue = clothFieldValue + rentFieldVlue + foodfieldvalue;
    totalExpenses.innerText = totalFieldValue ;
    
    const inputIncomeField = fieldValueById('input-field')
    const balance = inputIncomeField - totalFieldValue

    const balanceString = document.getElementById('balance')
    balanceString.innerText = balance;
})

document.getElementById('btn-save').addEventListener('click', function(){
    const savingValue = fieldValueById('saving-parcent');
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = fieldValueById('input-field') * (savingValue / 100);


    const remainingBalance = document.getElementById('remaining-balance');
    const balanceString = document.getElementById('balance');
    // const balance = balanceString.innerText;
    const remaining = parseFloat(balanceString.innerText) - parseFloat(savingAmount.innerText);
    remainingBalance.innerText = remaining
})
   

// function inputFieldById(inputId){
//     const inputField = document.getElementById(inputId);
//     const inputFieldString = inputField.value;
//     const inputFieldValue = parseFloat(inputFieldString);
//     return inputFieldValue;
// }

// function textFieldValueById(textId){
//     const textField = document.getElementById(textId);
//     const textFieldString = textField.innerText;
//     const textFieldValue = parseFloat(textFieldString);
//     return textFieldValue;
// }

// document.getElementById('btn-calculate').addEventListener('click', function(){
//     const foodfieldValue = inputFieldById('food-field');
//     const rentFieldValue = inputFieldById('rent-field');
//     const clothsFieldValue = inputFieldById('cloths-field');
    
//     const totalExpenses = textFieldValueById('total-expenses');
//     const totalFieldValue = foodfieldValue + rentFieldValue + clothsFieldValue;
//     console.log(totalFieldValue)
//     totalExpenses.innerText = totalFieldValue 
//     console.log(totalExpenses)
// })



// // document.getElementById('btn-calculate').addEventListener('click', function(){
// //     const
// // })