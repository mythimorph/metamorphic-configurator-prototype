module.exports = {
    mount: {
        public: {url: "/", static: true, resolve: false },
        src: {url: "/assets/" }
    },
    devOptions: {
        port: 8000,
        open: "none"
    },
    buildOptions: {
        out: "_BUILD"
    },
    optimize: {
        bundle: true,
        minify: true,
        sourcemap: false
    },
    plugins: [
        '@snowpack/plugin-typescript',
    ]
};