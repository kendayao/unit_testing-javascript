const axios = require("axios");

const functions = {
    add: (num1, num2)=> num1+num2,
    isNull: ()=>null,
    checkValue: x=>x,
    createUser: ()=>{
        const user = {
            firstName: 'Ken'
        }
        user['lastName']='Dayao'
        return user;
    },
    fetchUser: ()=>{
        return axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res=>res.data).catch(error=>console.log(error))
    },
    reverseString: (str)=>{
        return str.split('').reverse().join('')
    }
}

 module.exports=functions