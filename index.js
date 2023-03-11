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

};

const getMeanAgeReduce = (arr) => {

};

const getNamesOnly = (arr) => {

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
