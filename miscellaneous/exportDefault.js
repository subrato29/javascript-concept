/**
 * What is export default in JavaScript ?
 * The export statement is used when creating JavaScript modules to export objects, functions, variables
 * from the module so they can be used by other programs with the help of the import statements.
 * There are two types of exports. One is Named Exports and other is Default Exports.
 */

/**
 * Named Exports: Named exports are useful to export several values. During the import, it is mandatory 
 * to use the same name of the corresponding object. 
 * 
 * //file math.js
    function square(x) {
        return x * x;
    }
    function cube(x) {
        return x * x * x;
    }
    export { square, cube };
    
    
    //while importing square function in test.js
    import { square, cube } from './math;
    console.log(square(8)) //64
    console.log(cube(8)) //512
 */

/**
 * Default Exports: Default exports are useful to export only a single object, function, variable. 
 * During the import, we can use any name to import.
 * 
 * // file math.js
    export default function square(x) {
        return x * x;
    }
    
    //while importing square function in test.js
    import square from './math;
    console.log(square(8)) //64 
 */

/**
 * Using Named and Default Exports at the same time: It is possible to use Named and Default exports 
 * in the same file. It means both will be imported in the same file. Example: 
 * 
 * //module.js
    var x=2;
    const y=4;
    function fun() {
        return "This a default export."
    }
    function square(x) {
        return x * x;
    }
    export { fun as default, x, y, square };


    import anyname, { x, y, square} from './module.js';
    console.log(anyname()); //This is a default export.
    console.log(x); //2
 */
