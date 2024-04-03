// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching (drivers, Bobby){
    const filteredDrivers = drivers.filter((d) => d.toLowerCase() === Bobby.toLowerCase()
)
return filteredDrivers
    
}

function fuzzyMatch(drivers, Bobby) {
    const matchedDrivers = drivers.filter(
      (d) => d.slice(0, 2) === Bobby.slice(0, 2)
    );
    return matchedDrivers;
  }
    function matchName(drivers, name) {
      const matchedDrivers = drivers.filter((driver) => driver.name === name);
      return matchedDrivers;
    }