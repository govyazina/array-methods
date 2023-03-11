const filterByAge = (el) => {
    return el.age < 50;
};

const filterByScore = (el) => {
    return el.score > 75;

};

const filterByServiceRecord = (el) => {
    return el.serviceRecord > 5;
};

const sortByScore = (arr) => {
    const arrCopy = JSON.parse(JSON.stringify(arr))
    arrCopy.sort((a, b) => b.score - a.score)
    return arrCopy;
};

const getMeanAge = (arr) => {
    return arr.reduce((meanAge, el) => (meanAge + el.age), 0) / arr.length //а потом я посмотрела следующий тест))
};

const getMeanAgeReduce = (arr) => {
    let sum = 0;
    for (const arrElement of arr) {
        sum = sum + arrElement.age
    }
    return sum/arr.length

};

const getNamesOnly = (el) => {
    return el.name
};

module.exports = {
    filterByAge,
    filterByScore,
    filterByServiceRecord,
    sortByScore,
    getMeanAge,
    getMeanAgeReduce,
    getNamesOnly,
};
