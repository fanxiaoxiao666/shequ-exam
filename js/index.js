
/**
 * Created by Administrator on 2017/12/1.
 */
$(function()
{
    $(".top").click(function()
    {
        $("html,body").animate({"scrollTop":0})
    });

    $(".shiti li").click(function()
    {
        console.log($(this).index())
        $(".shiti .middle").hide();
        $(".shiti li").attr({"class":"btn"})
        $(this).attr({"class":"active"})
        $(".shiti .middle").eq($(this).index()).show()
    })

    $(".jiemi-bottom li").mouseover(function()
    {
        $(".jiemi-bottom li").attr({"class":""})
        $(this).attr({"class":"active"})

    })

    $("#v1").click(function()
    {
        $(".mengceng").show()
        $("video").attr("class","box")
    })

    $(" .like").hover(
        function()
        {
            $("#likeContent").show()
        },
        function()
        {
            $("#likeContent").hide()
        }
    )

    $(document).scroll(function()
    {
        if($(this).scrollTop()>=4800)
        {
            $("#likeContent").show()
        }
        else {
            $("#likeContent").hide()
        }
    })
})