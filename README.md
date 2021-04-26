# Modules

![core](https://user-images.githubusercontent.com/61824574/116143458-77a0af00-a6db-11eb-816a-a155298f8dd1.jpg)

## Presentation

TCS uses modules, which are "scripts" that depends on the core. They can be directly loaded in this directory (`modules/`) or with another resource.

You can edit the configuration of TCS to able or disable the versionning check for the modules.

> By default, versionning check is set to **true**

## Module creation

Each module has to declare the informations about it has you can see in `src/mixed_moduleInfos.ts`

## Local modules

TCS Core scripts handle client and server files by their names. Integrate your module in the `modules/` folder, and follow these instructions :

- Use `cli_` prefix on the file name for client only files
- Use `mixed_` prefix on the file name for client AND server files (moduleInfos should be mixed)
- Use `srv_` prefix on the file name for server only files
- Place all the assets related to language configuration to tcs script `src/assets/lang/type/name` for example the language assets of this module will be placed in `src/assets/lang/system/demo/`in the tcs script
