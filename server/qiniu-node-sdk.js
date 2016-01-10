// 引入七牛 node.js SDK
QiniuNodeSDK = Npm.require('qiniu');

// 创建上传策略：服务端上传
/* ==================++++填写下面三个参数++++=================*/
// var ak = 'aWYiHEpzcKB7DuRlmEwB9IhreGDj8LoaBB-W5UoZ';
// var sk = 'xvGeaTI_4R5QhP6YyO0Qi3SXuGl34ur3rhPVH8y-';
// var bucketname = 'klbj-test';
Maodouio = {};
Maodouio.imageUpload = {};
Maodouio.imageUpload._options = {};
Maodouio.imageUpload.config = function(obj){
  Maodouio.imageUpload._options = obj;
  QiniuNodeSDK.conf.ACCESS_KEY = Maodouio.imageUpload._options.ACCESS_KEY;
  QiniuNodeSDK.conf.SECRET_KEY = Maodouio.imageUpload._options.SECRET_KEY;
  bucketname = Maodouio.imageUpload._options.BUCKET_NAME;

  putPolicy = new QiniuNodeSDK.rs.PutPolicy(bucketname);
  qiniuClient = new QiniuNodeSDK.rs.Client();
  wrappedQiniuIo = Async.wrap(QiniuNodeSDK.io, ['put']);
  wrappedQiniuClient = Async.wrap(qiniuClient, ['stat', 'remove', 'copy', 'move']); //获取基本信息，移动...
};
// var bucketname;

// 转换异步接口为同步


// 上传二进制头像文件
function uploadAvatarBuf(avatarBuf) {
  console.log(putPolicy.token());
  var uptoken = putPolicy.token();
  console.log("uptoken");
  var extra = new QiniuNodeSDK.io.PutExtra();
  extra.mimeType = 'image/jpeg';
  return wrappedQiniuIo.put(uptoken, '', avatarBuf, extra);
}




Meteor.methods({
  // 接收头像信息，base64 格式
  'sendAvatarInBase64': function(avatarBuf) {
    var res = uploadAvatarBuf(new Buffer(avatarBuf.replace(/^data:image\/\w+;base64,/, ""), 'base64'));

    console.log(res);

    if(res.key) {
      return res.key;
    }
  },
  'getQiniuDomain': function () {
    return Maodouio.imageUpload._options.DOMAIN_NAME;
  }
});
