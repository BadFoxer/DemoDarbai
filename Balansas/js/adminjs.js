let getPath = window.location.pathname;
let getAppName = getPath.substring(getPath.indexOf("/", getPath.indexOf("/") + 1), getPath.indexOf('/'));
let locationApi = window.location.origin + getAppName + "/wp-json/wp/v2/custom-ep";
fetch(locationApi)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
            let balansas = element.my_income - element.my_costs;
            let dataTr = document.createElement("tr");
            let monthTd = document.createElement("td")
            let incomeTd = document.createElement("td");
            let costsTd = document.createElement("td");
            let balanceTd = document.createElement("td");
            let monthsText = document.textContent = `${element.my_month}`;
            let incomeText = document.textContent = `${element.my_income}`;
            let costsText = document.textContent = `${element.my_costs}`;
            let balanceText = document.textContent = `${balansas.toFixed(2)}`;
            dataTr.append(monthTd);;
            monthTd.append(monthsText);
            dataTr.append(incomeTd);
            incomeTd.append(incomeText);
            dataTr.append(costsTd);
            costsTd.append(costsText);
            dataTr.append(balanceTd);
            balanceTd.append(balanceText);
            document.getElementById("myTableData").append(dataTr);
        });
    })