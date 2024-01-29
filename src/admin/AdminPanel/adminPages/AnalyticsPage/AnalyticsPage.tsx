import React from 'react';
import './AnalyticsPage.scss';

import userImg from '../../../../assets/images/creator.svg';
import projectImg from '../../../../assets/images/project.svg';

import { Chart as ChartJS, BarElement, Title, Tooltip, scales } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(BarElement, Title, Tooltip, scales);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
        bar: {
            backgroundColor: 'rgba(66, 66, 66, 1)',
            borderRadius: 50
            // borderWidth: 17,
            // borderColor: 'rgba(66, 66, 66, 0)',
        }
    },
    scales: {
        x: {
            border: {
                display: false
            },
            grid: {
                display: false
            },
            ticks: {
                color: 'rgba(127, 127, 127, 1)',
                font: {
                    size: 18,
                    weight: 700,
                    family: 'Inter',
                    letterSpacing: '-0.36px'
                }
            }
        },
        y: {
            display: false
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

const labels = ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30'];

export const data = {
    labels,
    datasets: [
        {
            barThickness: 20,
            barPercentage: 0.5,
            label: 'Dataset 1',
            // TODO here will be logic to retrieve data to chart
            data: labels.map(() => faker.number.int({ min: 0, max: 230 }))
        }
    ]
};

const AnalyticsPage = () => {
    return (
        <>
            <div className='analyticsPage'>
                <h1>Analytics and Reporting</h1>

                <div className='analyticsPageStats'>
                    <div className='stats-block'>
                        <div className='stats-block-img'>
                            <img src={userImg} alt='userImg' />
                        </div>
                        <div className='stats-block-total'>
                            <div className='title'>Total users</div>
                            <div className='value'>567</div>
                        </div>
                        <div className='stats-block-online'>
                            <div className='title'>Users online</div>
                            <div className='value'>134</div>
                        </div>
                    </div>
                    <div className='stats-block'>
                        <div className='stats-block-img'>
                            <img src={projectImg} alt='projectImg' />
                        </div>
                        <div className='stats-block-total'>
                            <div className='title'>Total projects</div>
                            <div className='value'>892</div>
                        </div>
                    </div>
                </div>

                <div className='analyticsPageChart'>
                    <div className='analyticsPageChart-top'>
                        <div className='analyticsPageChart-top-select'>
                            <select>
                                <option>Daily traffic</option>
                                <option>Last 7 days</option>
                                <option>Last 30 days</option>
                            </select>
                        </div>
                        <div className='analyticsPageChart-top-stats'>
                            <div className='analyticsPageChart-top-stats-title'>Visitors</div>
                            <div className='analyticsPageChart-top-stats-value'>230</div>
                            {/* TODO here will be logic to show .up or .down */}
                            <div className='analyticsPageChart-top-stats-percent up'>+2.45%</div>
                        </div>
                    </div>
                    <div className='chart-wrapper'>
                        <Bar className='chart-js' options={options} data={data} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AnalyticsPage;
