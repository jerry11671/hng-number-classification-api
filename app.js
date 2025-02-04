const express = require('express');
const app = express();
const cors = require('cors');

const port = 5000;

const axios = require('axios'); 

// Handle cors
app.use(cors());

// Function to check for prime number 
function isPrime (number) {
    if (number < 2) return false;
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

// Function to check for perfect number
function isPerfect(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}

// Function to calculate the sum of digits
function sumDigits(number) {
     return number.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

// Function to check for armstrong numbers
const isArmstrong = (num) => {
    const digits = num.toString().split('').map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === num;
};

// API Endpoint
app.get('/api/classify-number', async (req, res) => {
    const { number } = req.query;
    const baseUrl = 'http://numbersapi.com/';

    if (!number || isNaN(number)) {
        return res.status(400).json({ number: number, error: true });
    }

    const properties = [];
    const num = parseInt(number);

    if (isArmstrong(num)) {
        properties.push('armstrong');
    }

    properties.push(num % 2 === 0 ? 'even' : 'odd');

    try {
        const resp = await axios.get(`${baseUrl}${number}`);
        const respData = {
            number: number,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties,
            digit_sum: sumDigits(num),
            fun_fact: resp.data
        }
        res.status(200).json(respData);
    } catch (error) {
        res.status(500).json({ error: true });
    }
})



app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});



