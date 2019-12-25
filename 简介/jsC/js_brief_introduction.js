var nodeList = document.getElementsByClassName('node');
var liList = document.getElementsByClassName('history-main-box');
var hsty_m=document.getElementsByClassName('history-main');
var index=0;
var company_technology1=document.getElementsByClassName('company_technology1');
var company_technology2=document.getElementsByClassName('company_technology2');
var company_technology3=document.getElementsByClassName('company_technology3');
var company_technology4=document.getElementsByClassName('company_technology4');
var company_technology5=document.getElementsByClassName('company_technology5');
var tcnlg_img1=document.getElementsByClassName('field_img1');
var tcnlg_img2=document.getElementsByClassName('field_img2');
var tcnlg_img3=document.getElementsByClassName('field_img3');
var tcnlg_img4=document.getElementsByClassName('field_img4');
var tcnlg_img5=document.getElementsByClassName('field_img5');
var tcnlg_text=document.getElementsByClassName('technology_text');
var move_top;
for(var i=0;i<nodeList.length;i++){
    nodeList[i].index=i;
    nodeList[i].onclick=function(){
        index=this.index;   
        for (var j = 0; j < nodeList.length; j++) {
            nodeList[j].className = "node";
        }
        nodeList[index].className="node active";
        hsty_m[0].style.left=-1200*index+'px';
    }
}
//鼠标滑过，向上移动
//1
company_technology1[0].onmouseover=function(){
    tcnlg_img1[0].style.top=-35+'px';
    tcnlg_img1[0].style.left=-35+'px';
    tcnlg_text[0].style.opacity=0.8;
    tcnlg_text[1].style.opacity=0.8;
}
company_technology1[0].onmouseout=function(){
    tcnlg_img1[0].style.top=0+'px';
    tcnlg_img1[0].style.left=0+'px';
    tcnlg_text[0].style.opacity=0;
    tcnlg_text[1].style.opacity=0;
}
//2
company_technology2[0].onmouseover=function(){
    tcnlg_img2[0].style.top=-35+'px';
    tcnlg_img2[0].style.left=-35+'px';
    tcnlg_text[2].style.opacity=0.8;
    tcnlg_text[3].style.opacity=0.8; 
}
company_technology2[0].onmouseout=function(){
    tcnlg_img2[0].style.top=0+'px';
    tcnlg_img2[0].style.left=0+'px';
    tcnlg_text[2].style.opacity=0;
    tcnlg_text[3].style.opacity=0;
}
//3
company_technology3[0].onmouseover=function(){
    tcnlg_img3[0].style.top=-35+'px'; 
    tcnlg_img3[0].style.left=-35+'px';
    tcnlg_text[4].style.opacity=0.8;
    tcnlg_text[5].style.opacity=0.8;
}
company_technology3[0].onmouseout=function(){
    tcnlg_img3[0].style.top=0+'px';
    tcnlg_img3[0].style.left=0+'px';
    tcnlg_text[4].style.opacity=0;
    tcnlg_text[5].style.opacity=0;
}
//4
company_technology4[0].onmouseover=function(){
    tcnlg_img4[0].style.top=-35+'px'; 
    tcnlg_img4[0].style.left=-35+'px';
    tcnlg_text[6].style.opacity=0.8;
    tcnlg_text[7].style.opacity=0.8;
}
company_technology4[0].onmouseout=function(){
    tcnlg_img4[0].style.top=0+'px';
    tcnlg_img4[0].style.left=0+'px';
    tcnlg_text[6].style.opacity=0;
    tcnlg_text[7].style.opacity=0;
}
//5
company_technology5[0].onmouseover=function(){
    tcnlg_img5[0].style.top=-35+'px'; 
    tcnlg_img5[0].style.left=-35+'px';
    tcnlg_text[8].style.opacity=0.8;
    tcnlg_text[9].style.opacity=0.8;
}
company_technology5[0].onmouseout=function(){
    tcnlg_img5[0].style.top=0+'px';
    tcnlg_img5[0].style.left=0+'px';
    tcnlg_text[8].style.opacity=0;
    tcnlg_text[9].style.opacity=0;
}

//