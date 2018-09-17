export const hi = () => {
  console.log('user hi service.');
  return Promise.resolve('Service from User in /services/user.js');
}