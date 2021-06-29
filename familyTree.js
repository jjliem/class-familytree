class Relative{
    constructor(name, parents){
        this.name = name;
        this.parents = parents;
    }

    childOf() {
        let tempParents = this.parents[0] + " & " + this.parents[1];
        return tempParents;
    }
}

// const mona = new Relative('Mona Simpson', ['Great Grandma', 'Great Grandpa']);
// const abe = new Relative('Abe Simpson', ['Great Grandma', 'Great Grandpa']);
// const jacqueline = new Relative('Jacqueline Bouvier', ['Great Grandma', 'Great Grandpa']);
// const clancy = new Relative('Clancy Bouvier', ['Great Grandma', 'Great Grandpa']);
// const marge = new Relative('Marge Simpson', [jacqueline.name, clancy.name]);
// const homer = new Relative('Homer Simpson', [mona.name, abe.name]);
// const lisa = new Relative('Lisa Simpson', [marge.name, homer.name]);
// const maggie = new Relative('Maggie Simpson', [marge.name, homer.name]);
// const bart = new Relative('Bart Simpson', [marge.name, homer.name]);

// console.log("Lisa's parents are: " + lisa.childOf());
// console.log("Marge's parents are: " + marge.childOf());

module.exports = Relative