import React, {Component} from 'react';
import DataSet from '../../../common/DataSet/DataSet.json';
import Heading from '../../../common/Typography/Heading';

class Matches extends Component {

  state = {
    matchSeriesData: DataSet,
  };

  tableRow = ({date, team1, team2, result, winner}) => <tr>
    <td className={'tableData'}>{date}</td>
    <td className={'tableData'}>{team1}</td>
    <td className={'tableData'}>{team2}</td>
    <td className={'tableData'}>{result}</td>
    <td className={'tableData'}>{winner}</td>
  </tr>;

  render() {
    return (<div className={'container-fluid'}>
      <Heading text={'All Matches'} />

      <div className="table-responsive">
        <table className="table table-bordered table-sm">
          <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Team One</th>
            <th scope="col">Team Two</th>
            <th scope="col">Result</th>
            <th scope="col">Winner</th>
          </tr>
          </thead>
          <tbody>
          {DataSet.map(it => this.tableRow(it))}
          </tbody>
        </table>
      </div>
    </div>);
  }
}

Matches.propTypes = {};

export default Matches;
