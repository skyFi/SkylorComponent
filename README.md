## Skylor Component

为你的 React 组件注入配置，如：`Services`,`Axios`, `etc.`

## Install

```
npm install skylor-component

// or
yarn add skylor-component
```

## Usage

### 在应用入口处注入：
```jsx
import { init } from 'skylor-component';
import Services from './services'; // eg: 你的服务...

init({ Services, Hello: true }); // 需要注入的项目
```

### 在任意组件内使用，建议全部使用

```jsx
import React from 'react';
import Component from 'skylor-component'; // 只需要这么一行就可以在组件内直接使用 `this`来获取注入的配置项。

export default class Example extends Component {
  state = { username: '' }
  async componentWillMount() {
    const res = await this.Services.user.getDetail();
    this.setState({ username: res.name })
  }
  render() {
    return (
      <div>example: {this.state.username} {this.Hello}</div>
    );
  }
}
```
