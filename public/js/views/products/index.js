var deleteProduct = function(address){

    var success = function (response) {
        var data = response;
        if (data) {
            initialize();
        } else {
            alert('Error');
        }
    }

    var error = function (response) {
        return false;
    }

    var message = {
        address: address
    };

    //POST("/orders/cancel", message, success, error);
}

var editProduct = function(address){

    var success = function (response) {
        var data = response;
        if (data) {
            initialize();
        } else {
            alert('Error');
        }
    }

    var error = function (response) {
        return false;
    }

    var message = {
        address: address
    };

    //POST("/orders/cancel", message, success, error);
}

var listProducts = function (url, elementName) {
    var success = function (data) {
        buildingTable(data, elementName);
    }

    var error = function (response) {
        return false;
    }

    GET(url, null, success, error);
}

var buildingTable = function (data, elementName) {
    $(`#${elementName}`).empty();

    $.each(data, function (index, item) {
        var rowItem = $(`<tr id='${index}'></tr>`);
        
        var columnImage = $(`<td>
        <div class="product-item">
            <img src="img/assets/${item.image}" alt="${item.name}" style="max-height: 64px; max-width: 64px">
            <span class="text-center text-lg text-medium">${item.name}</span>
        </div>
        </td>`);

        var columnPrice = $(`<td class="text-center text-lg text-medium" id='usdPrice'>$${item.usdPrice}</td>`);
        var columnButton = $(`<td class="text-center text-lg text-medium"><button type="button" class="genric-btn primary small" onclick="javascript:deleteProduct('${index}')">Delete</button></td>`);

        rowItem.append(columnImage);
        rowItem.append(columnPrice);
        rowItem.append(columnButton);

        $(`#${elementName}`).append(rowItem);
    });
}

var initialize = function () {
    //listProducts("/orders/active", 'tbodyActiveOrder');
}

initialize();
//setInterval(initialize, 30000);