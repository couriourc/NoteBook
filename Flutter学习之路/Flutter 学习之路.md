# Flutter 学习之路

`Flutter`是 `Google` 于 2015 年 5 月 3 日推出的免费开源跨平台开发框架，可以快速在`iOS`和`Android`上构建高质量的原生用户界面。`Flutter`旨在帮助开发者使用一套代码开发高性能、高稳定性、高帧率、低延迟的`Android`和`iOS`应用。`Flutter`使用的是 `Google` 自己开发的网络编程语言——`Dart语言`。

## 特点

### 快速开发

`Flutter`的热重载能力帮助开发者快捷方便的试验、重构UI、添加特性和修复bug。在仿真器、模拟器、ios、android硬件上体验亚秒级的重载，而不会丢失状态。

### 跨平台

`Flutter`基于图像绘制引擎进行渲染，在不同平台下绘制效果绝对一致，能做到真正的跨平台。

### 绚丽UI

通过`Flutter`内建的、漂亮的、有质感设计的`Cupertino`（ios-flavor）小工具、丰富的动画API，平滑的自然滚动和平台感知，让用户感受UI设计的快乐。

### 响应式

通过Flutter的现代响应式(Reactive)框架、丰富的平台布局、基础组件，能够轻松的构建用户界面。使用强大而灵活的API解决2D、动画、手势、效果等难题。

### 访问原生功能

通过`平台api`、`第三方sdk`和`原生代码`，使应用变得生动。`Flutter`可以重用现有的`java`、`swift`和`Objc`代码，并在`iOS`和`Android`上访问原生特性和`SDK`。

### 目前各种跨平台方案的对比

开发`APP`应用，如需要同时兼容`iOS`和`Android`两种平台，有两种技术选择：

1、走原生开发路线，把界面和逻辑在不同平台分别实现；

2、用同一套代码兼容多个平台，但这往往意味着运行速度和产品体验的损失。

除了原生外，目前跨平台技术一般是混合开发，如采用 `H5`、`React Native`、`Weex`、小程序等技术实现跨平台应用。不过这些混合开发，或多或少都能感觉到UI卡顿和体验不流畅，并且开发和学习成本非常高，有各自的局限性。

`Flutter`的出现，为开发者提供了一套两全其美的解决方案：既能用原生代码直接调用的方式来加速图形渲染和 UI 绘制，又能同时运行在两大主流移动操作系统上，并且体验和流畅度和原生基本一致、开发效率非常高、学习难度和成本低。

![跨平台方案的对比](./Flutter%20%E5%AD%A6%E4%B9%A0%E4%B9%8B%E8%B7%AF.assets/1596686404136752.jpg)

从上面的对比可以看出，`Flutter` 优势明显：高体验度、高开发效率、低学习成本、高可扩展性。未来 `Google Flutter`团队还将会使 `Flutter` 支持 `PC` 和 `Web` 的跨平台开发，实现真正全平台。 针对`Flutter`的跨平台特性，与`react native`、`weex`做对比可以发现，其性能碾压后两者，采用自带`Skia`绘制引擎，性能堪比原生。

## 关于Dart(如果学习了Typescript 会轻松很多)

Dart 是谷歌开发的计算机编程语言，被应用于 Web、服务器、移动应用和物联网等领域的开发。Dart 是面向对象、类定义的、单继承的语言。它的语法类似C语言，可以转译为 JavaScript，支持接口(interfaces)、混入(mixins)、抽象类(abstract classes)、具体化泛型(reified generics)、可选类型(optional typing)和sound type system。

### Tips

#### 多态

每个类都有同名、同参数表的虚函数 Print（每个 Print 函数声明时都加了 virtual 关键字）。根据多态的规则，对于语句“pa->Print()”，由于 Print 是虚函数，尽管 pa 是基类 A 的指针，编译时也不能确定调用的是哪个类的 Print 函数。当程序运行到该语句时，pa 指向的是哪个类的对象，调用的就是哪个类的 Print 函数。是同一个行为具有多个不同表现形式或形态的能力。 多态就是同一个接口，使用不同的实例而执行不同操作，通过基类的引用调用虚函数的语句也是多态的。即，通过基类的引用调用基类和派生类中同名、同参数表的虚函数时，若其引用的是一个基类的对象，则被调用是基类的虚函数；若其引用的是一个派生类的对象，则被调用的是派生类的虚函数。

