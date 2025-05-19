
function friend(names) {
  return names.filter(name => name.length === 4);
}

// Test cases
console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));    
console.log(friend(["Peter", "Stephen", "Joe"]));            
console.log(friend(["Mark", "John", "Luke", "Paul", "James"])); 
