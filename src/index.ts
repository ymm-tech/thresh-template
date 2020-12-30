import Thresh from 'thresh-lib'
import HomePage from './pages/homePage'


// 注入路由
// 可在开发时使用，从而直接进入某个页面
// injectRoute({
//   pageName: 'testPage',
//   params: {
//     title: 'test'
//   }
// })

Thresh.registerPage('homePage', () => HomePage, { isDefault: true })

/**
 * flutter 环境准备就绪
 * js 主动显示页面
 */
Thresh.ready = async () => {
  try {
    Thresh.runApp()
  } catch (error) {
    Thresh.onError(error)
  }
}
