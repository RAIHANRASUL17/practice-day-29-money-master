/*--------------------Work with Calculate Button-----------------*/
// step-1
document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodField = document.getElementById('food')
    const foodCoast = parseFloat(foodField.value);

    const rentField = document.getElementById('rent');
    const rentCoast = parseFloat(rentField.value);

    const clothesField = document.getElementById('clothes')
    const clothesCoast = parseFloat(clothesField.value)

    const totalCoast = foodCoast + rentCoast + clothesCoast;
    //step-2: get total-expense then totalCoast
    const totalExpenseElement = document.getElementById('total-expense')
    totalExpenseElement.innerText = totalCoast;

    // step-3: get income
    const incomeField = document.getElementById('income');
    const incomeTotal = parseFloat(incomeField.value);

    // step-4: get Balance and set (incomeTotal-totalCoast)
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = incomeTotal - totalCoast;
})

/*--------------------Work with Save Button-----------------*/
// step-1
document.getElementById('btn-save').addEventListener('click', function () {
    // step-2: get income
    const incomeField = document.getElementById('income');
    const incomeTotal = parseFloat(incomeField.value);

    // step-3 : incomeTotal*0.01
    const saveField = document.getElementById('save');
    const saveFieldFinal = parseFloat(saveField.value);
    const saveFromIncomeTotal = incomeTotal * saveFieldFinal * 0.01;


    // step-4: get Saving Amount and set saveFromIncome
    const savingAmountElement = document.getElementById('saving-amount');
    const savingAmountForRemainingPart = parseFloat(savingAmountElement.innerText);
    savingAmountElement.innerText = saveFromIncomeTotal;


    // step 5: 
    // step-5-1: get Balance and set (incomeTotal-totalCoast)
    const balanceElement = document.getElementById('balance');
    const balanceElement_1 = parseFloat(balanceElement.innerText)
    //  console.log(balanceElement_1);

    // step-5-2:get Remaining Balance and set (balanceElement_1 - savingAmountForRemainingPart
    const remainingBalanceElement = document.getElementById('remaining-balance');
    remainingBalanceElement.innerText = balanceElement_1 - savingAmountForRemainingPart;
})