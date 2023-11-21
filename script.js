//your JS code here. If required.
let student ={
	name: 'aditya',
}
Object.prototype.getKeys = function() {
  // const keys = [];
  // for (const key in this) {
  //   keys.push(key);
  // }
	  return Object.keys(this);
};

// const studentKeys = student.getKeys();


console.log(student.getKeys());

// let key = student.getKeys(["name"]);