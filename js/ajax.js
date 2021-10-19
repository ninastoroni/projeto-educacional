let data = [
    ['Task', 'Hours per Day'],
    ['trabalho',5],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]
];

function ajaxContent(element){
    let myView = element.getAttribute("view")
    let path = "/html/views/" + myView +".html"

    let content = document.querySelector("#main-content");

    fetch(path).then(
        (response) => {
            let html = response.text();
            return html;
        }
        
    ).then(
        (html) => {
            content.innerHTML = html;
            drawChart(data);
        }

    )
    

}