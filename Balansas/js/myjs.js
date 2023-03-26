let getPath = window.location.pathname;
let getAppName = getPath.substring(getPath.indexOf("/", getPath.indexOf("/") + 1), getPath.indexOf('/'));
let locationApi = window.location.origin + getAppName + "/wp-json/wp/v2/custom-ep"
fetch(locationApi)
    .then((response) => response.json())
    .then((data) => {

        let min_i = Math.min(...data.map(e => e.my_income))
        let max_i = Math.max(...data.map(e => e.my_income))
        let min_c = Math.min(...data.map(e => e.my_costs))
        let max_c = Math.max(...data.map(e => e.my_costs));

        let filter_min_income = data.filter(e => Number(e.my_income).toFixed(2) === Number(min_i).toFixed(2));
        let filter_max_income = data.filter(e => Number(e.my_income).toFixed(2) === Number(max_i).toFixed(2));
        let filter_min_costs = data.filter(e => Number(e.my_costs).toFixed(2) === Number(min_c).toFixed(2));
        let filter_max_costs = data.filter(e => Number(e.my_costs).toFixed(2) === Number(max_c).toFixed(2));

        filter_min_income.forEach(element => {
            let myP = document.createElement("p");
            myP.classList.add("txc");
            myP.textContent = `${element.my_month}  ${element.my_income}`;
            myP.style.margin = "0 auto";
            document.getElementById("min_i").append(myP);
        });

        filter_max_income.forEach(element => {
            let myP = document.createElement("p");
            myP.classList.add("txc");
            myP.textContent = `${element.my_month}  ${element.my_income}`;
            myP.style.margin = "0 auto";
            document.getElementById("max_i").append(myP);

        });


        filter_min_costs.forEach(element => {
            let myP = document.createElement("p");
            myP.classList.add("txc");
            myP.textContent = `${element.my_month}  ${element.my_costs}`;
            myP.style.margin = "0 auto";
            document.getElementById("min_c").append(myP);
        });

        filter_max_costs.forEach(element => {
            let myP = document.createElement("p");
            myP.classList.add("txc");
            myP.textContent = `${element.my_month}  ${element.my_costs}`;
            myP.style.margin = "0 auto";
            document.getElementById("max_c").append(myP);
        });

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


        let year_income = data.map(e => Number(e.my_income)).reduce((a, b) => b + a);
        document.getElementById("year_i").textContent = year_income.toFixed(2);

        let year_costs = data.map(e => Number(e.my_costs)).reduce((a, b) => b + a);
        document.getElementById("year_c").textContent = year_costs.toFixed(2);

        let year_balance = data.map(e => Number(e.my_income) - Number(e.my_costs)).reduce((a, b) => b + a);
        document.getElementById("year_b").textContent = year_balance.toFixed(2);

    });

