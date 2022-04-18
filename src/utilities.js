export const getNewExpirationTime = f => Date.now() + 15 * 1000;

let nextId = 0;
export const generateId = f => {
   const result = nextId;
   nextId += 1;
   return result;
};
