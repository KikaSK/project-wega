$(document).ready(function(){
    var D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    //     B R Y B G G Y N R N Y B G R N
    //     0 1 2 3 4 5 6 7 8 9 0 1 2 3 4
    var images=[im1, im2, im3, im4, im5, im6, im7, im8, im9, im10, im11, im12, im13, im14, im15];


    $(im1).click(function(){
        urob(im1,0);
    });
    $(im2).click(function(){
        urob(im2,1);
    });
    $(im3).click(function(){
        urob(im3,2);
    });
    $(im4).click(function(){
        urob(im4,3);
    });
    $(im5).click(function(){
        urob(im5,4);
    });

    $(im6).click(function(){
        urob(im6,5);
    });
    $(im7).click(function(){
        urob(im7,6);
    });
    $(im8).click(function(){
        urob(im8,7);
    });
    $(im9).click(function(){
        urob(im9,8);
    });
    $(im10).click(function(){
        urob(im10,9);
    });

    $(im11).click(function(){
        urob(im11,10);
    });
    $(im12).click(function(){
        urob(im12,11);
    });
    $(im13).click(function(){
        urob(im13,12);
    });
    $(im14).click(function(){
        urob(im14,13);
    });
    $(im15).click(function(){
        urob(im15,14);
    });

    function urob(param, i){
        for(var j=0;j<15;++j)
        {
            if(D[j]==1 && i!=j){
                D[j]=0;
                $(images[j]).css("transform","scale(1)");
            }
        }
        if(D[i]==0){
            D[i]=1;
            $(param).css("transform","scale(1.2)");
        }
        else if (D[i]==1){
            D[i]=0;
            $(param).css("transform","scale(1)");
        }
    }
    //modry
    $(M_m).click(function(){
        if(D[0]!=1 && D[3]!=1 && D[11]!=1){
            $(M_m).css("border","2px solid rgb(255,0,0)");
            window.setTimeout(function(){
                 $(M_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                 }, 500);
        }
        else{
            $(M_m).css("border","2px solid rgb(0,255,0)");
            window.setTimeout(function(){
                $(M_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                
                for(var i=0;i<15;++i)
                {
                    if(D[i]==1){
                        $(images[i]).css("opacity","0.2");
                        D[i]=-1;
                        $(images[i]).css("transform","scale(1)");
                    }
                }
            }, 500);
        }
    });

    //zeleny
    $(Z_m).click(function(){
        console.log("Hura");
        if(D[4]!=1 && D[5]!=1 && D[12]!=1){
            $(Z_m).css("border","2px solid rgb(255,0,0)");
            window.setTimeout(function(){
                 $(Z_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                 }, 500);
        }
        else{
            $(Z_m).css("border","2px solid rgb(0,255,0)");
            window.setTimeout(function(){
                $(Z_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                for(var i=0;i<15;++i)
                {
                    if(D[i]==1){
                        $(images[i]).css("opacity","0.2");
                        D[i]=-1;
                        $(images[i]).css("transform","scale(1)");
                    }
                }
            }, 500);
        }
    });

    //zlty
    $(Ž_m).click(function(){
        console.log("Hura");
        if(D[2]!=1 && D[6]!=1 && D[10]!=1){
            $(Ž_m).css("border","2px solid rgb(255,0,0)");
            window.setTimeout(function(){
                 $(Ž_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                 }, 500);
        }
        else{
            $(Ž_m).css("border","2px solid rgb(0,255,0)");
            window.setTimeout(function(){
                $(Ž_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                for(var i=0;i<15;++i)
                {
                    if(D[i]==1){
                        $(images[i]).css("opacity","0.2");
                        D[i]=-1;
                        $(images[i]).css("transform","scale(1)");
                    }
                }
            }, 500);
        }
    });

    //cerveny
    $(Č_m).click(function(){
        console.log("Hura");
        if(D[1]!=1 && D[8]!=1 && D[13]!=1){
            $(Č_m).css("border","2px solid rgb(255,0,0)");
            window.setTimeout(function(){
                 $(Č_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                 }, 500);
        }
        else{
            $(Č_m).css("border","2px solid rgb(0,255,0)");
            window.setTimeout(function(){
                $(Č_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                for(var i=0;i<15;++i)
                {
                    if(D[i]==1){
                        $(images[i]).css("opacity","0.2");
                        D[i]=-1;
                        $(images[i]).css("transform","scale(1)");
                    }
                }
            }, 500);
        }
    });

    //hnedy
    $(H_m).click(function(){
        console.log("Hura");
        if(D[7]!=1 && D[9]!=1 && D[14]!=1){
            $(H_m).css("border","3px solid rgb(255,0,0)");
            window.setTimeout(function(){
                 $(H_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                 }, 500);
        }
        else{
            $(H_m).css("border","3px solid rgb(0,255,0)");
            window.setTimeout(function(){
                $(H_m).css("border","2px solid  rgba(36,35,37,0.8)");   
                for(var i=0;i<15;++i)
                {
                    if(D[i]==1){
                        $(images[i]).css("opacity","0.2");
                        D[i]=-1;
                        $(images[i]).css("transform","scale(1)");
                    }
                }
            }, 500);
        }
    });
  
});
    
  