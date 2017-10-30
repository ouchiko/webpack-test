class People {

    constructor()
    {
        this._people = null;
    }

    females()
    {
        return (this._people.filter(function(person){
            return person.sex == "female";
        }));
    }

    males()
    {
        return (this._people.filter(function(person) {
            return person.sex == "male";
        }));
    }

    people(p)
    {
        this._people = p;
        console.dir(p);
        this.printSets();
    }

    printSets()
    {
        console.log("Females: ");
        console.dir(this.females());
        console.log("Males: " );
        console.dir(this.males());
    }
}

export default People;
