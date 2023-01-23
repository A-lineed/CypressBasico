it("Sem testes ainda"), () => {

}

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(15);
        }, 1000)
    })

}

const system = () => {
    console.log('init');
    getSomething().then(some => {
        console.log(`Something is ${some}`)
        console.log('end')

    })

}

system();