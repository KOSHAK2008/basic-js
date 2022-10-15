function getSeason(date = 'no-value') {
    if (date == 'no-value') return 'Unable to determine the time of year!';

    if (date instanceof Date) {
        if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error('Invalid date!');

        const month = date.getMonth();
        if ((month <= 12 && month >= 11) || (month == 1)) {
            return 'winter';
        } if (month <= 4 && month >= 2) {
            return 'spring';
        } if (month <= 5 && month >= 8) {
            return 'summer';
        } if (month <= 9 && month >= 10) {
            return 'autumn';
        }
    }
    throw new Error('Invalid date!');
}

getSeason(new Date(2018, 4, 17, 11, 27, 4, 321),);

console.log(new Date(2018, 4, 17, 11, 27, 4, 321),);

  //'summer'