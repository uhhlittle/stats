// ARRAY 1
const texasss = [{
    name: 'Mike',
    age: 23,
    gender: 'm',
    us: false,
  },
  {
    name: 'Liz',
    age: 20,
    gender: 'f',
    us: true,
  },
  {
    name: 'Chris',
    age: 102,
    gender: 'm',
    us: true,
  },
  {
    name: 'Chuloo',
    age: 27,
    gender: 'm',
    us: false,
  },
  {
    name: 'Annie',
    age: 30,
    gender: 'f',
    us: true,
  },
]
const newieyork = [{
    name: 'Michelle',
    age: 19,
    coder: true,
    gender: 'f',
    us: true,
  },
  {
    name: 'Sam',
    age: 25,
    coder: false,
    gender: 'm',
    us: false,
  },
  {
    name: 'Ivy',
    age: 26,
    coder: true,
    gender: 'f',
    us: false,
  },
  {
    name: 'Nick',
    age: 32,
    coder: true,
    gender: 'm',
    us: true,
  },
  {
    name: 'Jim Beglin',
    age: 65,
    coder: false,
    gender: 'm',
    us: true,
  },
]

const vegzas = [{
    name: 'Charly',
    age: 32,
    coder: true,
    gender: 'm',
  },
  {
    name: 'Law',
    age: 21,
    coder: true,
    gender: 'm',
  },
  {
    name: 'Rosey',
    age: 42,
    coder: false,
    gender: 'f',
  },
  {
    name: 'Steph',
    age: 18,
    coder: true,
    gender: 'f'
  },
  {
    name: 'Jon',
    age: 47,
    coder: false,
    gender: 'm',
  },
]

const superData = Array.prototype.concat.apply(texasss, newieyork, vegzas);

// Function Definition

// Part 1 - Find all users older than 24

function findUsersOlderThan24 (users) {
  var olderUsers = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].age <= 24) {
      continue;
    }
    olderUsers.push(users[i]);
  }
  console.log(olderUsers)
}

// Part 2 - Find the total age of all users

function findTotalAgeOfUsers (users) {
  let totalAge = 0;
  for (var i = 0; i < users.length; i++) {
    totalAge = totalAge + users[i].age;
  }
}

// Part 3 - List all female coders

function findAllFemales (users) {
  var femaleCoders = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].gender === 'm' || !users[i].coder) {
      continue;
    }
    femaleCoders.push(users[i].name);
  }
  console.log(femaleCoders)
  return femaleCoders;
}



// Part 1 - List all users in US in ascending order

function findandSortAllUsUsers (users) {
  var usUsers = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].us) {
      usUsers.push(users[i].name);
    }
  }
  return usUsers.sort();
  console.log(usUsers);
}
// Part 2 - Sort all users by age

function sortByAge (users) {
  return users.sort(function (object1, object2) {
    return object1.age - object2.age;
  })
}
// Part 3 -  List all female coders

function listAllFemaleCoders (users) {
  const femaleCoders = users.filter((coder) => {
    if (coder.gender === 'f') {
      return coder.name;
    }
  });
  console.log(femaleCoders)
  return femaleCoders;
}


// Part 1 - Find the total age of male coders under 25
// Part 2 - List all male coders over 30
// Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.

// Execution
findUsersOlderThan24(texasss);
findTotalAgeOfUsers(texasss);
findAllFemales(texasss);
findAllFemales(newieyork);
findandSortAllUsUsers(superData);
console.log(sortByAge(superData))
listAllFemaleCoders(superData)

