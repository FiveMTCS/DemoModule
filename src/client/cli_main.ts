(function () {
	// Waiting for TCS Core to start
	onTcsLoaded(() => {
		// Creating the module, giving its informations and the method to execute when the module will be started by the core
		const demoModule = new TcsModule(demoModuleInfos, (module: TcsModule) => {
			// Creating a thread with a countdown of 10 seconds. The message will only be printed if the TCS config "debugMode" is set to true.
			let countdown = 10;
			const mainThread = TCS.threads.createThread(module, 1000, () => {
				module.printDebug(
					TCS.lang.getAndReplace('threadCountdown', {
						countdown: countdown,
						threadId: mainThread,
					}),
				);
				countdown--;
			});

			// Deleting the thread after the countdown
			setTimeout(() => {
				module.printDebug(TCS.lang.get('deletingThread'));
				TCS.threads.removeThread(mainThread);
				module.printDebug(
					TCS.lang.getAndReplace('testKey', {
						language: TCS_CONFIG.lang,
					}),
				);
			}, 11000);
		});

		// Adding the module to the game, it will be loaded only when its dependencies are started and when TCS will be ready to go.
		TCS.modules.addModuleToGame(demoModule);
	});
})();
