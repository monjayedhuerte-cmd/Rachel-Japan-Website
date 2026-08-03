function updateTokyoClock(){

    const now = new Date();

    const tokyo = new Date(
        now.toLocaleString("en-US",{timeZone:"Asia/Tokyo"})
    );

    // Date

    document.getElementById("tokyo-date").textContent =
        tokyo.toLocaleDateString("en-US",{

            weekday:"long",

            year:"numeric",

            month:"long",

            day:"numeric"

        });

    // Digital Clock

    document.getElementById("tokyo-time").textContent =
        tokyo.toLocaleTimeString("en-US",{

            hour:"2-digit",

            minute:"2-digit",

            second:"2-digit",

            hour12:true

        });

    // Analog Clock

    const second = tokyo.getSeconds();

    const minute = tokyo.getMinutes();

    const hour = tokyo.getHours();

    document.getElementById("second-hand").style.transform =
        `translateX(-50%) rotate(${second*6}deg)`;

    document.getElementById("minute-hand").style.transform =
        `translateX(-50%) rotate(${minute*6 + second*0.1}deg)`;

    document.getElementById("hour-hand").style.transform =
        `translateX(-50%) rotate(${hour*30 + minute*0.5}deg)`;

}

updateTokyoClock();

setInterval(updateTokyoClock,1000);