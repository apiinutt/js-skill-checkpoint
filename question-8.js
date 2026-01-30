// // Question #8: Fetching User List from Server

// // - ให้ Fetch ข้อมูล User จาก Server ของ Jsonplaceholder ด้วย Built-in `fetch` Function
// // - โดยกำหนดให้ Endpoint ในการ Fetch ข้อมูล User เป็น `https://jsonplaceholder.typicode.com/users`
// // - จากนั้น ให้แปลงโครงสร้างข้อมูลที่ได้จาก Server ให้เป็น Array ของชื่อ User แล้วเก็บไว้ใน Variable ชื่อว่า `newUsers`
// // - แล้วให้ Log ดู Value ของ `newUsers` มาแสดงบนหน้าจอ Console
// // - ผลลัพธ์ที่แสดงบน Console จะเป็น

// // ```jsx
// // [ 'Leanne Graham', 'Ervin Howell', 'Clementine Bauch',
// // 'Patricia Lebsack', 'Chelsey Dietrich', 'Mrs. Dennis Schulist',
// // 'Kurtis Weissnat', 'Nicholas Runolfsdottir V', 'Glenna Reichert', 'Clementina DuBuque' ]
// // ```

// // เริ่มเขียนโค้ดตรงนี้



let getUserList = () => {
     return fetch('https://jsonplaceholder.typicode.com/users')
 }
 async function dashBoard () {
     const userList = await getUserList()
     const newUsersall = await userList.json()
     const newUsers = newUsersall.map((newUsersall) => newUsersall.name)
     console.log(newUsers)
 }

 dashBoard()


// import https from 'https';

// const getUserList = () => {
//   return new Promise((resolve, reject) => {
//     https.get('https://jsonplaceholder.typicode.com/users', (res) => {
//       let data = '';

//       res.on('data', chunk => {
//         data += chunk;
//       });

//       res.on('end', () => {
//         try {
//           resolve(JSON.parse(data));
//         } catch (err) {
//           reject(err);
//         }
//       });

//     }).on('error', err => {
//       reject(err);
//     });
//   });
// };

// async function dashBoard() {
//   try {
//      const newUsersall = await getUserList()
//      const newUsers = newUsersall.map((newUsersall) => newUsersall.name)
//      console.log(newUsers)
//   } catch (err) {
//     console.error(err);
//   }
// }

//  dashBoard();
