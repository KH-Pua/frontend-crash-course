// 1) 顯示一個訊息：使用 Promise，在延遲 1 秒後，在控制台打印出 "Hello, world!"。

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = "Hello World!";
        resolve(data);
    }, 1000)
});
myPromise.then((data) =>{
    console.log(data);
});

//2.  延遲執行：使用 async/await，創建一個函數，該函數將延遲 3 秒後返回一個 Promise。然後使用 await 來等待 Promise 完成，並在控制台打印出 "Delay complete!"。

async function delayFunction() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Delay complete!")
        }, 3000);
    });
    let result = await promise;
    console.log(result);
}

delayFunction();


//3. 處理錯誤：創建一個 Promise，該 Promise resolve 或 reject。使用 async/await 在控制台打印出相應的訊息，如果 Promise 成功，則打印出 "Promise resolved!"，如果 Promise 失敗，則打印出 "Promise rejected!"。
async function errorHandling(){
    const promise2 = new Promise((resolve, reject) =>{
        resolve ("Promise resolved");
        reject ("Promise rejected");
    });
    const result = await promise2;
    console.log(result);
}
errorHandling();

//4. 順序執行多個 Promise：創建三個 Promise：Promise A 在 2 秒後 resolve，Promise B 在 1 秒後resolve，Promise C 在 3 秒後resolve。使用 Promise 和 async/await，在它們依次解析完成後，在控制台打印出 "All promises resolved!"

async function timeKeeping(){
    console.time("main");

    const p1 = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("Done");
        }, 2000);
    });

    const p2 = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("Done");
        }, 1000);
    });

    const p3 = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("Done")
        }, 3000);
    });

    const [a, b, c] = await Promise.allSettled([p1, p2, p3]);
    if(a.value === b.value && a.value === c.value){
        console.log("All promises resolved!");
    }
    console.timeEnd("main")
}

timeKeeping();

