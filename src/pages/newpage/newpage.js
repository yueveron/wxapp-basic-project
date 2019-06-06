Page({
  data: {
    listImagePaths: []
  },
  onClkAddPhoto () {
    console.log('add photo')
    wx.chooseImage({
      count: 3,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success: (result) => {
        console.log('wx.chooseImage album success')
        const tempFilePaths = result.tempFilePaths
        // console.log('filePath:', this, tempFilePaths)
        this.setData({
          listImagePaths: tempFilePaths
        })
        // this.data.listImagePaths = filePath.tempFilePaths
        console.log(this.data.listImagePaths)
        // // 跳转到photo页面
        /* wx.navigateTo({
          url: 'photo?filePath=' + filePath,
        }) */
      },
      fail: () => { },
      complete: () => { }
    })

  },

  onClkCapture () {
    console.log('caputre photo')
    wx.chooseImage({
      sourceType: ['camera'],
      compressed: true,
      maxDuration: 15,
      success: (result) => {
        console.log("wx.chooseImage camera success")
        const filePath = result.tempFilePaths[0]
        console.log("filePath:" + filePath);
        // 跳转到photo页面
        /* wx.navigateTo({
          url: 'photo?filePath=' + filePath,
        }) */
      },
      fail: () => { },
      complete: () => { }
    })

  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function () {

  },

  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {

  }

})