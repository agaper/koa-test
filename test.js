// const fn = async () => {
//   return '1234';
// }

// fn().then((res) => {
//   console.log('in then callback ', res);
// });

// console.log( fn(), typeof fn() ); 

let p = new Promise((resolve, reject) => {
  resolve(11);
  reject(333);
});

const fn = async () => {
  const res = await p.catch();
  console.log('in fn function ', res);
}

fn();