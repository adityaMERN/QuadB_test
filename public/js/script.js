const submitBtn = document.getElementById("btn-submit");
const getInfo = async(event) => {
    event.preventDefault();
    let url = `https://cors-anywhere.herokuapp.com/https://api.wazirx.com/api/v2/tickers`
    fetch(url, { headers: { 'Access-Control-Allow-Origin': '*' } }).then(response => {
        return response.json();
    }).then(data => {
        var res = []
        for (var i in data) {
            res.push(data[i]);
        }
        newRes = res.slice(0, 10)
            //console.log(newRes.length);
        buildTable(newRes)

        function buildTable(data) {
            var table = document.getElementById("data-table")
            for (var i = 0; i < 10; i++) {
                var row = `<tr>
                    <td>${i}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].last}</td>
                    <td>${data[i].buy +"/"+data[i].sell}</td>
                    <td>${data[i].volume}</td>
                    <td>${data[i].base_unit}</td>
                </tr>`
                table.innerHTML += row
            }
        }
    })
}
submitBtn.addEventListener("click", getInfo);




// if (res.length > 0) {

//     var temp = "";

//     newRes.forEach((itemData, index) => {
//         console.log(itemData.name);
//         // temp += "<td>" + index + "</td>";;
//         // temp += "<td>" + itemData.name + "</td>";
//         // temp += "<td>" + itemData.last + "</td>";
//         // temp += "<td>" + itemData.buy + "/" + itemData.sell + "</td></tr>";
//         // temp += "<td>" + itemData.volume + "</td>";
//         // temp += "<td>" + itemData.base_unit + "</td>";

//     });
//     document.getElementById('data').innerHTML = temp;
// } else {
//     alert("Nothing to show.Check again later.")
// }