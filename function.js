let people = {
    firstName : ``,
    age : 0,
    occupation : ``,
}

employee = {...people}

employee.firstName = `Andrei`
employee.age = 22
employee.occupation = `Engineer`

let {firstName,age,occupation} = employee

nameX.innerText = firstName
ageX.innerText = age
workX.innerText = occupation



