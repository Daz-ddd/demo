$(document).ready(function () {
    $(".blog-button").click(function () {
        let str1 = $(this).attr("blog-button");
        let str2 = $(this).prev(".comment-words").val();
        let str3 = $(".glyphicon-user").text();
        $.ajax({
            url: 'http://localhost:8088/postComment',
            type: 'post',
            contentType: "application/json",
            async: false,
            data: JSON.stringify({
                logId: str1,
                comment: str2
            }),
            success: function () {
                $(".post-comment").before(
                    "<div class='comment'><span class=\"comment-user\">" + str3 + "：</span><span class=\"comment-content\">" + str2 + "</span></div>"
                );
                $(".comment-words").val("");
            },
            error: function () {
                $(".post-comment").before(
                    "<div class='comment'><span class=\"comment-user\">" + str3 + "：</span><span class=\"comment-content\">" + str2 + "</span></div>"
                );
                $(".comment-words").val("");
            }

        })
    })
})
