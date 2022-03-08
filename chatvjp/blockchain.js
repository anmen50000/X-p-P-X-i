const abi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "user",
      "outputs": [
        {
          "internalType": "string",
          "name": "phone1",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "hoten1",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_phone",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_hoten",
          "type": "string"
        }
      ],
      "name": "add",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_phone",
          "type": "string"
        }
      ],
      "name": "get",
      "outputs": [
        {
          "internalType": "string",
          "name": "phone",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "hoten",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_phone",
          "type": "string"
        }
      ],
      "name": "userExists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ]
  const Web3 = require('web3')
  const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'))
 const account = "0xEF9A418dF88263aa0fC9Dc71fce2041ba17B400c";
 const address = "0xD92509d5024b7999395FB4767d1160035549ca1f";
 const pass = "123123aa";
 const userContract = new web3.eth.Contract(abi,address);
 async function getUser(phone_number) {
   await web3.eth.personal.unlockAccount(account,pass,9999)
   return userContract.methods
   .get(phone_number)
   .call().then(console.log)
}

