# JMeter 应用指南

Jmeter 是一款使用 Java 开发的、开源的，测试工具， 主要用来做功能测试和性能测试（压力测试/负载测试）.

它包括对 HTTP(S), JDBC, JMS, FTP, LDAP,TCP，本机调用等协议的支持，也可以与用户编写的代码轻松扩展。

## 运行原理

1. 通过线程组来驱动多个线程的方式运行。
2. 运行在Jvm虚拟机上。
3. 可以进行分布式测试。（分为控制机和负载机）
  - 控制机：运行负载测试、管理远程多台负载机
  - 负载机：运行负载测试、向控制机发送测试结果。
    - 具体运行逻辑：a、启动Agent ——> b、控制机连接负载机 ——> c、控制机发送运行指令 ——> d、 负载机运行并回传测试结果 ——> e、控制机收集测试结果

## 测试计划

元件：可以理解为每一个菜单。如THHP请求、响应断言。元件组：可以理解为同一类型菜单的集合。如取样器、断言

1. 取样器（Sampler）：模拟用户的请求操作。如HTTP请求、WebService请求、Java请求等。

2. 断言（检查点）：验证结果的正确性。如响应断言。

3. 监听器：收集测试结果信息。如查看结果树、聚合报告。
   - 下面的4、5、6是为取样器提供各种所需要的数据。
4. 前置处理器：在请求发送前做的环境及参数的准备。

5. 配置元件：提供预备的数据等。如CSV、函数助手。

6. 后置处理器：处理服务器的返回结果。通常用正则进行关联。

7. 逻辑控制器：控制多个请求发送的循环次数及顺序等。

8. 定时器：控制多个请求发送的时间频次。

9. 线程组：模拟大量用户负载运行场景。

组成关系：

1.脚本中最多只能有一个测试计划。
2.测试计划中至少要有一个线程组。
3.线程组中至少要有一个取样器。
4.线程组中至少要有一个监听器。

## 参考资料

- [Jmeter 官网](https://jmeter.apache.org/)
- [Jmeter Github](https://github.com/apache/jmeter)
- [Jmeter 性能测试入门](https://www.cnblogs.com/TankXiao/p/4045439.html)