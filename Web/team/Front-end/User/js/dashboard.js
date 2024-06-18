
function showResults() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var examTable = document.getElementById('exam_table');
    var rows = examTable.getElementsByTagName('tr');

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td');
        var rowText = '';

        for (var j = 0; j < cells.length; j++) {
            rowText += cells[j].innerText.toLowerCase() + '  ';
        }

        if (searchInput === '') {
            rows[i].style.display = ''; 
        } else {
            if (rowText.indexOf(searchInput) > -1) {
                rows[i].style.display = ''; 
            } else {
                rows[i].style.display = 'none'; 
            }
        }
    }
}

function toggleFilterDropdown(filterId) {
    var filterDropdown = document.getElementById('filterDropdown' + filterId);
    filterDropdown.style.display = 'block';
    
    var filterItems = filterDropdown.querySelectorAll('a');
    filterItems.forEach(function (link) {
        link.addEventListener('click', function () {
            var searchFilter = link.textContent.toLowerCase();
            filterDropdown.style.display = 'none';

            var examTable = document.getElementById('exam_table');
            var rows = examTable.getElementsByTagName('tr');

            for (var i = 1; i < rows.length; i++) {
                var cells = rows[i].getElementsByTagName('td');
                var rowText = '';

                for (var j = 0; j < cells.length; j++) {
                    rowText += cells[j].innerText.toLowerCase() + '  ';
                }

                if (searchFilter === '') {
                    rows[i].style.display = '';
                } else {
                    if (rowText.indexOf(searchFilter) > -1) {
                        rows[i].style.display = '';
                    } else {
                        if (filterId === 'State' && searchFilter === 'sắp diễn ra') {
                            let regex = /\b\d{2}\/\d{2}\/\d{4}\b/g
                            if (rowText.match(regex)) 
                                rows[i].style.display = '';
                            else 
                                rows[i].style.display = 'none';
                        }
                        else
                            rows[i].style.display = 'none';
                    }
                }
            }
        });
    });
}
window.onclick = function (event) {
    var filterDropdowns = document.querySelectorAll('.filter-dropdown-content');
    
    filterDropdowns.forEach(function(filterDropdown) {
        var filterButton = filterDropdown.parentElement.querySelector('.filterbtn');

        if (!filterButton.contains(event.target)) {
            filterDropdown.style.display = "none";
        }
    });
}

function exam_page(status) {
    if (status === 'Tự do' || status === 'Trong thời gian') {
        window.location.href = './exam.html';
    } else if (status === 'sắp đến hạn') {
        showAlert('Chưa đến thời gian làm bài thi');
    } else if (status === 'Ngoài thời gian') {
        showAlert('Quá hạn làm bài thi');
    }
}

function showAlert(message) {
    alert(message);
}
