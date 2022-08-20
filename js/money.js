function fieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = ''
    return inputFieldValue;
}

document.getElementById('btn-calculate').addEventListener('click', function(){
    const clothFieldValue = fieldValueById('cloths-field');
    const rentFieldVlue = fieldValueById('rent-field');
    const foodfieldvalue = fieldValueById('food-field');

    const totalExpenses = document.getElementById('total-expenses');
    const totalFieldValue = clothFieldValue + rentFieldVlue + foodfieldvalue;
    totalExpenses.innerText = totalFieldValue ;
    
    const inputField
    
})

   