1. **允许将子类类型的指针赋值给父类类型的指针，同一个函数调用会有不同的执行效果。**
2. **子类的实例赋值给父类的引用。**
3. **多态就是父类定义一个方法不去实现，让继承它的子类去实现，每个子类有不同的表现。**

```dart
abstract class Object1{
someting();
someting2();
} 
// 也就相当于一个interface 或者说叫做一个模板，但是在之后的子类去重写，这样的话，每一个子类就可以有不同的能力特征
class one extends Object1{
@override
someting1(){

}
@override
someting2(){

}

}
```



####  封装

将描述事物的数据和操作封装在一起，形成一个类；被封装的数据和操作只有通过提供的公共方法才能被外界访问（封装隐藏了对象的属性和实施细节），私有属性和方法是无法被访问的，表现了封装的隐藏性，增加数据的安全性。


1. **可以理解为多组不同的操作进行封闭化处理**
2. **可以抽象为类，并实现，也可以为函数封装**
3. **封装就是将不同的事物或者数据放在一起**

```dart
class Animal_Behave{
Dog_Eat(){

}
Cat_Eat(){

}
} 
```

#### 继承

若一个新类继承了原有类的属性和方法，并增加了自己的新属性和新方法，称之为派生类，派生类就继承了原有类；当子类继承父类的时候，子类不继承父类的构造函数，但是子类生成对象时(new Student())默认会先执行父类无参的构造函数（实例化对象，让子类可以使用父类的成员），当父类定义有参构造函数时，无参构造函数就会被干掉，这时子类会报错，解决方案是1>在父类重新定义无参构造函数 2>子类的构造函数：base()，调用有参构造函数，函数体中只需初始化特有属性；如果不想执行父类的构造函数，可以通过参数的不同调用父类一个空的构造函数。

1. **可以理解为属性共享，子类可以继承父类的属性和一些方法**
2. **子类可以自己增加自己的新方法**
3. **子类的方法是指重新定义的方法，而不是重写父方法**

```dart
class Parent{
var money = 100;
}
class Children extends Parent{
spent_money(){}
}
const Children1 = new Children();
print(Children1.money); // 100

```

### 类型

---

#### Dart

#### 基本类型

##### Number

###### int

- 整数值不大于64位， 具体取决于平台。 在 Dart VM 上， 值的范围从 $-2^{63}$ 到 $2^{63}-1$. 

- Dart 被编译为 JavaScript 时，使用**JavaScript numbers** , 值的范围从 ${-2}^{53}$ 到 $2^{53} - 1$.

###### double

- 64位（双精度）浮点数，依据 IEEE 754 标准。

IEEE 754规定了四种表示浮点数值的方式：单精确度（32位）、双精确度（64位）、延伸单精确度（43比特以上，很少使用）与延伸双精确度（79比特以上，通常以80位实现）。只有32位模式有强制要求，其他都是选择性的。大部分编程语言都有提供IEEE浮点数格式与算术，但有些将其列为非必需的。例如，IEEE 754问世之前就有的C语言，有包括IEEE算术，但不算作强制要求（C语言的float通常是指IEEE单精确度，而double是指双精确度）。

int 和 double 都是 num. 的亚类型。 num 类型包括基本运算 +， -， /， 和 *， 以及 abs()， ceil()， 和 floor()， 等函数方法。 （按位运算符，例如 >>，定义在 int 类中。） 如果 num 及其亚类型找不到你想要的方法， 尝试查找使用 dart:math 库。

和javascript 中一样所有的数字也是对象，有内置的Api

![Object is the parent of num, which is the parent of int and double](Flutter%20%E5%AD%A6%E4%B9%A0%E4%B9%8B%E8%B7%AF.assets/number-class-hierarchy-66b542e875f2d27cbf3b7132d2fc5ead381347847b771d6a4a53ac38dc4a6175.svg)

![Implementation classes vary by platform; for JavaScript, the class that implements int also implements double](Flutter%20%E5%AD%A6%E4%B9%A0%E4%B9%8B%E8%B7%AF.assets/number-platform-specific-24fca9380440f855ec3aa2e44fa2a17834bf38225866ebcea1fbf3e437d619b6.svg)

>需要注意的是，在Dart原生平台中，逻辑表达式的结果，可能会因为类型原因而不同，一下是官网给出的表格，可以看到 0.0 != -0.0

