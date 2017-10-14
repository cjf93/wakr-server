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
    $('.mainHour').text(txt);
}
window.setInterval(incMinTime, 1000*60)

function getInfo() {
    // TODO: get info
    $.get( "http://localhost:8080/getinfo", function( data ) {
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