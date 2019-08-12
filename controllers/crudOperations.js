let users = [
    {
      "id": 1,
      "first_name": "Raul",
      "last_name": "Wynter",
      "email": "rwynter0@google.com"
    },
    {
      "id": 2,
      "first_name": "Demetri",
      "last_name": "Dakin",
      "email": "ddakin1@google.com"
    },
    {
      "id": 3,
      "first_name": "Lira",
      "last_name": "Collishaw",
      "email": "lcollishaw2@google.com"
    },
    {
      "id": 4,
      "first_name": "Jennette",
      "last_name": "O'Brollachain",
      "email": "jobrollachain3@msn.com"
    },
    {
      "id": 5,
      "first_name": "Annaliese",
      "last_name": "Marishenko",
      "email": "amarishenko4@msn.com"
    },
    {
      "id": 6,
      "first_name": "Delano",
      "last_name": "Millins",
      "email": "dmillins5@yahoo.com"
    },
    {
      "id": 7,
      "first_name": "Allister",
      "last_name": "Rizzetti",
      "email": "arizzetti6@yahoo.com"
    },
    {
      "id": 8,
      "first_name": "Yul",
      "last_name": "Slite",
      "email": "yslite7@yahoo.com"
    },
    {
      "id": 9,
      "first_name": "Stu",
      "last_name": "Liveing",
      "email": "sliveing8@devmountain.com"
    },
    {
      "id": 10,
      "first_name": "Carla",
      "last_name": "Gisbye",
      "email": "cgisbye9@devmountain.com"
    }
  ];


//  Controller Functions
getUsers = (req,res) => {
    res.status(200).send(users)
}

getUserByParam = (req,res) => {

    let arr = users.filter((element) => {
        return element.id === +req.id
    })

    res.status(200).send(arr[0])
}

createNewUser = (req,res) => {

    const newUser = {
      id: users.length + 1,
      first_name: req.body.first_name || '',
      last_name: req.body.last_name || '',
      email: req.body.email || '',
      hobbies: req.body.hobbies || [],
      computer: req.body.computer || {}
    }
  
    users.push(newUser)
  
    res.status(200).send(users)
}

updateUser = (req,res) => {
    const {id} = req.params
  
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === +id) {
        users[i].first_name = "Kyle"
      }
    }
  
    res.status(200).send(users)
}

deleteUser = (req,res) => {
    const {id} = req.params
  
    users = users.filter((element) => {
      return !(element.id === +id)
    })
  
    res.status(200).send(users)
}

module.exports = {
    getUsers,
    getUserByParam,
    createNewUser,
    updateUser,
    deleteUser
}