// Code your solution in this file!
const returnFirstTwoDrivers = (arra) => {
    const newArra = [...arra];
    return newArra.slice(0, 2);
};

const returnLastTwoDrivers = (arra1) => {
    const newArra = [...arra1];
    return newArra.slice(newArra.length - 2, newArra.length);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(valu){
    return function (valu) {
        // return valu**2;
        let multiplier = valu;
        return valu * multiplier;
    };
};  

const fareDoubler = (createFareMultiplier) => {
    return createFareMultiplier * 2;
};

const fareTripler = (createFareMultiplier) => {
    return createFareMultiplier * 3;
};

function selectDifferentDrivers(aArray, aArg){
    while(aArg == returnFirstTwoDrivers || returnLastTwoDrivers){
        return aArg(aArray);
    };
};