import axios from "axios";
//1
export const strLength = (mystr: string) => mystr.length;

//2
export const polyndrom = (mystr: string) => {
  const len = mystr.length;
  for (let i = 0; i < len / 2; i++) {
    if (mystr[i] !== mystr[len - 1 - i]) {
      return false;
    }
    return true;
  }
};
//3
export const highSeder = (arr: number[]) => arr.sort((a, b) => a - b);

//4
export const sqrt = (num: number) =>
  num > 0 ? Math.sqrt(num) : `${num} is a negative number`;

//5
export const sumArray = (numsArray: number[]) => {
  const mysum = 0;
  const sumWithMysum = numsArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    mysum
  );
  return sumWithMysum;
};
//6
export const fetchUserData = async (userId: number) => {
  try {
    const { data: user } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!user.email) {
      throw new Error("faild");
    }

    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};
//7
export const fibonacci = (numsArr: number[]) => {
  if (numsArr[0] !== 0 || numsArr[1] !== 1) return false;
  for (let i = 2; i < numsArr.length; i++) {
    if (numsArr[i] !== numsArr[i - 1] + numsArr[i - 2]) {
      return false;
    }
  }
  const nextNum = numsArr[numsArr.length - 1] + numsArr[numsArr.length - 2];
  return nextNum;
};
