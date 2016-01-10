var getCroppedImg;
Template.avatarUploader.onRendered(function() {
  getCroppedImg = initialImageUpload($("#avatar-upload"), 400, 400, "avatar.png");
});

Template.imgUploader.events({
  'click #cropBtn': function() {
    var dataUrl = getCroppedImg();
    $("form .img-upload-data").val(dataUrl);
    $("#cropped").attr("src", dataUrl);
    Meteor.call('sendAvatarInBase64', dataUrl, function(err, res) {
      if (0 === res.code) {
        alert('图片上传成功');
      }else {
        alert('图片上传失败，请重试');
      }
    });
  }
})
