# CSS-IN-JS 性能测试

感谢 Material-UI(https://github.com/mui-org/material-ui)

```sh
npm run benchmark
```


## 结果

```
noop (baseline):
  04.73 ±00.18ms
React primitives:
  35.63 ±01.68ms
React components:
  127 ±5%
@emotion/styled:
  175 ±6%
styled-components:
  195 ±3%
@compiled/react:
  282 ±4%
@stitches/react:
  197 ±4%
```
