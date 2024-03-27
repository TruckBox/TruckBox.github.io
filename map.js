

function geoFindMe() {

    const status = document.querySelector("#status");
    const mapLink = document.querySelector("#map-link");

    mapLink.href = "";
    mapLink.textContent = "";

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = "";

        // Open Street Maps
        // mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;

        // Google Maps
        mapLink.href = `https://maps.google.com?q=/${latitude},${longitude}`;

        mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

    function error() {
        status.textContent = "Unable to retrieve your location";
    }

    if (!navigator.geolocation) {
        status.textContent = "Geolocation is not supported by your browser";
    } else {
        status.textContent = "Locating…";
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

document.querySelector("#find-me").addEventListener("click", clickWorks);


/*
 if (navigator.geolocation) {
        // Geolocation is available
        navigator.geolocation.getCurrentPosition((position) => {
            const longitude = position.coords.longitude;
            const latitude = position.coords.latitude;

            document.getElementById("long").innerHTML = "Longitude:" + longitude;
            document.getElementById("lat").innerHTML = "Latitude:" + latitude;

            mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`

        })

    } else {
        console.log("Geolocation is not supported by your browser")
    }
*/