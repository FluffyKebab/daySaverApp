type allDaysPageData = {
    yearData: YearData[]
}

type YearData = {
    year: number
    days: DayData[]
}

type DayData = {
    month: number 
    day: number
    hasSaved: boolean
    imageLink: string
}

export function getAllDaysPageData(): allDaysPageData {
    let dataFromServer = {
        yearData: [
            {
                year: 2023,
                days: [
                    {
                        month: 2,
                        day: 5,
                        hasSaved: true,
                        imageLink: "https://picsum.photos/200/200"
                    },
                    {
                        month: 1,
                        day: 4,
                        hasSaved: true,
                        imageLink: "https://picsum.photos/200/200"
                    },
                    {
                        month: 1,
                        day: 3,
                        hasSaved: true,
                        imageLink: "https://picsum.photos/200/200"
                    },
                    
                ]
            },
            {   
                year: 2022,
                days: [
                    {
                        month: 2,
                        day: 5,
                        hasSaved: true,
                        imageLink: "https://picsum.photos/200/200"
                    },
                ]
            }
        ]
    }

    for (let i = 0; i < dataFromServer.yearData.length; i++) {
        if (i != 0) {
            let needEmptyAtEndOfYear = true
            if (dataFromServer.yearData[i].days.length != 0) {
                if (dataFromServer.yearData[i].days[0].month == 12 && dataFromServer.yearData[i].days[0].day == daysInMonth[12]) {
                    needEmptyAtEndOfYear = false
                }
            }

            if (needEmptyAtEndOfYear) {
                dataFromServer.yearData[i].days = [{month: 12, day: daysInMonth[12], hasSaved: false, imageLink: ""}, ...dataFromServer.yearData[i].days]
            }
        }

        dataFromServer.yearData[i] = fillInDays(dataFromServer.yearData[i])
    }

    return dataFromServer
}

function fillInDays(daysData: YearData): YearData {
    const newDaysData: DayData[] = []

    for (let i = 0; i < daysData.days.length; i++) {
        newDaysData.push(daysData.days[i])

        let nextDay: DayData = i+1 >= daysData.days.length ? {month: 1, day: 0, hasSaved: false, imageLink: ""} : daysData.days[i+1]
        newDaysData.push(...getEmptyDaysBetween(daysData.year, daysData.days[i], nextDay))
    }
    daysData.days = newDaysData
    return daysData
}

function getEmptyDaysBetween(year: number, firstDay: DayData, secondDay: DayData): DayData[] {
    const daysBetween: DayData[] = []
    let curMonth = firstDay.month
    let curDay = firstDay.day - 1

    while (true) {
        if (curDay == 0 && curMonth == 1) {
            return daysBetween
        }

        if (curDay == 0) {
            curMonth--
            curDay = (year % 4) == 0 && curMonth == 2 ? 29 : daysInMonth[curMonth]  
            continue
        }

        if (curDay == secondDay.day && curMonth == secondDay.month) {
            return daysBetween
        }

        daysBetween.push({day: curDay, month: curMonth, hasSaved: false, imageLink: ""})
        curDay--
    }
}

interface daysInMonthType {
    [key: number]: number
}

const daysInMonth: daysInMonthType = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
} 