function filter_list(l) {
  return l.filter(item => typeof item === 'number' && Number.isInteger(item));
}

console.log(filter_list([1,2,'a','b'])); 
console.log(filter_list([1,'a','b',0,15])); 
console.log(filter_list([1,2,'aasf','1','123',123])); 