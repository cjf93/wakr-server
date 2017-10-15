var alarmRing = new Audio('http://localhost:8080/static/js/alarm.mp3');

function incMinTime() {
    tInf = time.split(":")
    hr = parseInt(tInf[0])
    min = parseInt(tInf[1])

    min++;
    if (min == 60) {
        min = 0;
        hr++;

        if (hr == 24) {
            hr = 0
        }
    }

    txt = (hr < 10) ? '0' + hr : hr;
    txt += ":"
    txt += (min < 10) ? '0' + min : min;

    time = txt;
    $('.mainHour').text(txt)
    $('.gmHour').text(txt)
}
window.setInterval(incMinTime, 1000*60)

function getInfo() {
    // TODO: get info
    $.get( "http://localhost:8080/getinfo", function( data ) {
        if (info.AlarmRinging && !data.AlarmRinging && !data.AlarmFlag) {
            console.log("333")
            console.log(info)
            console.log(data)
            showGame();
        }    
        if (!info.AlarmRinging && data.AlarmRinging) {
            console.log("22222")
            console.log(info)
            console.log(data)
            showRing();
        }
        if (!info.CodeCorrect && data.CodeCorrect) {
            $('#gameDiv').hide(0, function() {
                $('#mainDiv').show(0)
            });
        }
        if (!info.Shame && data.Shame) {
            $('#gameDiv').hide(0, function() {
                $('#mainDiv').hide(0)
                $('#ringDiv').hide(0)
                $('#alarmDiv').hide(0)
                $('#shameDiv').show(0)
            });
        }

        console.log(data)
        info = data;
    });
}
window.setInterval(getInfo, 1000)

function showAlarmSettings() {
    $('#mainDiv').hide(0, function() {
        $('#alarmDiv').show(0)
        $('.alarmHour').text(alarm);
    });
}

function showRing() {
    $('#mainDiv').hide(0, function() {
        $('#alarmDiv').hide(0)
        $('#gameDiv').hide(0)
        $('#ringDiv').show(0)

        alarmRing.play();
        $('.alarmHour').text(alarm);
    });
}

function toggleOff() {
    $('#alarmDiv').hide(0, function() {
        $('#mainDiv').show(0)
    });

    $.get( "http://localhost:8080/toggleoff")
}

function toggleOn() {
    $('#alarmDiv').hide(0, function() {
        $('#mainDiv').show(0)
    });
    $.get( "http://localhost:8080/toggleon")
}

function hourUp() {
    tInf = alarm.split(":")
    hr = parseInt(tInf[0])
    min = parseInt(tInf[1])

    hr++;
    if (hr == 24) {
        hr = 0
    }

    txt = (hr < 10) ? '0' + hr : hr;
    txt += ":"
    txt += (min < 10) ? '0' + min : min;

    alarm = txt;
    $('.alarmHour').text(txt);
    $.get( "http://localhost:8080/hourup")
}

function hourDown() {
    tInf = alarm.split(":")
    hr = parseInt(tInf[0])
    min = parseInt(tInf[1])

    hr--;
    if (hr < 0) {
        hr = 23
    }

    txt = (hr < 10) ? '0' + hr : hr;
    txt += ":"
    txt += (min < 10) ? '0' + min : min;

    alarm = txt;
    $('.alarmHour').text(txt);
    $.get( "http://localhost:8080/hourdown")
}

function minUp() {
    tInf = alarm.split(":")
    hr = parseInt(tInf[0])
    min = parseInt(tInf[1])

    min++;
    if (min==60) {
        min = 0
    }

    txt = (hr < 10) ? '0' + hr : hr;
    txt += ":"
    txt += (min < 10) ? '0' + min : min;

    alarm = txt;
    $('.alarmHour').text(txt);
    $.get( "http://localhost:8080/minuteup")
}

function minDown() {
    tInf = alarm.split(":")
    hr = parseInt(tInf[0])
    min = parseInt(tInf[1])

    min--;
    if (min < 0) {
        min = 59
    }

    txt = (hr < 10) ? '0' + hr : hr;
    txt += ":"
    txt += (min < 10) ? '0' + min : min;

    alarm = txt;
    $('.alarmHour').text(txt);
    $.get( "http://localhost:8080/minutedown")
}

function game1() {
    $.get( "http://localhost:8080/button1")
}

function game2() {
    $.get( "http://localhost:8080/button2")
}

function game3() {
    $.get( "http://localhost:8080/button3")
}

function showGame() {
    $('#ringDiv').hide(0, function() {
        $.get("http://localhost:8080/stopalarm")
        alarmRing.pause()
        alarmRing.currentTime = 0;
        $('#gameDiv').show(0)
        startGame()
        window.setTimeout(function() {
            $.get("http://localhost:8080/checktimepassed")
        }, 1000 * 60 * 5)
    });
}

function startGame() {
    choices = ['game1','game2','game3']
    done = {}
    for (i = 0; i < 3; i++) {
        choice = choices[parseInt(Math.floor(Math.random() * 3))];
        while (done[choice] == true) {
            choice = choices[parseInt(Math.floor(Math.random() * 3))];
        }

        done[choice] = true;
        $('.' + choice).css('left', 40 + 120 * i);
        console.log('.' + choice)
    }
}
function snooze() {
    alarmRing.pause()
    alarmRing.currentTime = 0;

    $('#ringDiv').hide(0, function() {
        $('#mainDiv').show(0)
    });

    $.get( "http://localhost:8080/snooze")

}

function shameSeen() {
    $.get("http://localhost:8080/shameseen")

    $('#shameDiv').hide(0, function() {
        $('#mainDiv').show(0)
    });
}

$( function() {
        //showRing();
})