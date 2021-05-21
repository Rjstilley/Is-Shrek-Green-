d3.json("/api").then(data => {
    var data = data

    //On load
    var table = d3.select("tbody");
    table.html("");
    var tableBody = d3.select("tbody");
    data.forEach(EyeData => {
        var trow = tableBody.append("tr")
        Object.values(EyeData).forEach(value => {
            trow.append("td").text(value)
        })
    })
});