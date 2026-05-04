const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear(); 
    const sorted = [...people].sort((a,b) => {
        return(
        ((b.yearOfDeath || currentYear) - b.yearOfBirth) -
        ((a.yearOfDeath || currentYear) - a.yearOfBirth)
        );
    });
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
