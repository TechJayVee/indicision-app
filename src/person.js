export const isAdult = (age) => age<18 ? 'not an adult' : 'adult';
export const candRINK = (age) => age<18 ? "cannot drink" : 'can drink';
const isSenior = (age) => age>=60 ;

export default isSenior;