| Expression                                    | Native  | Web     |
| --------------------------------------------- | ------- | ------- |
| `1.0 == 1`                                    | `true`  | `true`  |
| `identical(1.0, 1)`                           | `false` | `true`  |
| `0.0 == -0.0`                                 | `true`  | `true`  |
| `identical(0.0, -0.0)`                        | `false` | `true`  |
| `double.nan == double.nan`                    | `false` | `false` |
| `identical(double.nan, double.nan)`           | `true`  | `false` |
| `double.infinity == double.infinity`          | `true`  | `true`  |
| `identical(double.infinity, double.infinity)` | `true`  | `true`  |



> 鉴别类型可以通过is 来判断，一下是官网给的表，其实如果有python 基础，会发现这些都似曾相识

| Expression               | Native   | Web      |
| ------------------------ | -------- | -------- |
| `1 is int`               | `true`   | `true`   |
| `1 is double`            | `false`  | `true`   |
| `1.0 is int`             | `false`  | `true`   |
| `1.0 is double`          | `true`   | `true`   |
| `(0.5 + 0.5) is int`     | `false`  | `true`   |
| `(0.5 + 0.5) is double`  | `true`   | `true`   |
| `3.14 is int`            | `false`  | `false`  |
| `3.14 is double`         | `true`   | `true`   |
| `double.infinity is int` | `false`  | `true`   |
| `double.nan is int`      | `false`  | `false`  |
| `1.0.runtimeType`        | `double` | `int`    |
| `1.runtimeType`          | `int`    | `int`    |
| `1.5.runtimeType`        | `double` | `double` |

二进制的计算，也就是<< >> 这些

| Expression                         | Native       | Web          |
| ---------------------------------- | ------------ | ------------ |
| `-1 >> 0`                          | `-1`         | `4294967295` |
| `-1 ^ 2`                           | `-3`         | `4294967293` |
| `math.pow(2, 32).toInt()`          | `4294967296` | `4294967296` |
| `math.pow(2, 32).toInt() >> 1`     | `2147483648` | `0`          |
| `(math.pow(2, 32).toInt()-1) >> 1` | `2147483647` | `2147483647` |

在Dart 中的数字有一个字面表达，也就是它为什么样子的类型。在转化为字符的时候，也会是那个字面,需要注意越界问题

| Expression        | Native `toString()` | Web `toString()`           |
| ----------------- | ------------------- | -------------------------- |
| `1`               | `"1"`               | `"1"`                      |
| `1.0`             | `"1.0"`             | `"1"`                      |
| `(0.5 + 0.5)`     | `"1.0"`             | `"1"`                      |
| `1.5`             | `"1.5"`             | `"1.5"`                    |
| `-0`              | `"0"`               | `"-0.0"`                   |
| `math.pow(2, 0)`  | `"1"`               | `"1"`                      |
| `math.pow(2, 80)` | `"0"`               | `"1.2089258196146292e+24"` |

内置属性：

内置方法：

​	int.parse 字符串转整型

​	double.parse 字符串转double

​	[double].toStringAsFixed // [double]代表任意的一个double型的数字

​	

##### String

```dart
String a = "string";
String a = '''
保留回车
''';//其实和Python 真的hei像好吧

```

内置属性：

- length
- isEmpty

内置方法：

- [String].substring 字符串截取方法

- [String].split 懂得都懂 ,注意扩展了，也就是加入了正则匹配型的拆分

```dart
String a = "ab";
a.split(new RegExp(r'a*'));
```


- [String].splitMapJoin 查询，加上替换

```dart
 String a8 = "a b,c";
    String a7 = a8.splitMapJoin(",",//查询“，”,用onMatch的返回值替换“，”用onNonMatch的返回值替换其他
        onMatch: (Match match) {
          return "a";
        }, onNonMatch: (String nonMatch) {
          return "b";
        });
    print(a7);//bab    a b,c  =>   bab
```

- [String].startWith 判断是否包含什么为开始

- 当然还有什么contains ,endWith这些就比较见名知意 ，返回的是bool型

- [string].replaceAll 替换

- ..replaceFirst

- ..replaceRange

- ..replaceAllMapped 字符串中的filter 加替换 Map

    ---

    以上都比较见名知意



- [String].indexOf 字符串查找，这一类基本就是和js中的类似

- 转换大小写，去除空格，基本和js 类似

-  \+ \*  都和Python 的像，可惜没有直接的切片操作，

- StringBuffer strBuf = new StringBuffer(); 字符串缓冲区



----

其实字符串中有很多js和Python 的影子，一般IDE也都会有提示，所以也不用单独去记忆

##### Boolean

这个只说一点 只有true 为true ，否则不行

```dart
bool B = true;
```



##### List

