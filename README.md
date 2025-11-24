"# TypeScript Learning Journey 🚀

A comprehensive TypeScript learning repository covering fundamental to advanced concepts through practical examples and hands-on exercises.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Setup & Installation](#setup--installation)
- [Learning Path](#learning-path)
- [File Structure](#file-structure)
- [Compilation](#compilation)
- [Running Examples](#running-examples)
- [Topics Covered](#topics-covered)
- [Contributing](#contributing)
- [Resources](#resources)

## 🎯 Overview

This repository contains a structured approach to learning TypeScript, starting from basic data types to advanced concepts like decorators, generics, and utility types. Each file focuses on specific TypeScript features with practical examples and clear explanations.

## 🔧 Prerequisites

- Basic knowledge of JavaScript
- Node.js installed (v14 or higher)
- A code editor (VS Code recommended)

## ⚡ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Saroj-kr-tharu/Typescript-Learning.git
   cd Typescript-Learning
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Compile TypeScript files:**
   ```bash
   npx tsc
   ```

## 🗺️ Learning Path

Follow this recommended sequence for optimal learning:

### **Beginner Level (Files 00-07)**
1. **Data Types** - Understanding TypeScript's type system
2. **Primitives** - Numbers, strings, booleans
3. **Null & Undefined** - Handling nullable values
4. **BigInt & Symbol** - Special data types

### **Intermediate Level (Files 08-19)**
1. **Arrays & Tuples** - Structured data handling
2. **Objects** - Complex data structures
3. **Union Types** - Flexible type definitions
4. **Interfaces** - Defining contracts
5. **DOM Manipulation** - TypeScript in the browser

### **Advanced Level (Files 20-37)**
1. **Classes** - Object-oriented programming
2. **Inheritance** - Extending functionality
3. **Generics** - Reusable components
4. **Decorators** - Meta-programming
5. **Utility Types** - Advanced type manipulation
6. **API Calls** - Real-world applications

## 📁 File Structure

```
📦 TypeScript-Learning
├── 📄 README.md
├── 📄 package.json
├── 📄 tsconfig.json
├── 📂 Type/                    # Custom type definitions
├── 📂 output/                  # Compiled JavaScript files
│
├── 🎯 Core Concepts
│   ├── 00_info.ts             # Introduction & setup
│   ├── 01_dataTypes.ts        # Basic data types
│   ├── 02_Number_DataTypes.ts # Number handling
│   ├── 03_STRING_BOOLEAN.ts   # Strings & booleans
│   ├── 04_NULL_AND_UNDEFINED.ts # Nullable types
│   ├── 05_Bigint_DATATYPE.ts  # BigInt usage
│   └── 06_SYMBOL_DATATYPE.ts  # Symbol type
│
├── 🗃️ Data Structures
│   ├── 08_ArrayDataType.ts    # Arrays in TypeScript
│   ├── 09_tuple.ts            # Tuple data structure
│   ├── 10_object.ts           # Object types
│   ├── 11_Any_and_Unknown.ts  # Type flexibility
│   └── 14_union.ts            # Union types
│
├── 🏗️ Advanced Types
│   ├── 15_interface.ts        # Interface definitions
│   ├── 16_intersection.ts     # Intersection types
│   ├── 17_Type.ts             # Type aliases
│   ├── 18_Enum.ts             # Enumerations
│   ├── 29_key_of.ts           # Keyof operator
│   ├── 30_index_signature.ts  # Index signatures
│   ├── 31_UtilityTypes.ts     # Built-in utilities
│   └── 32_utility_types.ts    # Custom utilities
│
├── 🎭 Functions & Control
│   ├── 12_return_type_in_function.ts # Function typing
│   ├── 13_never.ts            # Never type
│   └── 27_TypeGuard.ts        # Type guards
│
├── 🏛️ Object-Oriented Programming
│   ├── 20_class.ts            # Class basics
│   ├── 21_access_Modifier.ts  # Access modifiers
│   ├── 22_inheritance.ts      # Class inheritance
│   ├── 24_getter_and_setter.ts # Getters & setters
│   ├── 25_interface_with_class.ts # Interface implementation
│   └── 26_Static_keyword.ts   # Static members
│
├── ⚙️ Advanced Features
│   ├── 23_module.ts           # Module system
│   ├── 28_generic.ts          # Generic types
│   ├── 33_namespace.ts        # Namespaces
│   ├── 34_decorator.ts        # Decorators
│   ├── 35_override_decorators.ts # Override decorators
│   ├── 36_Typed_Promise.ts    # Promise typing
│   └── 37_apiCall.ts          # API integration
│
└── 🌐 Web Integration
    ├── 07_input.html          # HTML examples
    ├── 19_Dom_handling_typecasting.ts # DOM manipulation
    ├── 19_dom.html            # DOM examples
    └── user.html              # User interface examples
```

## 🔨 Compilation

The project uses TypeScript compiler with the following configuration:

- **Target:** ES2024
- **Module:** NodeNext
- **Output Directory:** `./output`
- **Source Maps:** Enabled
- **Declaration Files:** Generated
- **Decorators:** Experimental support enabled

To compile all files:
```bash
npx tsc
```

To compile in watch mode:
```bash
npx tsc --watch
```

## 🏃 Running Examples

1. **Compile the TypeScript files:**
   ```bash
   npx tsc
   ```

2. **Run individual examples:**
   ```bash
   node output/01_dataTypes.js
   node output/20_class.js
   # ... any other compiled file
   ```

3. **For HTML examples:**
   Open the HTML files in a browser and check the browser console for output.

## 📚 Topics Covered

### **Type System**
- [x] Basic data types (number, string, boolean)
- [x] Advanced types (BigInt, Symbol)
- [x] Null and undefined handling
- [x] Any and unknown types
- [x] Never type

### **Data Structures**
- [x] Arrays and array methods
- [x] Tuples for fixed-length arrays
- [x] Objects and object typing
- [x] Enums for named constants

### **Type Definitions**
- [x] Union types (`|`)
- [x] Intersection types (`&`)
- [x] Type aliases
- [x] Interfaces
- [x] Index signatures
- [x] Keyof operator

### **Functions & Control Flow**
- [x] Function return types
- [x] Type guards
- [x] Function overloading

### **Object-Oriented Programming**
- [x] Classes and constructors
- [x] Access modifiers (public, private, protected)
- [x] Inheritance and extends
- [x] Static members
- [x] Getters and setters
- [x] Interface implementation

### **Advanced Features**
- [x] Generics for reusable code
- [x] Utility types (Partial, Required, etc.)
- [x] Decorators and metadata
- [x] Modules and namespaces
- [x] Promise typing
- [x] API call typing

### **Web Integration**
- [x] DOM manipulation with TypeScript
- [x] Type casting for DOM elements
- [x] Event handling



## 📖 Resources

### **Official Documentation**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)

### **Learning Materials**
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Effective TypeScript](https://effectivetypescript.com/)

### **Tools & Extensions**
- [VS Code TypeScript Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)
- [TypeScript ESLint](https://typescript-eslint.io/)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Saroj Kumar Tharu**
- GitHub: [@Saroj-kr-tharu](https://github.com/Saroj-kr-tharu)

---

⭐ **Star this repository if it helped you learn TypeScript!**

💡 **Found an issue or have suggestions? Please open an issue or submit a pull request.**" 
