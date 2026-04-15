## Part 1: Theoretical Questions

Submit the solution to this part as `part1.md`.

### [25 points] Question 1.1

1. Explain in simple words the following programming paradigms:
   1. [5 points] Imperative
  Answer: Imperative programming is a style where you provide the computer with a direct, step-by-step list of instructions to follow. You manage the program’s state manually by using variables and loops to dictate exactly how a task should be completed. It functions like a literal recipe, where the execution moves through each command sequentially until the final result is reached.


   1. [5 points] Object Oriented
   Answer: Object-Oriented Programming is a style of coding that organizes software into "objects" that represent real-world things. Each object contains both its own data and the specific actions it can perform, keeping related information bundled together. This approach makes it easier to build and maintain large systems by treating them as a collection of interacting building blocks.


   1. [5 points] Functional
  Answer: Functional programming is a paradigm that avoids changing state or mutable data. It relies on pure functions, which consistently produce the same output for a given input without causing side effects in the rest of the program. Instead of using iterative loops to modify variables, data is transformed by passing it through a series of independent, predictable function calls.


1. [5 points] How does the object oriented paradigm improve over the imperative paradigm?
Answer: Object-Oriented Programming (OOP) improves on the imperative style by grouping data and the logic that uses it into self-contained units called objects. In a purely imperative approach, you often have separate functions and global variables that can get messy and hard to track as a project grows. OOP solves this by "hiding" the data inside the object and only allowing it to be changed through specific actions, which keeps the code organized and prevents different parts of the program from accidentally breaking each other. 


1. [5 points] How does the functional paradigm improve over the object oriented paradigm?
Answer: Functional programming improves on the object-oriented style by focusing on immutability, which just means that once data is created, it never changes. In object-oriented programming, different objects often share and modify the same data, which can lead to confusing bugs when many parts of the program interact at the same time. By using pure functions that only care about their specific input and output, functional programming makes the code much easier to test and follow because there are no hidden side-effects to keep track of.




### [10 points] Question 1.2

Consider the following TypeScript function, which calculates the average price of all discounted products in a given inventory.

```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
  let discountedPriceSum = 0;
  let discountedProductsCount = 0;

  for (const product of inventory) {
    if (product.discounted) {
      discountedPriceSum += product.price;
      discountedProductsCount++;
    }
  }

  if (discountedProductsCount === 0) {
    return 0;
  }

  return discountedPriceSum / discountedProductsCount;
};
```

This function uses an imperative approach with loops and conditional statements.

Refactor the function `getDiscountedProductAveragePrice` to adhere to the Functional Programming paradigm. Utilize the built-in array methods `map`, `filter`, and `reduce` to achieve the same functionality without explicit iteration and conditional checks.
Write the new function under the name `getDiscountedProductAveragePriceFP`.

**Important**: the new function should have the same signature.

**Note**: there are no tests for this question, and it will not be executed. The task here is to write the code in a functional way.

ANSWER: 
```ts
const getDiscountedProductAveragePriceFP = (inventory: Product[]): number => {
let discountedArr= inventory.filter(item => item.discounted===true)
if (discountedArr.length === 0) {
    return 0;
  }
const sum= discountedArr.reduce((curSum,curProduct)=>curSum+curProduct.price,0)
return sum/discountedArr.length;
}; 

```


### [18 points] Question 1.3

Write the most general type for each expression, using type variables where applicable.
Guidelines:

- Arrays must be homogeneous.
- Arithmetic operations must be performed on numbers.
- Use generics where possible.
- Avoid using `any`.

1. [3 points] `(x, y) => x.some(y)`
Answer:  <T>(x:T[],y:(b:T)=>boolean)=>boolean

2. [3 points] `x => x.map(y => y * 2)`
Answer: (x:number[])=>number[]

3. [3 points] `(x, y) => x.filter(y)`
Answer: <T>(x:T[],y:(b:T)=>boolean) => T[];

4. [3 points] `x => x.reduce((acc, cur) => acc + cur, 0)`
Answer: (x:number[])=>number;

5. [3 points] `(x, y) => x ? y[0] : y[1]`
Answer: <T>(x:boolean,y:T[]) => T;

6. [3 points] `(f,g) => x => f(g(x+1))`
Answer: <T, U>(f:(x:T) => U, g:(y:number) => T) => (x:number) => U