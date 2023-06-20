"use strict"

function makePopcorn(harvest) {
    return Promise.resolve(`🌾 => ${harvest}`);
}
function cooking(cook) {
    return Promise.resolve(`${cook} => 🔥`);
};
function finish(end) {
    return Promise.resolve(`${end} => 🍿`)
}

function Test(item) {
    makePopcorn(item)
        .then(cooking)
        .then(finish);
};

async function UsePromise(text) {
    let item;
    try {
        item = await makePopcorn(text);
    } catch {
        // item;
    };
    const cook = await cooking(item);
    return finish(cook);
};

UsePromise("dsad")
    .then((list) => console.log(list))


/* async function Use(item) {
    const start = await makePopcorn(item);
    const cook = await cooking();
    const end = await finish();
    return start + cook();
};
*/
