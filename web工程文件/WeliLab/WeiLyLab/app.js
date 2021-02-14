// app.js
const app = App({
  onLaunch() {
    // 登录
    wx.login({
      success: res => {
        if (res.code) {
          console.log('OK')
        } else {
          console.log('Error')
        }

      },

    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
module.exports = app;