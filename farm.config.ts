import { defineConfig } from '@farmfe/core';

/**
 * Farm 构建工具的配置文件
 * @see https://farmfe.github.io/docs/configure
 */
export default defineConfig({
  // 编译配置
  compilation: {
    // 脚本相关配置
    script: {
      // 解析器配置
      parser: {
        // TypeScript 解析配置
        tsConfig: {
          decorators: true, // 启用 TypeScript 装饰器语法支持
        },
      }
    },
  },
  // 插件配置
  plugins: [
    '@farmfe/plugin-react',  // React 插件，用于支持 React 项目
    '@farmfe/plugin-sass'    // Sass 插件，用于支持 Sass/SCSS 预处理
  ]
});