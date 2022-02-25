    
    
    
// txt파일로 내용 바꾸기
    // let noTit = $('.notice-content a');
    // noTit.eq(0).load('notice.txt #title01');
    // noTit.eq(1).load('notice.txt #title02');
    // noTit.eq(2).load('notice.txt #title03');
    // noTit.eq(3).load('notice.txt #title04');
    // noTit.eq(4).load('notice.txt #title05');




// 메뉴
// stop????
    $('.nav-level1>li').mouseenter(function(){
        $(this).children('.nav-level2').stop().slideDown(300);
    })
    $('.nav-level2,.nav-level1>li').stop().mouseleave(function(){
        $('.nav-level2').slideUp(300);
    })

// 공지사항/갤러리 이동
    $('.sub-tit').on('click',function(){
        $('.art').removeClass('on');
        $(this).parent('.art').addClass('on');
    })

    
// 스킵메뉴
// 오류
    // $('.skip-nav a').on({
    //     focusin:function(){
    //         $('.skip-nav').css('top','0');
    //     },
    //     focusout:function(){
    //         $('.skip-nav').css('top','-9999px');
    //     }
    // })


// 이미지 모달
// 왜 p가 안 나오고 위치만 나옴?
    $('.gallery-list img').on({
        click:function(){
            let imgSrc = $(this).attr('src');
            let imgTit = $(this).parents('.img-box').next().children('.cont-tit').text();
            let imgCon = $(this).parents('.img-box').next().children('p').text();
            $('.popup02 .modal-tit').text(imgTit);
            $('.popup02 img').attr('src',imgSrc);
            $('.popup02 .modal-con').text(imgSrc);
            $('.popup02').show(0);
        }
    })

    $('.notice-gallery a').on({
        click:function(e){
            e.preventDefault();
        }
    })




// 공지사항 모달
// 열기
    let conTits = $('.notice-content li:nth-child(2) a');
    conTits.on({
        click:function(e){
            $('.popup01').show(0);
            e.preventDefault();
        }
    })

// 닫기
    $('.modal-btn button').on({
        click:function(){
            $('.modal-popup').hide(0);
        }
    })



// 슬라이더
    setInterval(mySlider,3000);
    let cnt = 1;
    function mySlider(){
        if(cnt>=3){
            cnt=1;
            $('.slide').animate({
                left:'+=2400px',
            });
        }else{
            cnt++;
            $('.slide').animate({
                left:'-=1200px',
            });

        }
    }



