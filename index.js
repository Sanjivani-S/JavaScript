//console.log( ' hello world!! ');
//alert (" alert!!");

var flag = false;

var hdr = document.querySelector("h1");
hdr.style.color = "purple";

function sleepin (weekday, vacation)
{

    if ((weekday== true) && (vacation == true))
    {
        flag = true;
    }
    else if ((weekday== true) && (vacation == false))
    {
        flag = false;
    }
    else if ((weekday== false) && (vacation == true))
    {

        flag = true;
    }
    else if ((weekday== false) && (vacation == false))
    {
        flag = true;
    }

    console.log ( 'I can sleep more = ' + flag);
}

function monkeyTrouble(aSmile, bSmile)
{
    flag = false;
    if ((aSmile == true) && (bSmile == true))
    {
        flag = true;
    }
    else if ((aSmile == false) && (bSmile == false))
    {
        flag = true;
    }

    console.log ('We are in trouble = ' + flag);
}

function stringTimes (str, n)
{

    for (i=1; i<n; i++)
    {
        str = str + str;
    }
    console.log(str);
}

function luckySum(a,b,c)
{
    var sum =0;
    if (a<13) 
    {
        sum = sum + a;
        if (b < 13)
        {
            sum = sum + b;
            if (c < 13)
            {
                sum = sum + c;
            }
        }
    }

    console.log ('Lucky sum is = ' + sum);
}

function caught_speeding (speed, is_birthday)
{
    var tkt_value = 0;

    if (is_birthday == false)
    {
        if (speed <= 60 )
        {
            tkt_value = 0;
        }
        else if (speed <= 80 )
        {
            tkt_value = 1;
        }
        else if (speed > 80 )
        {
            tkt_value = 2;
        }
    }
    else
    {
        if (speed <= 65 )
        {
            tkt_value = 0;
        }
        else if (speed <= 85 )
        {
            tkt_value = 1;
        }
        else if (speed > 85 )
        {
            tkt_value = 2;
        } 
    }

    console.log ('ticket value = ' + tkt_value);
}

console.log(' node is working!!');