$(function () {
    $('#date1, #date2').datetimepicker({
    format: 'L', // Date format (e.g., MM/DD/YYYY)
    icons: {
        time: 'far fa-clock',
        date: 'far fa-calendar',
        up: 'fas fa-chevron-up',
        down: 'fas fa-chevron-down',
        previous: 'fas fa-chevron-left',
        next: 'fas fa-chevron-right',
        today: 'fas fa-calendar-check',
        clear: 'fas fa-trash-alt',
        close: 'fas fa-times'
    }
    });
});