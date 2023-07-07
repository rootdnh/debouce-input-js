let s = "MEu nome é Djonata";
let value = "Djonata"
let a = s.replace(new RegExp(value, 'gi'), (match)=>{
  return `<strong>${match}</strong>`
});
console.log(a)