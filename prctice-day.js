const person = {
    name: 'Mr.Mads',
    age: 18,
    height: '5.4inc',
    weidth: '32inc',
    work: 'web dev'
}

const name = 'Mr.MADS';
let age = 18;
let weidth = '32inc';
const gfLists = ['ela', 'bela', 'mila', 'cila', 'folla', 'bolla'];

const templetSring = `
    amar name ${name}, ami ${age} er cele, amar ekta live cilo seta ${gfLists[5]}.
    i am a ${person.work}, and 
    height ${person.height} ,
    heidth ${person.weidth}
    :)...(: that's all of me
`;

// console.log(templetSring);
// 3
const divided = num => num / 5;
// console.log(divided(100));
// 3.1
const three1 = (num, num2) => (num + 2) * (num2 + 2);
// console.log(three1(2, 2))
const three2 = (num, num2, num3) => num * num2 * num3;
// console.log(three2(10, 10, 10))
const three3 = (num, num2) => {
    const ff1 = num + 2;
    const ff2 = num2 + 2;
    return ff1 * ff2;
};
// console.log(three3(10, 10))


const numbers = [2, 23, 2, 2, 3, 23, 12, 534, 8934, 393, 93, 33, 23, 23, 23, 4, 543, 23, 65, 756, 44];

const multiple = numbers.map(number => number * 5);
// console.log(multiple)

const odd = numbers.filter(number => number % 2);
// console.log(odd)
const objects = [
    { name: 'xtreme', fn: '2 cooler', color: 'black', price: 30000 },
    { name: 'sky view', hd: 'normal', color: 'black', price: 5000 },
    { name: 'samsung glaxy m01', color: 'navy blue', price: 90000 }
]
const bestPrice = objects.find(object => object.price === 5000);
// console.log(bestPrice)

const ami = {
    name2: 'mr.mads', age2: 18, father: {
        name2: 'md.rm', age2: 43, father: {
            name2: 'md. nm', age2: 87, father: {
                name2: 'md. km', age2: 108
            }
        }
    }, work: 'kicu nah ^_^', gender: 'male'
}

const { age2, name2, father } = ami.father.father;
// console.log(age2, name2, father)

const three6 = ami.father;
// console.log(three6)

const defultPm = (num, num1, num2 = 7) => num + num1 + num2;
// console.log(defultPm(1, 2))

const grandGrandGrandFa = ami.father.father.father;
// console.log(grandGrandGrandFa)

const grandGrandGrandMa = ami.father.father.father?.father?.mother;
// console.log(grandGrandGrandMa)