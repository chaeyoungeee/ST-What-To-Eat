function ImgUpload() {
    return(
        <form class="form-box" action="/img/upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="img" accept="image/*" />
            <input type="submit"></input>
        </form>
    )
}

export default ImgUpload;