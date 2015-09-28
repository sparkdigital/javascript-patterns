var person = function(){
    var name = "Pablo";
    var lastName = "Barrenechea";
    this.getName = function(){
        return name;
    }
};

var extendedPerson = function(){
    person.apply(this, arguments);

    this.getLastName = function(){
        return lastName;
    }
};

var ClassA = function() {
    this.name = "class A";
}
var a = new ClassA();
ClassA.prototype.print = function() {
    console.log(this.name);
}
var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};

var ClassB = function() {
    this.name = "class B";
    this.surname = "I'm the child";
}
inheritsFrom(ClassB, ClassA);
