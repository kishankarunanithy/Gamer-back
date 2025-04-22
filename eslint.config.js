module.exports = {
    env: {
        commonjs: false,
        es2021: true,
        node: true,
        browser: true,
    },
    extends: "eslint:recommended",
    overrides: [
        {
            files: "*.json",
            parser: "jsonc-eslint-parser",
            rules: {},
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "import/extensions": "off",
        "import/named": "off",
        indent: ["error", 4],
    },
};
