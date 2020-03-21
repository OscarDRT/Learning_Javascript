let person = {
    name: 'Oscar',
last_name: 'Riaño',
    age: 27,
    email: 'oscarnetworkingpro@gmail.com',
    technologies:   [
                'Python',
                'c',
                'JavaScript'
                    ],
    home: {
      city: 'Medellin',
      country: 'Colombia'
    },
    birth: function(){
        return new Date().getFullYear() - this.age;
    }
}

console.log(person);
console.log(typeof person);
console.log(person['name']); //oscar
console.log(person.name); // oscar
console.log(person.technologies[2]); // JavaScript
console.log(person.home.country) // Colombia
console.log(person.birth()); //1993