function getData() {
    fetch('first-menu.json')
        .then((res) => {
            if (res.status != 200) {
                console.log('Error ' + res.status);
            }
            else {
                var data = res.json();
                console.log(data);
                return data;
            }
        })
        .then((json) => {
            var components = `
            <ul>
                <li class="link" data-value="0" onclick="getItems(this)">${json.principal[0]}</li>
                <li class="link" data-value="1" onclick="getItems(this)">${json.principal[1]}</li>
                <li class="link">${json.principal[2]}</li>
                <li class="link">${json.principal[3]}</li>
            </ul>
        `
            var videoContainer = document.querySelector('.video-container');

            videoContainer.innerHTML = components;

            var data = json;

            localStorage.setItem('marketing', JSON.stringify(data.marketing));
            localStorage.setItem('management', JSON.stringify(data.management));
        })
        .catch((err) => {
            console.error('Ocurrio un error con el fetch', err);
        });
}

function getItems(element) {

    var value = element.getAttribute("data-value");
    var itemContainer = document.querySelector('.items-container');



    if (value == 0) {

        var data = localStorage.getItem('marketing');
        var arr = JSON.parse(data);

        console.log(arr);

        itemContainer.innerHTML = `
        <ul>
            <li class="link-2">${arr[0]}</li>
            <li class="link-2">${arr[1]}</li>
            <li class="link-2">${arr[2]}</li>
        </ul>
    `
    }
    else {
        var data = localStorage.getItem('management');
        var arr = JSON.parse(data);

        itemContainer.innerHTML = `
        <ul>
            <li class="link-2">${arr[0]}</li>
            <li class="link-2">${arr[1]}</li>
        </ul>
    `
    }

}

