# NestJs Learning

## 哲学

近年来，感谢 Node.js，JavaScript 已成为前端和后端应用程序的网络“通用语言”。这产生了令人敬畏的项目，如 [Angular](https://angular.cn/)，React 和 Vue，它们提高了开发人员的工作效率，并能够构建快速，可测试和可扩展的前端应用程序。然而，虽然 Node（和服务器端 JavaScript ）存在大量优秀的库，帮助器和工具，但它们都没有有效地解决**主要问题 - 架构**。

Nest 提供了一个开箱即用的应用程序架构，允许开发人员和团队创建高度可测试，可扩展，松散耦合且易于维护的应用程序。

- [第一步](https://www.bookstack.cn/read/nest-6/firststeps.md)
- [控制器](https://www.bookstack.cn/read/nest-6/controllers.md)
- [提供者](https://www.bookstack.cn/read/nest-6/providers.md)
- [模块](https://www.bookstack.cn/read/nest-6/modules.md)
- [中间件](https://www.bookstack.cn/read/nest-6/middlewares.md)
- [异常过滤器](https://www.bookstack.cn/read/nest-6/exceptionfilters.md)
- [管道](https://www.bookstack.cn/read/nest-6/pipes.md)
- [守卫](https://www.bookstack.cn/read/nest-6/guards.md)
- [拦截器](https://www.bookstack.cn/read/nest-6/interceptors.md)
- [自定义装饰器](https://www.bookstack.cn/read/nest-6/customdecorators.md)
- [相关资料](https://www.bookstack.cn/read/nest-6/awesome.md)
- [关于翻译](https://www.bookstack.cn/read/nest-6/about.md)

## 第一步

### 先决条件

请确保您的操作系统上安装了 [Node.js](http://nodejs.cn/download/)**（> = 8.9.0）**。

**一分钟安装 node.js** （支持X86 ARM MIPS 等架构，需要版本管理或者系统为 Raspbian 请直接看 NVM）

#### **windows**

1. [点击下载 Node.js](https://npm.taobao.org/mirrors/node/v12.10.0/node-v12.10.0-x64.msi)
2. 安装Node.js

## 建立

使用 [Nest CLI](https://www.bookstack.cn/read/nest-6/$6-cli?id=overview) 建立新项目非常简单。 只要确保你已经安装了 npm，然后在你的 OS 终端中使用以下命令：

#### **npm**

```shell
  npm i -g @nestjs/cli$ nest new project-name
```

实测：yarn 很久 还有问题

将创建 `project` 目录， 安装node模块和一些其他样板文件，并将创建一个 `src` 目录，目录中包含几个核心文件。

1. `src`
2. `├── app.controller.ts`
3. `├── app.module.ts`
4. `└── main.ts`

|                   |                                                              |
| :---------------- | :----------------------------------------------------------: |
| app.controller.ts |                带有单个路由的基本控制器示例。                |
| app.module.ts     |                      应用程序的根模块。                      |
| main.ts           | 应用程序入口文件。它使用 `NestFactory` 用来创建 Nest 应用实例。 |

# 控制器

控制器负责处理传入的 **请求** 和向客户端返回 **响应** 。

控制器的目的是接收应用的特定请求。**路由**机制控制哪个控制器接收哪些请求。通常，每个控制器有多个路由，不同的路由可以执行不同的操作。

为了创建一个基本的控制器，我们必须使用`装饰器`。装饰器将类与所需的元数据关联，并使 `Nest` 能够创建路由映射（将请求绑定到相应的控制器）。

## 路由

在下面的例子中，我们使用了定义基本控制器所需的 `@Controller('cats')` 装饰器。我们将可选前缀设置为 `cats`。使用前缀可以避免在所有路由共享通用前缀时出现冲突的情况。我们将使用 `@Controller()` 装饰器，这是定义基本控制器所必需的。我们将指定一个路径前缀(可选) `cats`。在 `@Controller()` 装饰器中使用路径前缀，它允许我们轻松对一组相关路由进行分组，并减少重复代码。例如，我们可以选择管理该路由下的客户实体的交互的这部分进行分组 `/customers` ，这样, 我们可以在 `@Controller()` 装饰器中指定路径前缀, 这样我们就不必为文件中的每个路由重新定义前缀。

> cats.controller.t

