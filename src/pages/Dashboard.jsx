import React from 'react'
import { connect } from 'react-redux'
import { Doughnut } from 'react-chartjs-2';
import { loadToys } from '../store/toy.actions.js'
import { MainLayout } from '../cmps/layout/MainLayout.jsx';
import { Loading } from '../cmps/Loading.jsx';

class _Dashboard extends React.Component {


    componentDidMount() {
        this.props.loadToys(this.props.filterBy)
    }
    getFirstData = () => {
        this.getSecondData()
        let pricePerLable = this.labels.map((label) => {
            let count = 0
            let sum = this.props.toys.reduce((acc, toy) => {
                if (toy.labels.includes(label)) {
                    count++;
                    return (acc + +toy.price);
                } else return acc;
            }, 0)
            return (sum / count)
        })
        this.firstData.datasets[0].data = pricePerLable
    }
    getSecondData = () => {
        let yearsList = this.props.toys.map(toy => +new Date(toy.createdAt).getFullYear())
        let uniqueYears = [...new Set(yearsList)];
        let toyPerYear = uniqueYears.map((year) => {
            let count = 0
            this.props.toys.map((toy) => {
                if (+new Date(toy.createdAt).getFullYear() === +year) {
                    count++;
                }
            })
            return (count)
        })
        this.secondData.datasets[0].data = toyPerYear
        this.secondData.labels = uniqueYears
    }

    labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"];

    firstData = {
        labels: [...this.labels],
        datasets: [
            {
                label: '# of Votes',
                data: '',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    '#9e9e9e',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    '#787575'
                ],
                borderWidth: 1,
            },
        ],
    };
    secondData = {
        labels: '',
        datasets: [
            {
                label: '# of Votes',
                data: '',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    '#9e9e9e',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    '#787575'
                ],
                borderWidth: 1,
            },
        ],
    };


    render() {

        if (!this.props.toys.length) return <Loading/>
        if (this.props.toys.length) { this.getFirstData() }
        return (
            <MainLayout>
                <section className='dashboard'>
                    <div className="right-dash">
                        <h1 className='title'>Prices per toy type</h1>
                        <div className="charts-container" style={{ height: '400px' }}>
                            <Doughnut data={this.firstData}
                                options={{ maintainAspectRatio: false }} />
                        </div>
                    </div>
                    <div className="left-dash">
                        <h1 className='title'>Toys per year</h1>
                        <div className="charts-container" style={{ height: '400px' }}>
                            <Doughnut data={this.secondData}
                                options={{ maintainAspectRatio: false }} />
                        </div>
                    </div>
                </section>
            </MainLayout>
        )

    }

}


function mapStateToProps(state) {
    return {
        filterBy: state.toyModule.filterBy,
        toys: state.toyModule.toys
    }
}

const mapDispatchToProps = {
    loadToys
}

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(_Dashboard)