- 一、数组的定义
1、定义固定类型数组
2、定义固定长度数组
3、定义混合类型数组
二、数组的常用属性
1、获取数组长度 - length
2、获取数组第一个元素 - first
3、获取数组最后一个元素 - last
4、获取倒序迭代器 - reversed
5、判断数组是否为空 - isEmpty
6、判断数组是否为非空 - isNotEmpty
三、数组的常用方法
1、添加元素 - add
2、批量添加 - addAll
3、指定位置添加 - insert
4、指定位置批量添加 - insertAll
5、删除指定值 - remove
6、删除指定索引 - removeAt
7、删除指定范围 - removeRange
8、删除最后一个 - removeLast
9、删除符合条件的所有元素 - removeWher
10、删除所有元素 - clear
11、修改数组中某区间元素为指定值 - setRange
12、修改指定索引后的数组值 - setAll
13、替换 - replaceRange
14、将指定区间替换成某个固定值- fillRange
15、获取某个区间的值- getRange
16、查询指定区间的值- sublist
17、判断数组内是否有满足条件的元素- any
18、判断数组所有元素是否都满足设定条件 - every
19、判断数组是否包含某个元素 - contains
20、获取满足条件的第一个元素 - firstWhere
21、获取满足条件的最后一个元素 - lastWhere
22、从制定位置开始，获取满足条件的第一个元素的索引 - indexWhere
23、获取满足条件的最后一个元素的索引(倒叙查询) - lastIndexWhere
24、从指定位置开始，获取指定值的索引 - indexOf
25、从指定位置开始，倒叙获取指定值的索引 - lastIndexOf
26、获取唯一元素 - singleWhere
27、将数组用指定字符拼接成字符串 - join
28、数组去重 - toSet
29、数组遍历 - forEach
30、按指定条件返回Iterable - map
31、累加器 - reduce
32、排序 - sort

-----
以上方法都比较常用和熟悉，用着用着就熟悉了

##### Map

### 一，概述　　　　

通常来讲，Map是一个键值对相关的对象，键和值可以是任何类型的对象。每个键只出现一次，而一个值则可以出现多次。映射是动态集合。 换句话说，Maps可以在运行时增长和缩小。 dart:core库中的Map类提供了相同的支持。

### 二，声明

- 不指定泛型（普通方式,不指定任何类型，这时testMap中K-V的类型均是dynamic ）


```dart
    //直接赋值
    var map1 = {'aa':'aaa','bb':22,'cc':true}; 
    Map map2 = {'a':'a1','b':'b1'};  
```

```dart
//间接赋值
    var map3 = new Map(); 
    map3['aa'] = 'aaa'; 
    Map map4 = new Map(); 
    map4['a'] = 'aaa';
```



- 指定泛型(下面的例子表示Map的类型为<String,String>,初始化Map时map的类型为<String,String> ,如果类型不匹配或者不兼容就会导致程序crash)


```dart
    //直接赋值
    var map1 = <String,String>{'aa':'aaa','bb':'22','cc':'333'};
    Map map2 = <String,String>{'a':'a1','b':'b1','c':'c1'};

    //间接赋值
    var map3 = new Map<String,String>();
    map3['aa'] = 'aaa';
    Map map4 = new Map<String,String>();
    map4['a'] = 'a1';
```

- 通过复制的形式


```dart
  /**
   * 不使用类型操作符,从另一个map中初始化新的map，此时新的map中含有另一个map中的资源
   */
  Map map1 = {'a':'a1','b':'b1','c':'c1'};
  Map map2 = Map.castFrom(map1);
  print(map2);

  /**
   * 强制使用指定类型初始化map
   * 下面的例子表示testMap1的类型为<num,String>,初始化Map时castFrom中map的类型为<int,String>
   * 如果类型不匹配或者不兼容就会导致程序crashh 
   */
  Map<int,String> map3 = {1:'a',2:'b',3:'c'};
  Map map4 = Map.castFrom<num,String>(map3);//这行代码会出错，主要原因是testMap是<dynamic,dynamic>类型的，但是这里需要的是<int,String>类型的map
  Map map5 = Map.castFrom<String,String>(map3);//这行代码也会出错，因为无法将<String,String>类型的map转换为<int,String>类型的map
  Map map6 = Map.castFrom<int,String>(map3); //正确
```




- 创建不可变的Map

```dart
Map map6 = const {'one':'Android','two':'IOS','three':'flutter'};
```

- 根据list所提供的key value来创建map；

