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
var dataString;

Template.imgUploader.events ({
  'change #myFileInput': function(e, template) {
      var files=event.target.files;
      if(files.length===0){
        return;
      }
      var file=files[0];
      console.log(file);

      //
      var fileReader=new FileReader();
      fileReader.onloadend = function () {
        dataString = fileReader.result;
        document.querySelector('img').src = dataString;
        // $('[name=image]').src = dataString;
        console.log(dataString);
      };
      fileReader.readAsDataURL(file);
   },
});
