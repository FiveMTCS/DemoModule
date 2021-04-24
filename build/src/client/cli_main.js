"use strict";
(function () {
    // Waiting for TCS Core to start
    onTcsLoaded(() => {
        // Creating the module, giving its informations and the method to execute when the module will be started by the core
        const demoModule = new TcsModule(demoModuleInfos, (module) => {
            // Creating a thread with a countdown of 10 seconds. The message will only be printed if the TCS config "debugMode" is set to true.
            let countdown = 10;
            const mainThread = TCS.threads.createThread(module, 1000, () => {
                module.printDebug(TCS.lang.getAndReplace('threadCountdown', {
                    countdown: countdown,
                    threadId: mainThread,
                }));
                countdown--;
            });
            // Deleting the thread after the countdown
            setTimeout(() => {
                module.printDebug(TCS.lang.get('deletingThread'));
                TCS.threads.removeThread(mainThread);
                module.printDebug(TCS.lang.getAndReplace('testKey', {
                    language: TCS_CONFIG.lang,
                }));
            }, 11000);
        });
        // Adding the module to the game, it will be loaded only when its dependencies are started and when TCS will be ready to go.
        TCS.modules.addModuleToGame(demoModule);
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpX21haW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xpZW50L2NsaV9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxDQUFDO0lBQ0EsZ0NBQWdDO0lBQ2hDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7UUFDaEIscUhBQXFIO1FBQ3JILE1BQU0sVUFBVSxHQUFHLElBQUksU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQWlCLEVBQUUsRUFBRTtZQUN2RSxtSUFBbUk7WUFDbkksSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ25CLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO2dCQUM5RCxNQUFNLENBQUMsVUFBVSxDQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRTtvQkFDekMsU0FBUyxFQUFFLFNBQVM7b0JBQ3BCLFFBQVEsRUFBRSxVQUFVO2lCQUNwQixDQUFDLENBQ0YsQ0FBQztnQkFDRixTQUFTLEVBQUUsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDO1lBRUgsMENBQTBDO1lBQzFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2YsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNyQyxNQUFNLENBQUMsVUFBVSxDQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUU7b0JBQ2pDLFFBQVEsRUFBRSxVQUFVLENBQUMsSUFBSTtpQkFDekIsQ0FBQyxDQUNGLENBQUM7WUFDSCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztRQUVILDRIQUE0SDtRQUM1SCxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxFQUFFLENBQUMifQ==