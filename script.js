//your JS code here. If required.
let student ={
	name: 'aditya',
}
Object.prototype.getKeys = function() {
  // const keys = [];
  // for (const key in this) {
  //   keys.push(key);
  // }
  return student;
};

const studentKeys = student.getKeys();


console.log(studentKeys);

// let key = student.getKeys(["name"]);