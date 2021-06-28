class Relative{
    constructor(name, parents){
        this.name = name;
        this.parents = parents;
    }

    childOf() {
        return this.parents.name[0];
    }
}

const mona = new Relative('Mona Simpson', ['Great Grandma', 'Great Grandpa']);
const abe = new Relative('Abe Simpson', ['Great Grandma', 'Great Grandpa']);
const jacqueline = new Relative('Jacqueline Bouvier', ['Great Grandma', 'Great Grandpa']);
const clancy = new Relative('Jacqueline Bouvier', ['Great Grandma', 'Great Grandpa']);
const marge = new Relative('Marge Simpson', [jacqueline.name, clancy.name]);
const homer = new Relative('Homer Simpson', [mona, abe]);
const lisa = new Relative('Lisa Simpson', [marge.name, homer.name]);
const maggie = new Relative('Maggie Simpson', [marge, homer]);
const bart = new Relative('Bart Simpson', [marge, homer]);

console.log(lisa.childOf());