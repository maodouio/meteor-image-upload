// var getCroppedImg;
// Template.avatarUploader.onRendered(function() {
//   getCroppedImg = initialImageUpload($("#avatar-upload"), 400, 400, "avatar.png");
// });

// Template.imgUploader.events({
//   'click #cropBtn': function() {
//     var dataUrl = getCroppedImg();
//     $("form .img-upload-data").val(dataUrl);
//     $("#cropped").attr("src", dataUrl);
//     Meteor.call('sendAvatarInBase64', dataUrl, function(err, res) {
//       if (0 === res.code) {
//         alert('图片上传成功');
//       }else {
//         alert('图片上传失败，请重试');
//       }
//     });
//   }
// });

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
        console.log(dataString);

        var dataUrl = dataString;
        Meteor.call('sendAvatarInBase64', dataUrl, function(err, res) {
          if (res) {
            document.querySelector('img').src = "http://7xpwy1.com1.z0.glb.clouddn.com/" + res;
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
