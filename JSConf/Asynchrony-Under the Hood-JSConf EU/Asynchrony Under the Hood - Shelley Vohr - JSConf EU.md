# Asynchrony: Under the Hood - Shelley Vohr - JSConf EU

- basic principles of asynchorny
- the different methodologies and nuances of what exactly differentiates them  
- compare over the spectrum of options to discuss situations require which approaches

> 异步就是现在和之后发生的一个关系,以及用代码去管理这种关系的方案

也就是说同步问题和异步问题,其实也是一种当前资源的管理方式而已,不管 Promise, 还是 Async/Await ,又或者所谓的事件循环,说到这个点,因为 js 是单线程,所以出现了需要这一堆处理方案. 

👇👇👇👇向下面这种看着一时的回调逻辑的东西


```javascript
doA(()=>{
    doB()
    doC(()=>{
        doD()
    })
    doE()
})
doF()
```

在看代码的时候不得不跳来跳去的看
