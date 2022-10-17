const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
    if (typeof (sampleActivity) === 'string') {
        let yearLive = parseFloat(sampleActivity);

        if (yearLive <= 15 && yearLive > 0) {
            if (isNaN(yearLive)) {
                return false;
            } return Math.ceil(Math.log(MODERN_ACTIVITY / yearLive) / (Math.log(2) / HALF_LIFE_PERIOD));
        } return false
    }
    return false
}

dateSample('9000');

// 13308);

console.log(dateSample('9000'));