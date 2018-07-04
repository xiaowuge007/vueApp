<template>
  <div class="tab-template-box">
    <h1>这里是图片</h1>
    <div>
      <button class="btn" id="btn">拍摄</button>
      <div>
        <img id="img1" v-bind:src="{imgUrl}" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgUrl: ''
    }
  },
  mounted () {
    var self = this
    document.addEventListener("deviceready", function () {
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true
      }
      var btn = document.getElementById('btn')
      btn.onclick = function () {
        navigator.camera.getPicture(function cameraSuccess(imageUri) {
          self.imgUrl = imageUri
        }, function cameraError(error) {
          console.debug("Unable to obtain picture: " + error, "app")

        }, options)
      }
    }, false)
  }
}
</script>
<style>
  .lis{
    height:40px;
    line-height: 40px;
    padding: 0 10px;
  }
  .tab-template-box{
    position: absolute;
    width: 100%;
    overflow-y: scroll;
    bottom: 0;
    top:0;
  }
</style>
