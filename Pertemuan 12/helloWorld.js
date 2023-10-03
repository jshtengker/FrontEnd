let helloWorld = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("helloWorld");
        }, 2000)
    });
};
export default helloWorld;
