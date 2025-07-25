const findTheOldest = function(people) {
    people.sort((a, b) => {
        const today = new Date();
        if (!("yearOfDeath" in a)) a.yearOfDeath = today.getFullYear();
        if (!("yearOfDeath" in b)) b.yearOfDeath = today.getFullYear();
        const ageA = a.yearOfDeath - a.yearOfBirth;
        const ageB = b.yearOfDeath - b.yearOfBirth;
        return ageB - ageA;
    })

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
