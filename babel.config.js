module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry"
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    ]
  ]
};
