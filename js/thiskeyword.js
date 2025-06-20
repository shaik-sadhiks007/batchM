

console.log('js is started')


// this ---- it will represent the scope

var a = 5

console.log(a)

console.log(this.a,'a in this')


var obj = {
    name : 'sadhik',
    x :  function () {
        console.log(name,"name in the obj")
        console.log(this.name,'this in obj')
    }
}

obj.x()



console.log('js is ended')