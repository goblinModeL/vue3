

try {
    // 可能引发异常的代码
    const result = 10 / 'o'; // 除以0会引发异常
    console.log(result);
} catch (error) {
    // 异常处理代码
    console.log('发生了一个错误：', error.message);
} finally {
    console.log('不管有没有发生异常，我都会执行')
}
