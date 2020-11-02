module.exports=(sequilize,type)=>{
    return sequilize.define('cities',{
        name:type.STRING
    })
}