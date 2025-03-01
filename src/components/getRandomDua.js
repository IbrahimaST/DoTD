import duas from '../data/duas.json'

const getRandomDua = () => {
    let randomIndex = Math.floor(Math.random()*duas.length);
    let dua = duas[randomIndex];
    return dua;
}

export default getRandomDua;