

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

function chunkArray(arr, len){
    const chunkArr=[];


    arr.forEach(val=>{
        const last = chunkArr[chunkArr.length-1];
        console.log(last)

        if(!last|| last.length===len){
            chunkArr.push([val])
        }else{
            last.push(val)
        }
    })

    return chunkArr
}

console.log(chunkArray([1,2,3], 2))