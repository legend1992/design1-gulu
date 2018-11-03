module.exports = {
  title: 'Hello design1-gulu',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      '/install/',
      '/get-started/',
      {
        title: '组件',
        children: [
          '/components/button',
          // '/components/tabs',
          // '/components/input',
          // '/components/grid',
          // '/components/layout',
          // '/components/toast',
          // '/components/popover',
        ]
      }
    ]
  }
}