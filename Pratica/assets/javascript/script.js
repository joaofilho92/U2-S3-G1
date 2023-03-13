
// Esercizio 1
// creo la classe user

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherPerson) {
    if (this.age > otherPerson.age) {
      return `${this.firstName} è più vecchio di ${otherPerson.firstName}`;
    } else if (this.age < otherPerson.age) {
      return `${this.firstName} è più giovane di ${otherPerson.firstName}`;
    } else {
      return `${this.firstName} ha la stessa età di ${otherPerson.firstName}`;
    }
  }
}


const user1 = new User('Mario', 'Rossi', 30, 'Roma');
const user2 = new User('Anna', 'Verdi', 15, 'Milano');

console.log(user1.compareAge(user2)); 
console.log(user2.compareAge(user1)); 

// Esercizio 2

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

function createPet() {
  const petName = document.getElementById('petName').value;
  const ownerName = document.getElementById('ownerName').value;
  const species = document.getElementById('species').value;
  const breed = document.getElementById('breed').value;

  const pet = new Pet(petName, ownerName, species, breed);

  const petList = document.getElementById('petList');
  const li = document.createElement('li');
  li.textContent = `Name: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;

  // Verifica se il nuovo Pet condivide lo stesso proprietario di un altro Pet
  
  const pets = petList.getElementsByTagName('li');
  let hasSameOwner = false;
  for (let i = 0; i < pets.length; i++) {
    const existingPet = pets[i].textContent;
    if (existingPet.includes(`Owner: ${pet.ownerName}`)) {
      hasSameOwner = true;
      break;
    }
  }

  if (hasSameOwner) {
    li.textContent += ' (stesso padrone!)';
  }

  petList.appendChild(li);
}