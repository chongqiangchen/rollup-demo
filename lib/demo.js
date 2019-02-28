import _ from './util';

class Test {
  constructor(name,...args){
    this.name = name;
    if(_.isArray(args[0])){
      console.log('-------测试数组:' + args[0])
    }
  }
  print(){
    // console.log(this.name);
    return this.name
  }
}

export default Test

