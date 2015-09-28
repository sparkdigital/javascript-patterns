var abstractVehicleFactory = (function () {
    var types = {};
    return {
        getVehicle: function ( type, customizations ) {
            var Vehicle = types[type];

            return (Vehicle ? new Vehicle(customizations) : null);
        },

        registerVehicle: function ( type, Vehicle ) {
            var proto = Vehicle.prototype;

            // only register classes that fulfill the vehicle contract
            if ( proto.drive  ) {
                types[type] = Vehicle;
            }

            return abstractVehicleFactory;
        }
    };
})();

function Car( options ) {
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";
}
 Car.prototype.drive = function(){};

function Truck( options){
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
    this.drive = function(){};
}
Truck.prototype.drive = function(){};
