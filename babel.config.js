module.exports = {
    "presets": [
        "@babel/preset-env",
        [
            "@babel/preset-react", { "runtime": "automatic" }
        ]
    ],
    "plugins": [
        [
            "import", {
                "libraryName": "common-ui",
                "libraryDirectory": "components",
                "customName": (name, file) => {
                    // const filename = file.opts.filename
                    if (name === 'utils') {
                        return 'common-ui/utils/index'
                    }
                    return `common-ui/components/${name}`
                },
                "style": false
            }
        ]
    ],
}