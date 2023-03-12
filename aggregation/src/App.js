import React from "react";
import { sortedWrapperDate } from "./HOC/sortedWrapperDate";
import { sortedWrapperMonth } from "./HOC/sortedWrapperMonth";
import { sortedWrapperYear } from "./HOC/sortedWrapYear";

function YearTable(props) {
  // console.log("YearTable", props);

  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <tr>
          <th>Year</th>
          <th>Amount</th>
        </tr>
        {props.list.map((item, index) => (
          <tr key={index}>
            <td>{item.year}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

function SortTable(props) {
  // console.log("SortTable", props);

  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <tr>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        {props.list.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

function MonthTable(props) {
  // console.log("MonthTable", props);

  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <tr>
          <th>Month</th>
          <th>Amount</th>
        </tr>
        {props.list.map((item, index) => (
          <tr key={index}>
            <td>{item.month}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
//Добавлены индексы как ключи, чтобы чтобы реакт не ругался в консоли

// TODO:
// 1. Загрузите данные с помощью fetch: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json
// 2. Не забудьте вынести URL в переменные окружения (не хардкодьте их здесь)
// 3. Положите их в state
export default class App extends React.Component {
  state = {
    list: [],
  };
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json"
    )
      .then((data) => data.json())
      .then(result => this.setState(result))
  }

  render() {
    const { list } = this.state;
    const SortMonthHOC = sortedWrapperMonth(MonthTable)
    const SortYearHOC = sortedWrapperYear(YearTable)
    const SortDateHOC = sortedWrapperDate(SortTable)
    return (
      <div id="app">
        {/* <MonthTable list={list} /> */}
        <SortMonthHOC list= {list}/>
        {/* <YearTable list={list} /> */}
        <SortYearHOC list={list}/>
        <SortDateHOC list={list} />
        {/* <SortTable list={list} /> */}
      </div>
    );
  }
}