```
List<String> keys = ['one','two']; 
List<String> values = ['Android','IOS']; 
Map map9 = Map.fromIterables(keys, values); 
print(map9); 
```

### 三，属性

```dart
Map<String,int> map6 = {"a":1,"b":2};
```

-   length

```
print(map6.length);//2  长度
```

- isNotEmpty

```dart
print(map6.isNotEmpty);//true  是否不为空
```

- isEmpty

```dart
print(map6.isEmpty);//false   是否为空   
```

- keys

```dart
print(map6.keys);//(a, b)   key的集合
```

- values


```
print(map6.values);//(1, 2)  value的集合
```

- entries


```dart
print(map6.entries);//(MapEntry(a: 1), MapEntry(b: 2))   map迭代的键值对集合 
```

### 四，方法

- 增

- 新增一个key-value　　
```dart
     Map<String,int> map7 = {"a":1,"b":2,"c":3,"d":4,"e":5};
    //新增一个key value
     map7["f"] = 6;//新增一个不存在的key
     print(map7);//{a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}　
```

- 改

- 修改一个key的value

```dart
    Map<String,int> map8 = {"a":1,"b":2,"c":3,"d":4,"e":5};
    map8["a"] = 11;
    print(map8);//{a: 11, b: 2, c: 3, d: 4, e: 5}
```

- update() 对指定的key的value做出修改



```dart
     Map<String,int> map23 = {"a":1,"b":2,"c":3};
     int result3 = map23.update("a", (value)=>(value*2));//key存在  根据参数函数修改其值
     print(result3);//2
     print(map23);//{a: 2, b: 2, c: 3}
```

```dart
     int result4 = map23.update("d", (value)=>(value*2));//key不存在  报错
     int result4 = map23.update("d", (value)=>(value*2),ifAbsent: ()=>(10));//key不存在  但有ifAbsent参数 返回ifAbsent函数的值  并添加到map中
     print(result4);//10
     print(map23);//{a: 2, b: 2, c: 3, d: 10}
```


- updateAll() 根据参数函数的规则，批量修改map


```dart
    Map<String,int> map24 = {"a":1,"b":2,"c":3};
    map24.updateAll((String key,int value){
      return value*2;
    });//
    print(map24);//{a: 2, b: 4, c: 6}

    Map<String,int> map25 = {"a":1,"b":2,"c":3};
    map25.updateAll((String key,int value){
      if(key=="a"){return 10;}
      if(key=="b"){return 20;}
      return value*2;
    });//
    print(map25);//{a: 10, b: 20, c: 6}
```


- 删

- remove() 删除一个key

```dart
    Map<String,int> map9 = {"a":1,"b":2,"c":3,"d":4,"e":5};
    map9.remove("b");
    print(map9);//{a: 11, c: 3, d: 4, e: 5}
```



- removeWhere() 根据条件批量删除

```dart
    Map<String,int> map10 = {"a":1,"b":2,"c":3,"d":4,"e":5};
    map10.removeWhere((key,value)=>(value>3));//删除掉 符合参数函数的keyvalue对
    print(map10);//{a: 1, b: 2, c: 3}
```

- 查

- containsKey() 是否包含key　　

```dart
       Map<String,int> map11 = {"a":1,"b":2,"c":3,"d":4,"e":5};
       print(map11.containsKey("a"));//true   是否包含key
       print(map11.containsKey("aa"));//false  是否包含key
```

- containsValue() 是否包含value值

```dart
   Map<String,int> map17 = {"a":1,"b":2,"c":3};
   print(map17.containsValue(1));//true
   print(map17.containsValue(4));//false
```

- forEach() 遍历


```dart
    Map<String,int> map12 = {"a":1,"b":2,"c":3,"d":4,"e":5};
    map12.forEach((String key,int value){
     print("$key  $value");
        /*
        a  1
        b  2
        c  3
        d  4
        e  5
      */
   
    });
```


- 遍历时修改value值



```dart
    Map<String,int> map13 = {"a":1,"b":2,"c":3};
    map13.forEach((String key,int value){
    print("$key  $value");
    map13["c"] = 4;
      a  1
      b  2
      c  4
    });

```
遍历时，新增或删除key  都会报错


```dart
Map<String,int> map14 = {"a":1,"b":2,"c":3};
map14.forEach((String key,int value){
  print("$key  $value");
  map14["d"] = 4;//  报错
  map14.remove("a");//  报错
});
```

- 其它

- map() 遍历每个元素 根据参数函数，对keyvalue做出修改，可转换成其他泛型的Map

