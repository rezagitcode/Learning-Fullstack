// let name1 = {
//       firstName:"Mahmud",
//       lastName:"Reza"
//   }
//   function printFullName(city, state){
//       console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`);
//   }
  // printFullName.call(name1,"Bangalore","Karnataka");
  // //Polyfill for Function.prototype.call:
  // Function.prototype.myCall = function(...args){
  //   args[0].func = this;
  //   let params = args.slice(1);
  //   args[0].func(...params);
  // }
  // printFullName.myCall(name1,"Bangalore","Karnataka");

  // printFullName.apply(name1,["Bangalore","Karnataka"]);
  // // Polyfill for Function.prototype.apply:
  // Function.prototype.myApply = function(obj,arr){
  // obj.func = this;
  // obj.func(...arr);
  // }
  // printFullName.myApply(name1,["Bangalore","Karnataka"]);

  // let printName = printFullName.bind(name1,"Bangalore");
  // printName("Karnataka");
  // //Polyfill for bind:
  // Function.prototype.myBind = function(...args){
  //  let params = args.slice(1);
  //  args[0].func = this;
  //  return function(...params2){
  //   let params3 = [...params,...params2];
  //   args[0].func(...params3);
  //  }
  // }
  // let printName2 = printFullName.myBind(name1);
  // printName2("Karnataka");