class FileListPlugin {
  constructor(option) {
    this.options = {...FileListPlugin.defaultConfig, ...option}
  }

  static defaultConfig = {
    outputFile: 'assets.md'
  }

  apply(compiler) {
    const pluginName = FileListPlugin.name

    const {webpack} = compiler

    const {Compilation} = webpack

    const {RawSource} = webpack.sources

    compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
      compilation.hooks.processAssets.tap(
      {
        name: pluginName,
        stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE
      },
      (assets) => {
        const content = 
          '# In this build:\n\n' + 
          Object.keys(assets)
            .map(filePath => `- ${filePath}`)
            .join('\n')
        console.log('content: ', content)
        compilation.emitAsset(
          this.options.outputFile,
          new RawSource(content)
        )
      })
    })
  }
}

module.exports = {FileListPlugin}
