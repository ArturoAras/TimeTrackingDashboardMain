//LINK Y VARIABLE ARCHIVO JSON
const dataJSON = "https://mocki.io/v1/3c1f1625-0992-4e9b-8ebd-6d17e2e94e5a ";


function valoresDefecto(){
    $.get(dataJSON, function (respuesta, estado){
        if (estado === "success"){
            let misDatos = respuesta;
            for ( const dato of misDatos){
                $("section").append(`<div class="div__hoursJeremy div__hours${dato.title}">
                                        <div class="div__logo${dato.title}">
                                            <img src="./images/icon-${dato.title}.svg">
                                        </div>
                                        <div class="div__infoTime">
                                            <div class="div__mainInfo">
                                                <h3 class="title">${dato.title}</h3>
                                                <h3 class="hours hours${dato.title}">${dato.timeframes.daily.current}hrs</h3>
                                            </div>
                                            <div class="div__infoLastWeek">
                                                <img src="./images/icon-ellipsis.svg">
                                                <p class="p__hours${dato.title}">Last week - ${dato.timeframes.daily.previous}hrs</p>
                                            </div>
                                        </div>
                                    </div>`);
            }
        }
    })
}

valoresDefecto()


$('#btn__dailyTime').click( () => {
    $('#btn__weeklyTime').css("color", "rgb(150, 150, 150)");
    $('#btn__dailyTime').css("color", "rgb(255, 255, 255)");
    $('#btn__monthlyTime').css("color", "rgb(150, 150, 150)");

    $.get(dataJSON, function (respuesta, estado){
        if (estado === "success"){
            let misDatos = respuesta;
            for ( const dato of misDatos){
                $(`.hours${dato.title}`).text(`${dato.timeframes.daily.current}hrs`);
                $(`.p__hours${dato.title}`).text(`${dato.timeframes.daily.previous}hrs`);
            }
        }
    })
});

$('#btn__weeklyTime').click( () => {
    $('#btn__weeklyTime').css("color", "rgb(255, 255, 255)");
    $('#btn__dailyTime').css("color", "rgb(150, 150, 150)");
    $('#btn__monthlyTime').css("color", "rgb(150, 150, 150)");
    $.get(dataJSON, function (respuesta, estado){
        if (estado === "success"){
            let misDatos = respuesta;
            for ( const dato of misDatos){
                $(`.hours${dato.title}`).text(`${dato.timeframes.weekly.current}hrs`);
                $(`.p__hours${dato.title}`).text(`${dato.timeframes.weekly.previous}hrs`);
            }
        }
    });
});

$('#btn__monthlyTime').click( () => {
    $('#btn__weeklyTime').css("color", "rgb(150, 150, 150)");
    $('#btn__dailyTime').css("color", "rgb(150, 150, 150)");
    $('#btn__monthlyTime').css("color", "rgb(255, 255, 255)");

    $.get(dataJSON, function (respuesta, estado){
        if (estado === "success"){
            let misDatos = respuesta;
            for ( const dato of misDatos){
                $(`.hours${dato.title}`).text(`${dato.timeframes.monthly.current}hrs`);
                $(`.p__hours${dato.title}`).text(`${dato.timeframes.monthly.previous}hrs`);
            }
        }
    })
});
