# Number Classification API

## Description
A fast and lightweight REST API that classifies numbers based on their mathematical properties. It determines whether a number is prime, perfect, Armstrong, odd, or even, and calculates its digit sum. Additionally, it fetches a fun fact about the number from the Numbers API.

## Features
- Classifies numbers as **prime, perfect, Armstrong, odd, or even**
- Computes the **sum of digits** of the number
- Fetches **fun facts** from [Numbers API](http://numbersapi.com)
- Handles **error cases** (invalid input, missing parameters)
- Supports **CORS** for public access
- Returns **JSON responses**

## API Endpoint
### **GET /api/classify-number**
#### **Query Parameters**
| Parameter | Type    | Description            |
| --------- | ------- | ---------------------- |
| `number`  | Integer | The number to classify |

#### **Example Request**
```
GET /api/classify-number?number=371
```

#### **Example Response (200 OK)**
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### **Error Response (400 Bad Request)**
```json
{
    "number": "alphabet",
    "error": true
}
```

## Installation
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/number-classification-api.git
   cd number-classification-api
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Run the server**
   ```sh
   node app.js
   ```
   The server will run on `http://localhost:5000`

## Deployment
To deploy this API, you can use platforms like:
- **Render**
- **Vercel**
- **Railway**
- **Heroku**

## Author
[Godson Jerry](https://github.com/jerry11671)

---
### **Contributions**
Contributions, issues, and feature requests are welcome! Feel free to fork this repository and submit a pull request.

