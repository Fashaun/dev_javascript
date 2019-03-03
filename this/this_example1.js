var getGender = function(){
  return this.gender;
};

var people1 = {
  gender: 'female',
  getGender: getGender
};

var people2 = {
  gender: 'male',
  getGender: getGender
};

console.log( people1.getGender() );
console.log( people2.getGender() );
