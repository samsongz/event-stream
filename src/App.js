import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const data = {
  title: "My Open Items",
  items: [
  {
    id: 89,
    title: "Broken pipe",
    tool: "Punch List",
    date: "Jan 7, 2018"
  },{
    id: 162,
    title: "Incorrect sink placement",
    tool: "RFI",
    date: "Jan 14, 2018"
  },{
    id: 163,
    title: "Loose ceiling fixture",
    tool: "RFI",
    date: "Jan 23, 2018"
  },{
    id: 202,
    title: "Second floor bathroom plumbing",
    tool: "RFI",
    date: "Jan 30, 2018"
  },{
    id: 96,
    title: "Baseboard paint marks",
    tool: "Punch List",
    date: "Feb 6, 2018"
  },{
    id: 204,
    title: "Broken pipe",
    tool: "RFI",
    date: "Feb 13, 2018"
  }
]}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: data.title,
      items: data.items
    }
  }
  render() {
    const { title, items } = this.state;

    const listItems = items.map((item) => {
      return <div key={item.id} className="item">
        <div className="hoverSideBar"></div>
        <div className="itemBox1">
          <div className="itemTitle">{item.id}: {item.title}</div>
          <div className="itemTool">{item.tool}</div>
        </div>

        <div className="itemDate">{item.date}</div>
      </div>
    });
    return (
      <div className="eventStream">
        <header>
          <div className="title">{title}</div>
        </header>
        <div className="itemsList">
          {listItems}
        </div>
      </div>
    );
  }
}

export default App;
