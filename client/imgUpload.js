Meteor.call("getQiniuDomain", function(error, result){
  if(result){
    Session.set("qiniuUploadDomain", result);
  }
});
Template.imgUploader.events ({
  'change #myFileInput': function(e, template) {
      // 读取所有files
      var files=event.target.files;
      if(files.length===0){
        return;
      }
      // WARN: 选取file的第一个，以后需要循环所有图片
      var file=files[0];
      // console.log(file);

      // 初始化FileReader来读取file
      var fileReader=new FileReader();
      // callback: FileReader.onloadend 文件读取完毕时调用
      fileReader.onloadend = function () {
        var dataString = fileReader.result;
        // WARN: 仅限一个图片时使用，后期需要修改
        // console.log(dataString);

        var dataUrl = dataString;
        Meteor.call('sendAvatarInBase64', dataUrl, function(err, res) {
          if (res) {
            document.querySelector('img').src = Session.get("qiniuUploadDomain") + res;
            alert('图片上传成功');
          }else {
            alert('图片上传失败，请重试');
          }
        });

      };
      // 转换成base64
      fileReader.readAsDataURL(file);
   },
});
