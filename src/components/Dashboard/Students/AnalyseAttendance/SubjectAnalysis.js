import React from 'react'
import PieGraph from './PieGraph'
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';

function SubjectAnalysis() {
    return (
        <div className='flex flex-col justify-center items-center sm:flex-row'>
            <CalendarHeatmap
                startDate={new Date('2016-01-01')}
                endDate={new Date('2016-05-01')}
                showWeekdayLabels={true}
                values={[
                    { date: "2016-01-01", status: "Present" },
                    { date: "2016-01-03", status: "Absent" },
                    { date: "2016-01-06", status: "Present" },
                    // ...and so on
                ]}

                showOutOfRangeDays={true}

                classForValue={(value) => {
                    if (!value) {
                        return 'color-empty';
                    }
                    return `color-${value.status}`;
                }}

                tooltipDataAttrs={(value) => {
                    return {
                      "data-tip": `${value.date} has status: ${value.status}`
                    };
                  }}
            />
            <ReactTooltip />
            <PieGraph />
        </div>
    )
}

export default SubjectAnalysis