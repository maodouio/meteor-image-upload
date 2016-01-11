
#### Client:
Template中加上 `{{> imgUploader}}` 即可使用

#### Server：
随意设置一个js文件如下格式即可, e.g:`server/config.js`

```js
Maodouio.imageUpload.config({
  ACCESS_KEY: "aWYiHEpzcKB7DuRlmEwB9IhreGDj8LoaBB-W5UoZ",
  SECRET_KEY: "xvGeaTI_4R5QhP6YyO0Qi3SXuGl34ur3rhPVH8y-",
  BUCKET_NAME: "klbj-test",
  DOMAIN_NAME: "http://7xpwy1.com1.z0.glb.clouddn.com/"
});
```

#### 目前存在问题：
1. 没有做任何的权限设置，登不登录都能传
2. ~~token中似乎有一项 *3600000ms* 的生存时间，还未验证~~  已验证，3600000ms后仍然可用
3. 图片没有上传进度的显示，界面不够友好
4. 和七牛通讯的时候仅仅返回 *result.key* 不够严谨，需要完善  

#### 参考文档
> 这两篇文档分别是 **上传之前压缩** 和 **上传原图后通过带参数的请求地址来返回处理后** 的图片，后者可以实现压缩和切图
* [上传策略(PutPolicy)](http://developer.qiniu.com/docs/v6/api/reference/security/put-policy.html)
* [图片基本处理（imageView2）](http://developer.qiniu.com/docs/v6/api/reference/fop/image/imageview2.html)



> 此package是在 [chenkaiC4](https://github.com/chenkaiC4) 的 [qiniu-package-demo](https://github.com/chenkaiC4/qiniu-package-demo) 基础上开发的
