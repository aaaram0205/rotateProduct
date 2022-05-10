var contenitore,
    contenitoreDelContenitore,
    myVideoPlayer,
    ultimoValoreDragLaterale = 0,
    mouseDownRotazione = !1,
    isPlay = !0,
    isFullScreen = !1,
    rotazione2dAutomatica = !0,
    cartellaDipendenze = "",
    isMobileRotation = !1,
    tempoAttualeVideo = 0,
    durataVideo = 0;


function rotation2d(e, o, i) {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (isMobileRotation =! 0),
    (contenitore = $("#" + e)).css("position", "relative"),
    contenitore.css("background-color", "white"),
    contenitore.css("height", "100%"),
    contenitore.css("width", "100%"),
    contenitore.empty(),
    contenitoreDelContenitore = contenitore.parent(),
    cartellaDipendenze = "/" !== i[i.length - 1]
        ? i + "/"
        : i;
    var t = "";
    t += '<video id="imgPrincipale" playsinline autoplay muted loop draggable="false" style="width: 100%; height: 100%; object-fit: contain; user-drag: none;">',
    t += '<source src="' + o + '" type="video/mp4">',
    t += "Your browser does not support the video tag.",
    t += "</video>",
    contenitore.append(t),
    (myVideoPlayer = document.getElementById("imgPrincipale")).controls = !1,
    myVideoPlayer.addEventListener("loadedmetadata", function () {
        durataVideo = myVideoPlayer.duration,
        setInterval(function () {
            isPlay && rotazione2dAutomatica && (tempoAttualeVideo = myVideoPlayer.currentTime)
        }, 50),
        creaInterfaccia()
    }),
    $(document).on("dragstart", function (e) {
        if ("video" == e
                .target
                .nodeName
                .toLowerCase()) 
            return !1
        
    })
}


function creaInterfaccia() {
    $("#contLoading").remove(),
    inizializzaRotazione2D();
    var e = "";
    !1 === isMobileRotation
        ? (e += '<div id="btnPlayPausaRotazione2d" style="cursor:pointer; position: absolute; z-index:1000; left: calc(50% - 32px); bottom: 30px; transform: translateX(-50%);height: 55px; width: 55px; background-image: url(http://sbic2.inpiad.net/theme/sbic2/images/sub/ico-pause.png); background-size: cover;"></div>',
		e += '<div id="btnFullScreenRotazione2d" style="cursor:pointer; position: absolute; z-index:1000;  left:calc(50% + 32px); bottom: 30px; transform: translateX(-50%); height: 55px; width: 55px; background-image: url(http://sbic2.inpiad.net/theme/sbic2/images/sub/ico-zoom.png); background-size: cover;"></div>')
        : (e += '<div id="btnPlayPausaRotazione2d" style="cursor:pointer; position: absolute; z-index:1000; left:calc(50% - 32px); bottom: 30px;transform: translateX(-50%); height: 55px; width: 55px; background-image: url(http://sbic2.inpiad.net/theme/sbic2/images/sub/ico-pause.png); background-size: cover;"></div>'),
    contenitore.append(e),
    $("#btnPlayPausaRotazione2d").click(function () {
        togleRotazioneAutomatica()
    }),
    $("#btnFullScreenRotazione2d").click(function () {
        togleFullScreenRotazione2d()
    })
}


function togleFullScreenRotazione2d() {
    if (isFullScreen) {
        var e = contenitore.detach();
        contenitore
            .css("position", "relative")
            .css("top", "")
            .css("left", "")
            .css("height", "")
            .css("z-index", ""),
        contenitoreDelContenitore.append(e),
        $("#btnFullScreenRotazione2d").css("background-image", "url(http://sbic2.inpiad.net/theme/sbic2/images/sub/ico-zoom.png)"),   // ÆË¾÷Á¾·á½Ã
        $("body").css("overflow-y", ""),
        isFullScreen = !1
    } else {
        e = contenitore.detach();
        contenitore
            .css("position", "fixed")
            .css("top", "0px")
            .css("left", "0px")
            .css("height", "100vh")
            .css("z-index", "1000"),
        $("body").append(e),
        $("#btnFullScreenRotazione2d").css("background-image", "url(http://sbic2.inpiad.net/theme/sbic2/images/sub/ico-zoom-p.png)"),   // ÆË¾÷¿¡¼­
        $("body").css("overflow-y", "hidden"),
        isFullScreen = !0
    }
}


function togleRotazioneAutomatica() {
    rotazione2dAutomatica
        ? ($("#btnPlayPausaRotazione2d").css("background-image", "url(http://sbic2.inpiad.net/theme/sbic2/images/sub/ico-play.png)"), isPlay =! 1, rotazione2dAutomatica =! 1, myVideoPlayer.pause())
        : ($("#btnPlayPausaRotazione2d").css("background-image", "url(http://sbic2.inpiad.net/theme/sbic2/images/sub/ico-pause.png)"), isPlay =! 0, rotazione2dAutomatica =! 0, myVideoPlayer.play())
}


function inizializzaRotazione2D() {
    $("#imgPrincipale").css("cursor", "pointer"),
    $(document).bind("touchend", function (e) {
        mouseDownRotazione = !1
    }),
    $(document).bind("touchstart", function (e) {
        mouseDownRotazione = !0
    }),
    $(document).mousedown(function () {
        mouseDownRotazione = !0
    }).mouseup(function () {
        mouseDownRotazione = !1
    }),
    $("#imgPrincipale").bind("touchstart ", function (e) {
        var o = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        ultimoValoreDragLaterale = o.pageX,
        isPlay && (rotazione2dAutomatica =! 1, myVideoPlayer.pause())
    }),
    $("#imgPrincipale").mousedown(function (e) {
        ultimoValoreDragLaterale = e.pageX,
        isPlay && (rotazione2dAutomatica =! 1, myVideoPlayer.pause())
    }),
    $(document).bind("touchend", function (e) {
        isPlay && (rotazione2dAutomatica =! 0, myVideoPlayer.play())
    }),
    $(document).mouseup(function (e) {
        isPlay && (rotazione2dAutomatica =! 0, myVideoPlayer.play())
    }),
    $("#imgPrincipale").bind("touchmove", function (e) {
        isPlay && mouseDownRotazione && (isPlay =! 1, rotazione2dAutomatica =! 1, myVideoPlayer.pause(), $("#btnPlayPausaRotazione2d").css("background-image", "url(http://sbic2.inpiad.net/theme/sbic2/images/sub/ico-play.png)")),
        ruota((e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]).pageX)
    }),
    $("#imgPrincipale").mousemove(function (e) {
        isPlay && mouseDownRotazione && (isPlay =! 1, rotazione2dAutomatica =! 1, myVideoPlayer.pause(), $("#btnPlayPausaRotazione2d").css("background-image", "url(http://sbic2.inpiad.net/theme/sbic2/images/sub/ico-play.png)")),
        ruota(e.pageX)
    })
}


function ruota(e) {
    if (!0 === mouseDownRotazione) {
        var o = ultimoValoreDragLaterale - e,
            i = !1;
        (o > 1 || o < -1) && (tempoAttualeVideo += .01 * o, ultimoValoreDragLaterale = e, i =! 0),
        !0 === i && (
            tempoAttualeVideo < 0
                ? tempoAttualeVideo = durataVideo
                : tempoAttualeVideo > durataVideo && (tempoAttualeVideo = 0),
            myVideoPlayer.currentTime = tempoAttualeVideo
        )
    }
}