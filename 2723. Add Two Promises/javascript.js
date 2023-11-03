/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    
   let arrayResolver = await Promise.all([promise1, promise2])
   return arrayResolver[0] + arrayResolver[1];
   return resultResolver;
};



/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */