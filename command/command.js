var commandInterface = (function(){

    var carManager = {

        // request information
        requestInfo: function( model, id ){
            return "The information for " + model + " with ID " + id + " is foobar";
        },

        // purchase the car
        buyVehicle: function( model, id ){
            return "You have successfully purchased Item " + id + ", a " + model;
        },

        // arrange a viewing
        arrangeViewing: function( model, id ){
            return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
        }
    };

    function execute(name){
        return carManager[name] && carManager[name].apply( carManager, [].slice.call(arguments, 1) );
    }

    return {
        execute: execute
    }

})();
