// Method decorator to override the sum function
function updateeSum(target: any, key: string, descriptor?: PropertyDescriptor) {
    if (descriptor) {
        descriptor.value = function sum(x: number, y: number) {
            return `The Output of x is ${x} , and y is ${y} is ${x + y}`;
        }
    }
}

class CustumMath {   
    @updateeSum
    sum(x: number, y: number) {
        return x + y;
    }
}

var cm2 = new CustumMath();
console.log(cm2.sum(2, 3)); // Output: "The Output of x is 2 , and y is 3 is 5"