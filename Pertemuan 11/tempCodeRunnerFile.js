const consumePromise = async () => {
 try{
    let result = await newPromise;
    console.log(result);
 } catch (error){
    console.log(error);
 } finally {
    console.log("always ");
 }
}
consumePromise();