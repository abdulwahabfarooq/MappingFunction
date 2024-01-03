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
  
  // Create an instance of DrawingRoom
  let house = new DrawingRoom();
  
  // Set values using the setter method
  house.set("Tables", 1);
  house.set("Chairs", 6);
  house.set("Sofas", 2);
  house.set("Cupboards", 3);
  
  // Retrieve values using the getter method
  let value = house.get("Tables");
  console.log("The number of Tables in a Drawing Room is: " + value);
  