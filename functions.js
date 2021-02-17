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
    }
}

 module.exports=functions