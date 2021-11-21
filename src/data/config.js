module.exports = {
    TinyMCE: {
        height: 500,
        menubar: false,
        placeholder: 'Tuliskan sesuatu di sini!...',
        plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
            'link image',
        ],
        toolbar:
            'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | link image | help',
        skin: 'borderless',
        branding: false,
        // content_style:
        // 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
    },
}
