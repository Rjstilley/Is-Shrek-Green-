console.log("i am app");

d3.json("/api").then(data => {
    // console.log('this is data loaded from the api. ');
    // console.log(data);
    //Create pie chart for gender
    Male = 0
    Female = 0
    data.forEach(element => {
        // console.log(element)
        if (element.Patient_Sex === "Male") { Male = Male + 1 }
        else { Female = Female + 1 }
    });
    var chart = [{
        values: [Male, Female],
        labels: ['Male', 'Female'],
        type: 'pie',
        marker: {
            colors: ['rgb(56, 75, 126)', 'rgb(18, 36, 37)']
        },
        showlegend: true
    }];

    var layout1 = {
        height: 400,
        width: 500,
        title: {
            text: "Eye Diseases by Gender",
            font: {
                family: 'sans-serif',
                size: 24,
                color: '#9807a5'
            },

        },
        plot_bgcolor: "black",
        paper_bgcolor: "#d1cfcf"

    }

    Plotly.newPlot("pie", chart, layout1);

    //Create bar chart for condition Normal
    Glaucoma = 0
    Cataract = 0
    Age_Related_Macular_Degeneration = 0
    Hypertension = 0
    Myopia = 0
    Other = 0
    Diabetes = 0;
    // console.log(data[0])
    data.forEach(element => {

        Diabetes = Diabetes + element.Diabetes
        Glaucoma = Glaucoma + element.Glaucoma
        Cataract = Cataract + element.Cataract
        Age_Related_Macular_Degeneration = Age_Related_Macular_Degeneration + element.Age_Related_Macular_Degeneration
        Hypertension = Hypertension + element.Hypertension
        Myopia = Myopia + element.Myopia
        Other = Other + element.Other
    });
    var bar_data = [{
        x: ['Diabetes', 'Glaucoma', 'Cataract', 'Macular Degen', 'Hypertension', 'Myopia', 'Other'],
        y: [Diabetes, Glaucoma, Cataract, Age_Related_Macular_Degeneration, Hypertension, Myopia, Other],
        type: 'bar',
        marker: {
            color: ['rgb(177, 127, 38)', 'rgb(205, 152, 36)', 'rgb(99, 79, 37)', 'rgb(129, 180, 179)', 'rgb(124, 103, 37)', 'rgb(177, 180, 34)', 'rgb(206, 206, 40)']
        },
        showlegend: false
    }];



    var layout2 = {
        height: 400,
        width: 500,
        title: {
            text: "Eye Diseases",
            font: {
                family: 'sans-serif',
                size: 24,
                color: '#9807a5'
            },

        },
        xaxis: { title: "Condition" },
        yaxis: { title: "Frequency" },
        plot_bgcolor: "#d1cfcf",
        paper_bgcolor: "#d1cfcf"

    }

    Plotly.newPlot("bar", bar_data, layout2);


  //Create pie chart for left and right eye diseases
//Create pie chart for gender
Left_normal = 0
Right_normal = 0
row = 0
data.forEach(element => {
    // console.log(element.length)
    row = row + 1

    if (element.Left_Diagnostic_Keywords.includes("normal")) { Left_normal = Left_normal + 1 }

    if (element.Right_Diagnostic_Keywords.includes("normal")) { Right_normal = Right_normal + 1 }
    
});

Left = row - Left_normal
Right = row - Right_normal


var chart = [{
    values: [Left, Right],
    labels: ['Left', 'Right'],
    type: 'pie',
    marker: {
        colors: ['rgb(56, 75, 126)', 'rgb(18, 36, 37)']
    },
    showlegend: true
}];

var layout3 = {
    height: 400,
    width: 500,
    title: {
        text: "Eye Diseases In The Left vs Right Eye ",
        font: {
            family: 'sans-serif',
            size: 24,
            color: '#9807a5'
        },

    },
    plot_bgcolor: "black",
    paper_bgcolor: "#d1cfcf"

}

Plotly.newPlot("pie2", chart, layout3);





});


