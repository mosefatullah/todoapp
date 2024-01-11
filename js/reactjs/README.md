### ReactJS

#### [] Introduction
* React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.

#### [] Learning Resources
* [Learn With Sumit - Think in a React way](https://www.youtube.com/playlist?list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr) `Tutorial`

#### [] Certifications
* None

#### [] Timelines
* `2023-12-01` Started *Think in a React way* tutorial on Learn With Sumit

#### [] Covered Topics

##### Learn With Sumit - Think in a React way

### Basics (States, Props, Components, Compositions)
-----------------------------------------------------------------------------------------------------
- React Prerequisities (JS Basics, JS ES6, JS OOP, React Basics)
- 
- JSX (Javascript XML) & HTML to JSX Convert (Tag attribute, Ending tag, '/' on Image src), JSX Element's Properties (It doesn't look like HTML element's property, but similar to DOM Object's property)
-
- Rendering Elements, JSX Fragments (<> </>) (For writing no tagname), JSX Interpolation (Write single JS in JSX elements like `<h1>{name}</h1>`) (React escape this {name} for security)
- 
- React's Block (React's so small building block is JSX element, and then React's component) (We can nest components), React Virtual DOM vs Real DOM (Virtual DOM is pure JS Object but DOM is not JS Object), React vs React-dom (React helps us creating JSX elements, React-dom helps us rendering virtual-dom)
- 
- React Issue (React's element is enumerable, which means you can't change tagname or UI, but can change value 'by changing data/state' and by working with 'components') (Every name of the element properties must be in Camel Case, due to JS)
- 
- React Functional Components and Props (It returns react elements, we can reuse it, it recieves properties from outside which is called props)
- 
- React Class Components and Props (It's not entirely same with the functional component, it has class's features. To get it's props, we have to write this.props)(Stateful component)
- 
- React State & Lifecycle Method (Props means only setting data outside of components & state means setting and also changing data inside of)(Lifecycle hook: componentDidMount(), componentWillUnmount() - on loading & on closeing page)
- 
- React Event Handling (CamelCase in naming, ), This problem on event function in class object (Solution is arrow function  /  using bind inside of class constructor),  Sending Parameters (Using .bind(this, parameter)  /  arrow function {(p)=>func(p)}),  Detect re-render & stop (Using lifecycle hook shouldComponentUpdate(nextProps) & comparing two props - is equal or not), Best Practise (Don't send parameter & send parameter by props)
- 
- React Conditional Rendering (Storing on variables & use on if else outside render() & then use the variable by curly bracket in render() / Using ternary operator)(Falsy value: 0,null,undefined,false,"",NaN)(Render() stoping: return null;)
- 
- React List & Keys (Using map instead of for loop; Jsx can take array of blocks; We must create a unique key in each blocks of the array for react's purpose; don't use array index as the unique key)
- 
- React Form Handling (Input, Textarea, Select, Checkbox, Submit)(All has value property; Must change all's value by react's state), Controlled vs Uncontrolled Component (React form is controlled, html form is uncontrolled; Can easily use input's value anywhere by react's state)(Forget using DOM's system in react which is uncontrolled, just use react state. But you must use DOM's system for file input using ref)(For using those inputs as uncontrolled set their value to null)
- 
- React Lifting State Up (Moving 'state' child to parent for solving problem; One-way data flow; Top-down approach; For these reasons, React is known for unidirectional data flow; In this way, Component access another component by their parent component)
- 
- React Composition vs Inheritance (React inspires us using composition instead of inheritance - OOP concept; Composition is the solution of it where we pass function as props then wrapping) (Dont use inheritance, due to this, components become dependant, tightly coupled & hard to find dependancy) (Multiple composition : Using nested wrapping)
- 
- React Higher Order Component (Avoids Props Drilling Problem Though Similar to Lifting State Up but scalable way when components are scattered)(A function takes component as a parameter & returns new)(Used to reduce duplicate states & functionalities and put to one place)
- 
- React Render Props (Uses Render Props Technique, But Alternative of HOC; A function passed in props for rendering specific component, It's a matter of wonder that the component don't know what will he render; only the function provided in the parent component knows)
- 
- React Context Api (Properly Solves Props Drilling Problem and A 3rd Party Solution; No Distance of Components Can Break This; contextType, useContext)
- 

### Advanced
-----------------------------------------------------------------------------------------------------
- React Hooks (Simple functions for solving problems whenever faces related to states, lifecycle methods, duplicate codes and sharing same logic)
- 
- React UseState (State initializing, setting & getting states; how does it work behind the scene?)
- 
- React UseEffect (Working with side effects, outside of the responsibilities of react like changing dom, fetching data, setting subscriptions, times) (Component mount, unmount & update)
- 
- React UseCallback & UseMemo (Two higher order components, all about caching & hooks that memorize returned value & function's reference & forget when their dependencies change, used for performance optimization by controlling rerendering. Wrapping component or function with returned values with React.memo()) (UseCallback - To solve function reference problem in props which causes rerendering always. Wrapping function with React.useCallback(), has a array dependency like useEffect) 
- 
- React UseRef (DOM Reference - getting reference of an element with reactive way) (React ForwardRef is used for component; not for an element, it returns new component similarly like HOC pattern) (UseRef as a storage - rerendering can't change it's value; just setting value of myRef.current for storing)
- 
- 
- React Router (Routing to pages without refreshing), Error Page Making With React Router 