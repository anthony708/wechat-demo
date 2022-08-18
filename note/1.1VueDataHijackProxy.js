// Vue数据劫持代理

// 模拟 Vue 中 data 选项
let data = {
  username: 'curry',
  age: '33'
}

// 模拟组件的实例
let _this = {

}

// 利用 Object.defineProperty()
for (let item in data) {
  // console.log(item, data[item])
  Object.defineProperty(_this, item, {
    //get: 用来获取扩展属性值, 当获取该属性值的时候调用 get 方法
    get() {
      console.log('get()');
      return data[item]
    },
    //set: 监视扩展属性, 只要已修改就调用
    set(newValue) {
      console.log('set', newValue);
      data[item] = newValue;
    }
  })
}

console.log(_this);
// 通过 Object.defineProperty的 get 方法添加的扩展属性不能直接用 对象.属性 修改
_this.username = 'wade';
console.log(_this.username);