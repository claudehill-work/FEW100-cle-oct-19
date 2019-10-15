
import './styles.css';
import { multiply } from './math';

// console.log('Ready to Party With Some TypeScript!');

const number1El = document.getElementById('number1') as HTMLInputElement;
const number2El = document.getElementById('number2') as HTMLInputElement;
const multiplyButton = document.getElementById('multiply') as HTMLInputElement;
const answerEl = document.getElementById('answer') as HTMLSpanElement;

multiplyButton.addEventListener('click', () => {

    const n1 = number1El.valueAsNumber;
    const n2 = number2El.valueAsNumber;

    // const answer = n1 * n2; // TODO: Put this in a module ...
    const answer = multiply(n1, n2); // TODO: Put this in a module ...

    // console.log(answer.toString())

    answerEl.innerText = "Your Answer: " + answer.toString();

})