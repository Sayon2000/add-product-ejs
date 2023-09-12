
const fs = require('fs')
const path = require('path')

const file = path.join(path.dirname(require.main.filename) , 'data' , 'products.json')

const getProducts = ()=>{
    return new Promise( (resolve , reject ) =>{

        fs.readFile(file , (err , data)=>{
        if(err)
            resolve([])
        resolve(JSON.parse(data))
        
    })
})
}

module.exports = class Product{

    constructor(t){
        this.title = t;
    }
    save(){
getProducts().then(products =>{


           products.push(this)
           fs.writeFile(file , JSON.stringify(products) , (err)=>{
            if(err)
                console.log(err)

           })
        })
    

}
    static fetchAll(){
        return getProducts()
    }



}