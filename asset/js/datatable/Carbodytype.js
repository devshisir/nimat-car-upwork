new DataTable('#carbodytypeTable',{
    responsive: false,
    language: {
        paginate: {
          next: '»', // or '→'
          previous: '«' // or '←' 
        }
    },
    initComplete: function(){
        var notApplyFilterOnColum = [0,2,5];
        var inputFilterOnColum = [1];
        var showFilterBox = 'afterHeading'; // beforeHeading, afterHeading

        $('.filter_row').remove();    // default remove

        var theadSecondRow = '<tr class="filter_row">';
        $(this).find('thead tr td').each(function(index){
            theadSecondRow += '<td class="select_filter-' + index + '"></td>'
        })
        theadSecondRow += '</tr>';
        
        if(showFilterBox === 'beforeHeading'){
            $(this).find('thead').prepend(theadSecondRow);
        }else if(showFilterBox === 'afterHeading'){
            $(theadSecondRow).insertAfter($(this).find('thead tr'));
        }

        this.api().columns().every(function(index){
            var column = this;
            if(inputFilterOnColum.indexOf(index) >= 0 && notApplyFilterOnColum.indexOf(index) < 0){
                $('td.select_filter-' + index).html('<input type="text" class="form-control">');

                $( 'td input.form-control').on( 'keyup change clear', function () {
                    if ( column.search() !== this.value ) {
                        column
                            .search( this.value )
                            .draw();
                    }
                } );
            }else if(notApplyFilterOnColum.indexOf(index) < 0){
                var select = $('<select class="form-select"><option value="">Select</option></select>')

                .on('change', function () {
                    var val = $.fn.dataTable.util.escapeRegex(
                        $(this).val()
                    );
                    column
                        .search( val ? '^'+val+'$' : '', true, false )
                        .draw();
                });

                $('td.select_filter-' + index).html(select);
                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="' + d + '">' + d + '</option>' )
                });
            }
        })

    },
});