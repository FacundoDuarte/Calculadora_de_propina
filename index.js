const d = document;
const bill = d.getElementById('bill');
const optionsTip = d.querySelector('.options__tip')
const inputNumberPeople = d.getElementById('input__people');
const enviar = d.getElementById('calcular');
const tipResult = d.getElementById('tip__result');
const totalResult = d.getElementById('total__result');
const customTip = d.getElementById('custom__tip');
const labelZero = d.querySelector('.zero');

optionsTip.addEventListener('click', (e) => {
    enviar.addEventListener('click', () => {
        if (inputNumberPeople.value > 0) {
            if (customTip.value != '') {
                totalResult.innerText = '$' + parseFloat((parseFloat(bill.value) + parseFloat((bill.value * customTip.value)) / 100) / inputNumberPeople.value);
                tipResult.innerText = '$' + parseFloat((parseFloat((bill.value * customTip.value)) / 100) / inputNumberPeople.value);
                labelZero.style.display = 'none';
                inputNumberPeople.style.border = 'none';
                inputNumberPeople.style.outlineColor = 'var(--strongCyan)';
            } else {
                if (e.target.classList.contains('tips')) {
                    totalResult.innerText = '$' + parseFloat((parseFloat(bill.value) + parseFloat((bill.value * e.target.value)) / 100) / inputNumberPeople.value);
                    tipResult.innerText = '$' + parseFloat((parseFloat((bill.value * e.target.value)) / 100) / inputNumberPeople.value);
                    labelZero.style.display = 'none';
                    inputNumberPeople.style.border = 'none';
                    inputNumberPeople.style.outlineColor = 'var(--strongCyan)';
                }
            }
        } else {
            labelZero.style.display = 'block';
            inputNumberPeople.style.border = '1px solid var(--orange)';
            inputNumberPeople.style.outlineColor = 'var(--orange)';
        }
    });
})
const btnReset = d.getElementById('reset');
btnReset.addEventListener('click', () => {
    bill.value = '';
    customTip.value = '';
    inputNumberPeople.value = '';
    tipResult.innerText = '$0'
    totalResult.innerText = '$0'
});