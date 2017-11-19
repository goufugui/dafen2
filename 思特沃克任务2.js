function tiankongti() {
        var tiankongscore=0;
        if(document.getElementById('11').value=='UML')
        {
            tiankongscore+=5;
        }
        if(document.getElementById('121').value=='快')
        {
            tiankongscore+=5;
        }
        if(document.getElementById('122').value=='准')
        {
            tiankongscore+=5;
        }
        if(document.getElementById('123').value=='狠')
        {
            tiankongscore+=5;
        }
        return tiankongscore;
}

function singleti() {
     var singlescore=0;
     var single1=document.getElementsByName('21');
     for(let i=0;i<single1.length;i++)
     {
        if(single1[1].checked)
        {
            singlescore+=10;
            break;
        }
     }
    var single2=document.getElementsByName('22')
    for(let i=0;i<single2.length;i++)
    {
        if(single2[2].checked)
        {
            singlescore+=10;
            break;
        }
    }
    return singlescore;
}

function duoxuanti() {
    var duoxuanscore=0;
    var duoxuan1=document.getElementsByName('31');
    var duoxuan2=document.getElementsByName('32');
    var check1=[];
    var check2=[];
    var right1=['A','B','C'];
    var right2=['A','B','D'];
    var flag1=0;
    var flag2=0;
    for(let i=0;i<duoxuan1.length;i++)
    {
        if(duoxuan1[i].checked)
        {
            check1.push(duoxuan1[i].value);
        }
    }
    for(let i=0;i<right1.length;i++)
    {
        if (check1[i] != right1[i])  break;
        flag1++;
    }
    if(flag1==3) duoxuanscore+=10;

    for(let i=0;i<duoxuan2.length;i++)
    {
        if(duoxuan2[i].checked)
        {
            check2.push(duoxuan2[i].value);
        }
    }
    for(let i=0;i<right2.length;i++)
    {
        if (check2[i] != right2[i])  break;
        flag2++;
    }
    if(flag1==3) duoxuanscore+=10;

    return duoxuanscore;
}

function panduanti() {
    var panduanscore = 0;
    var panduan1 = document.getElementsByName('41');
    var panduan2 = document.getElementsByName('42');
    for (let i = 0; i < panduan1.length; i++) {
        if (panduan1[0].checked) {
            panduanscore += 10;
        }
    }
    for (let i = 0; i < panduan2.length; i++) {
        if (panduan2[1].checked) {
            panduanscore += 10;
        }
    }
    return panduanscore;
}

function jiandati() {
    var jiandascore=0;
    var jianda=document.getElementsByName('51');
    if(jianda.innerText=='我爱科比！')
    {
        jiandascore+=20;
    }
    return jiandascore;
}

function main() {
    var score = jiandati() + tiankongti() + singleti() + duoxuanti() + panduanti();
    alert(score);
}