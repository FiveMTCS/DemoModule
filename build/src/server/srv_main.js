"use strict";
(function () {
    // Waiting for TCS Core to start
    onTcsLoaded(() => {
        // Creating the module, giving its informations and the method to execute when the module will be started by the core
        const demoModule = new TcsModule(demoModuleInfos, (module) => {
            module.printDebug('The version is automatically checked with github when the versionningCheck is set to true in the configuration file (src/assets/mixed_config.js)');
        });
        // Adding the module to the game, it will be loaded only when its dependencies are started and when TCS will be ready to go.
        TCS.modules.addModuleToGame(demoModule);
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3J2X21haW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmVyL3Nydl9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxDQUFDO0lBQ0EsZ0NBQWdDO0lBQ2hDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7UUFDaEIscUhBQXFIO1FBQ3JILE1BQU0sVUFBVSxHQUFHLElBQUksU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQWlCLEVBQUUsRUFBRTtZQUN2RSxNQUFNLENBQUMsVUFBVSxDQUNoQixrSkFBa0osQ0FDbEosQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsNEhBQTRIO1FBQzVILEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEVBQUUsQ0FBQyJ9