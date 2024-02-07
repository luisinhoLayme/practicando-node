
const builMakePerson = ({ getUuid, getAge }) => {
  return ({ name, birthdate }) => {
    return {
      id: getUuid(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate)
    }
  }
}

module.exports = {
  builMakePerson
}


