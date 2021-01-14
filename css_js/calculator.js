$(document).ready(function () {

    var $result = $("#result");
    var wf = 0;
    // 클릭한 항목 확인하기
    // $("div .li").click(function(){
    //     $index = $(this).index();       
    //     console.log($("div .li p").eq($index).html());
    // });
    $(".circle").click(function () {
        $(this).css("display", "inline")
    })

    $("#q1 div img").click(function () {
        if ($("#q1 div img").hasClass("select")) {
            wf -= parseInt($("#q1 img[class=select]").attr('data-wf'));
            $("#q1 div img").removeClass("select");
        }

        $(this).toggleClass("select");
        if ($(this).hasClass("select"))
            wf += parseInt($(this).attr('data-wf'));
        else
            wf -= parseInt($(this).attr('data-wf'));

        console.log(wf);

    });
    //2번 샤워항목 text 클릭
    $("#q2 div.li div").click(function () {
        if ($(".li div").hasClass("select")) {
            wf -= parseInt($("div[class=select]").attr('data-wf'));
            $(".li div").removeClass("select");
        }
        $(this).toggleClass("select");
        if ($(this).hasClass("select"))
            wf += parseInt($(this).attr('data-wf'));
        else
            wf -= parseInt($(this).attr('data-wf'));
        console.log(wf);
        //아예 샤워시간을 이미지로 만들어바..?
    });
    $("#q3 div img").click(function () {
        if ($("#q3 div img").hasClass("select")) {
            wf -= parseInt($("#q3 img[class=select]").attr('data-wf'));
            $("#q3 div img").removeClass("select");
        }

        $(this).toggleClass("select");
        if ($(this).hasClass("select"))
            wf += parseInt($(this).attr('data-wf'));
        else
            wf -= parseInt($(this).attr('data-wf'));

        console.log(wf);
        calculator(wf);
    });
    $("#q4 div img").click(function () {
        if ($("#q4 div img").hasClass("select")) {
            wf -= parseInt($("#q4 img[class=select]").attr('data-wf'));
            $("#q4 div img").removeClass("select");
        }

        $(this).toggleClass("select");
        if ($(this).hasClass("select"))
            wf += parseInt($(this).attr('data-wf'));
        else
            wf -= parseInt($(this).attr('data-wf'));

        console.log(wf);
        calculator(wf);
    });
    $("#q5 div img").click(function () {
        if ($("#q5 div img").hasClass("select")) {
            wf -= parseInt($("#q5 img[class=select]").attr('data-wf'));
            $("#q5 div img").removeClass("select");
        }

        $(this).toggleClass("select");
        if ($(this).hasClass("select"))
            wf += parseInt($(this).attr('data-wf'));
        else
            wf -= parseInt($(this).attr('data-wf'));

        console.log(wf);
        calculator(wf);
    });
    $("#q6 div img").click(function () {
        if ($("#q6 div img").hasClass("select")) {
            wf -= parseInt($("#q6 img[class=select]").attr('data-wf'));
            $("#q6 div img").removeClass("select");
        }

        $(this).toggleClass("select");
        if ($(this).hasClass("select"))
            wf += parseInt($(this).attr('data-wf'));
        else
            wf -= parseInt($(this).attr('data-wf'));

        console.log(wf);
        calculator(wf);
    });
    $("#q7 div img").click(function () {
        if ($("#q7 div img").hasClass("select")) {
            wf -= parseInt($("#q7 img[class=select]").attr('data-wf'));
            $("#q7 div img").removeClass("select");
        }

        $(this).toggleClass("select");
        if ($(this).hasClass("select"))
            wf += parseInt($(this).attr('data-wf'));
        else
            wf -= parseInt($(this).attr('data-wf'));

        console.log(wf);
        calculator(wf);
    });
    $("#q8 div img").click(function () {
        if ($("#q8 div img").hasClass("select")) {
            wf -= parseInt($("#q8 img[class=select]").attr('data-wf'));
            $("#q8 div img").removeClass("select");
        }

        $(this).toggleClass("select");
        if ($(this).hasClass("select"))
            wf += parseInt($(this).attr('data-wf'));
        else
            wf -= parseInt($(this).attr('data-wf'));

        console.log(wf);
        calculator(wf);
    });

    $(".finish").click(function () {
        if (check()) { //모든 항목 체크 확인
            $result.css("display", "block");
            $(document).scrollTop($(document).height());
            calculator(wf);
        }
    })
    $(".redo").click(function () {
        window.scrollTo(0, 0);
        window.location.reload();
    });

    function calculator(wf) {
        var str = "";
        str += "당신이 오늘 남긴 물발자국은 " + wf + "L 입니다.<br/>"
        str += "대한민국 성인 1인 평균 하루 물발자국: 5013L<br/>"
        if (wf >= 5013) {
            str += "물 발자국을 조금만 줄여보는 건 어떨까요? -> 물발자국 지우는 방법 알아보기";
        } else {
            str += "잘하고 계시네요 ! 물발자국 지우기 실천에 동참해주세요";
        }
        $("#result p").html(str);

    }

    //select 클래스 노드가 몇개인지 
    function check() {
        var num = $(".select").length;
        if (num != 8) {
            alert("모든 항목을 선택하세요");
            return false;
        } else
            return true;
    }

});