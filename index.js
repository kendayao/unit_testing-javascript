

const user={
    f_Name: 'Ken'
}

user['l_Name']

console.log(user)

function fetchUser(){
    
        axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res=>console.log(res.data)).catch(error=>console.log(error))
    }
fetchUser()