```dart
    Map<String,int> map19 = {"a":1,"b":2,"c":3};
    Map<int,String> map20 = map19.map((String key,int value){
      return new MapEntry(value, key);
    });
    print(map20);//{1: a, 2: b, 3: c}
```

- clear() 清空map

```dart
    Map<String,int> map15 = {"a":1,"b":2,"c":3};
    map15.clear();
    print(map15);//{}
```

- addAll() 整体合并另一个map 泛型要一致

```dart
    Map<String,int> map16 = {"a":1,"b":2,"c":3};
    Map<String,int> other = {"a":1,"c":4,"d":7};
    map16.addAll(other);//key相同时value值后者覆盖前者，前者不存在时则添加进来
    print(map16);//{a: 1, b: 2, c: 4, d: 7}
```

- addEntries() 合并两个map 如果key有重复，被合并的map的value覆盖前者

```dart
    Map<String,int> map26 = {"a":1,"b":2,"c":3};
    Map<String,int> map27 = {"a":1,"b":4,"d":3,"e":5};
    map26.addEntries(map27.entries);
    print(map26);//{a: 1, b: 4, c: 3, d: 3, e: 5}
```

- putIfAbsent() 存在key就获取值，不存在则添加到map 然后返回值

```dart
    Map<String,int> map18 = {"a":1,"b":2,"c":3};
    int result = map18.putIfAbsent("a", ()=>(2));//存在
    print(result);//1   获取key的值
    print(map18);//{a: 1, b: 2, c: 3}   map不变
    int result2 = map18.putIfAbsent("d", ()=>(2));//不存在
    print(result2);//2   获取新的key的value
    print(map18);//{a: 1, b: 2, c: 3, d: 2}   map改变
```



- cast() 泛型类型提升为其父祖类

```dart
    Map<String,int> map21 = {"a":1,"b":2,"c":3};
    Map<Object,Object> map22 = map21.cast();
    map22["d"]=33;
    print(map22);//{a: 1, b: 2, c: 3, d: 33}
```

- 通用方法
List、Set和Map有一些通用的方法。其中的一些通用方法都是来自于类Iterable。List和Set是iterable类的实现。

虽然Map没有实现Iterable, 但是Map的属性keys和values都是Iterable对象。

- 通用属性 isEmpty和 isNotEmpty

```dart
    
    var testSet = Set.from(["a", "b", "c"]);
    var testList = [1, 2, 3, 4];
    var testMap = Map();
    
    print(testSet.isNotEmpty); // true
    print(testList.isEmpty); // false
  	print(testMap.isEmpty); // true
    
    testMap.addAll({
   "zh": "china",
    "us": "usa"
    });
```

- forEach方法

 ```dart
    testList.forEach((num) => print("I am num ${num}")); // I am num 1 等等
    testMap.forEach((k, v) => print("${k} is ${v}")); // zh is china 等等
 ```

- iterable提供了 map 方法，来处理每一个集合中的对象，并返回一个结果

```dart
    var setIter = testSet.map((v) => v.toUpperCase());
    print(setIter); // (A, B, C)
```

- 可以用toList和toSet将结果转换成列表或者集合

```dart
    var listIter = testSet.map((v) => v.toUpperCase()).toList();
    print(listIter); // [A, B, C]
```

- iterable提供了where方法，来过滤集合中的值，并返回一个集合

```dart
    var whereList = testList.where((num) => num > 2).toList();
    print(whereList); // [3, 4]。如果不用toList()则返回(3, 4)
```

- iterable提供了any方法和every方法，来判断集合中的值是否符合条件，并返回bool

```dart
	print(testList.any((num) => num > 2)); // true
```

##### Set 

##### Rune

##### Symbol

##### Null

不确定的类型的默认值，默认为null,

##### undefined

你在想屁吃，这个在js中就是个莫名奇妙的东西，在Dart中Null，都被通缉警告了，还想再放出undefind.呵呵哒 {\~(-)\~}

#### 类型推断

### 类

### 内建类型

### 变量

### Typedefs

### 可调用类与Isolates

### 函数基础

fn(){}

()=>{}

### 运算符

### 元数据



## 一个观念：在 Flutter 里，所有事物都是 widget



![Node tree](./Flutter%20%E5%AD%A6%E4%B9%A0%E4%B9%8B%E8%B7%AF.assets/sample-flutter-layout-46c76f6ab08f94fa4204469dbcf6548a968052af102ae5a1ae3c78bc24e0d915.png)





