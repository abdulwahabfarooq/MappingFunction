// Define the drawingRoom constructor function
function DrawingRoom() {
    this.roomMap = new Map();
  }
  
  // Add setter method to the prototype
  DrawingRoom.prototype.set = function(key, value) {
    this.roomMap.set(key, value);
  };
  
  // Add getter method to the prototype
  DrawingRoom.prototype.get = function(key) {
    return this.roomMap.get(key);
  };

  //Add remove method to prototype
  DrawingRoom.prototype.remove = function(key){
    return this.roomMap.delete(key);
  };
  
  // Create an instance of DrawingRoom
  let house = new DrawingRoom();
  
  // Set values using the setter method
  house.set("Tables", 1);
  house.set("Chairs", 6);
  house.set("Sofas", 2);
  house.set("Cupboards", 3);
  

// Iterating over the key-value pairs in the map
console.log("Key-value pairs in the drawing room:");

for (let pair of house.roomMap.entries()) {
  console.log(pair[0] + ": " + pair[1]);
}