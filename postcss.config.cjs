// .cjs - common js = before EM 6
// stage:1 = advacend css functions   
module.exports = {
  plugins: [
    require("postcss-preset-env")({
      stage: 1,
      features: {
        "nesting-rules": true,
      },
    }),
  ],
};
