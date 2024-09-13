function selectedVideo(self){
    var file = self.files[0];
    var reader = new FileReader();

    reader.onloadend = function(e){
        var src = e.target.result;
        var video = document.getElementById('vid');
        var source = document.getElementById('source');

        source.setAttribute("src", src)
        video.load()
        video.play()
    }

    reader.readAsDataURL(file);
}

