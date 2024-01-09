const moment = require('moment');
const currentMonth = moment().format('MMMM');
const randomNames = [
    'Aditya Singh',
    'Dua Lipa',
    'Bhupendra Jogi',
    'Aditya Kumar',
    'Amit Shah',
    'Katha Patel',
    'Aditi Kumari',
    'Donald Trump',
    'Georgia Meloni',
    'Vladimir Putin',
    'Taylor Swift',
    'Mahi Ambekar',
    'Ishita Janwale',
    'Niharika Andhare',
    'Saisha Gupta',
    'Ankita Hiwale',
    'Jay Shah',
    'Mrunal Barve',
    'Sofia Ansari',
    'Jenny Laskar',
    'Utkarsh Kumar',
    'Navneet Kumar',
    'Advait Desai',
    'Ananya Shah',
    'Aarav Joshi',
    'Arjun Gupta',
    'Sofia Patel',
    'Aditya Yogi',
    'Aryan Shah',
    'Saisha Verma',
    'Advait Patel',
    'Ananya Gupta',
    'Arjun Desai'
];

const getPastSixMonths = () => {
    const pastSixMonths = [];

    for (let i = 1; i <= 6; i++) {
        const currentDate = moment();
        const pastMonth = currentDate.subtract(i, 'months');
        pastSixMonths.push(pastMonth.format('MMMM-YYYY'));
    }

    return pastSixMonths.reverse();
};

const getDatesFromStartOfMonth = () => {
    const currentDate = moment();
    const startOfMonth = moment(currentDate).startOf('month');

    const datesArray = [];
    let currentDay = moment(startOfMonth);

    while (currentDay.isSameOrBefore(currentDate, 'day')) {
        datesArray.push(currentDay.format('YYYY-MM-DD'));
        currentDay.add(1, 'day');
    }

    return datesArray;
};


const RowGenerator = (name_array) => {
    const Rows = [];
    for (let k = 0; k < name_array.length; k++) {
        const hash = {};
        const currentDate = moment();
        const startOfMonth = moment(currentDate).startOf('month');
        let currentDay = moment(startOfMonth);
        hash["name"] = name_array[k];
        for (let i = 1; i <= 6; i++) {
            const pastMonth = moment(currentDate).subtract(i, 'months');
            hash[pastMonth.format('MMMM-YYYY')] = 20 + Math.floor(Math.random() * 10) + 1;
        }
        while (currentDay.isSameOrBefore(currentDate, 'day')) {
            hash[currentDay.format('YYYY-MM-DD')] = Math.floor(Math.random() * 10) + 1;
            currentDay.add(1, 'day');
        }
        Rows.push(hash);
    }
    return Rows;
};


module.exports = {
    getPastSixMonths,
    getDatesFromStartOfMonth,
    RowGenerator,
    randomNames,
    currentMonth
};
