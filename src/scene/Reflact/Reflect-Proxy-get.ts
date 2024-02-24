/**
 * @description 举例Reflect操作get内部方法应用
 */
function exampleReflectProxy() {
  const obj = {
    a: 1,
    b: 2,
    get c() {
      return this.a + this.b
    }
  }

  const proxyObj = new Proxy(obj, {
    get(target, key) {
      console.log('proxy read:', key)
      return target[key]
    }
  })

  const proxyReflectObj = new Proxy(obj, {
    get(target, key) {
      console.log('proxy-Reflect read:', key)
      return Reflect.get(target, key, proxyReflectObj)
    }
  })

  console.log('-----------举例Reflect操作get内部方法应用-----------')

  proxyObj.c
  // 使用Reflect将获取值操作绑定的this更改，改为代理对象，于是访问a b时才会也走代理
  proxyReflectObj.c
}

export default exampleReflectProxy
