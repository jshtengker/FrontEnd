import ambilDataUserAsnyc from "./asyncAwait.js";
import ambilDataUser from "./fetch.js";
import helloWorld from "./helloWorld.js";

async function messages(){
    const msg = await helloWorld();
    console.log(msg);
}
messages();
ambilDataUserAsnyc();
ambilDataUser();



