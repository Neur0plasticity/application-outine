interface application {
    pkg:pkg,
    config:config,
    ignition:ignition,
    memory_build:memory_build,
    memory_runtime:memory_runtime,
    memory_management:memory_management
};
interface pkg {[index:string]:string};
interface config {[index:string]:any};
interface ignition {
    start: Function, // bootstrap
    pause: Function, // freeze
    stop:  Function,  // kill
    reset: Function 
};
interface memory {};
interface memory_build {};
interface memory_runtime {};
interface memory_management {};
export const claS_Application = function(obj:application) {
    return obj;
    /** 
     * 
     * The application properties are computer perspective oriented.
     * 
     * The proprty names here apply to the neccessities of every computer application.
     * 
     * At the minimum, there are 2 types of variable referencing.
     * 1) runtime variables
     * 2) build variables
     * 
     * 1) runtime variables are simple variables such as let, var, cont, etc availalbe to the programs once it's executed.
     * 2) build variables are available when a program is being assembled, such as transpiling or rendering.
     * 
     * when the application renders, programs will not refer to this object model,
     * the programs will refer to there "contructed" references from the automated direct injection. This allows flexibility during editing code.
     * 
     * package.json:    Every application most likely will contain imported modules.
     * iginition:       Every application must be turn on, off, reset, and pause.
     * memory:          Every application will likely store referenceabke information somewhere.
     * memoryManagement Every application should have the option to store referenceable variables in the computers ram, cache, or fileSystem.
     * 
    */
    // let o = obj;
    // console.warn("Need to configure the errorHandling of the 'obj' inputs.");
    // console.warn("How about public methods to communicate with external applications");
    // console.warn("Every application needs dugging/logging, those can be handled by the application but must be available to devOps/root-app.");
    // console.warn("Every applications ignition/bootstrap requires a supreme event handler, aids with safely shutting down routines")
    // console.warn("??? How about fileSystem restrictions and other access priveledges ???");
    // return { // Temporary this is not allowed.

    //     "pkg": packageJSON,
    //     config: o.config, // any configuration the applications needs
    //     ignition: o.ignition,                   // Ignition is the currently the only Public methods available to external applications
    //     /*{ // captains chair, drivers seat
    //         start: Function, // bootstrap
    //         pause: Function, // freeze
    //         stop:  Function,  // kill
    //         reset: Function 
    //     },*/
    //     memory_build:   o.memory_build,
    //     /** 
    //      * Examples of build variables:
    //      * -- server rendering an html file an filling in the unique CSRF_token before it ships to the browser.
    //      * -- fill ask me questions.
    //     */
    //     memory_runtime: o.memory_runtime, // Mounted Variables
    //     /*{ 
    //         shared: {},
    //         ???
    //     },*/
    //     memory_management: o.memory_management 
    //     /*{ 
    //         - Keeps track of memory swapped around.
    //         - referring to referenced variables in code.
    //         cache:   {},
    //         ram:     {},
    //         storage: {}
    //     }*/
    // }
}