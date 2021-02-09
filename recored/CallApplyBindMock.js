// 模拟symbol
function symbolMock(obj) {
    var unique = '00' + Math.random();
    if(obj.hasOwnProperty(unique)){
        arguments.callee(obj);
    }else{
        return unique;
    }
}
// 模拟apply
Function.prototype.applyMock = function(context) {
    context = context || window;
    const args = arguments[1]; // 获取数组参数
    const fn = symbolMock(context);
    context[fn] = this; // 上下文中绑定方法
    if(!args){  // 无参数时直接执行函数
        return context[fn]();
    }
    let funStr = 'context[fn]('; // 拼装函数以及参数
    for(let i=0; i < args.length; i++){
        funStr += i === length - 1 ? args[i] : args[i] + ','
    }
    funStr += ')';
    const returnVal = eval(funStr); // 执行对象调用方法
    delete context[fn]; // 删除方法
    return returnVal;
}
// 模拟call
Function.prototype.callMock = function(context) {
    // 用apply实现call
    return this.applyMock([].shift.applyMock(arguments), arguments)
}
// 模拟bind
Function.prototype.bindMock = function(context) {
    const that = this;
    const Fun = function (){}
    const args = [].slice.callMock(arguments,1);
    const bound = function() {
        return that.applyMock(context,args);
    }
    bound.prototype = new Fun();
    return bound;
}
// 模拟new
Function.prototype.newMock = function(construct, ...arg) {
    const newObj = Object.create(construct.prototype);
    construct.call(newObj, ...arg);
    return newObj;
}