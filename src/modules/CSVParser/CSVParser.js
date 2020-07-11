import React, {Component} from 'react';
import CsvParse from '@vtex/react-csv-parse';
import Locker from 'lockr'
class CSVParser extends Component {
  state = {};

  handleData = (data) => {
    Locker.set('data', data)
  }
  handleError = () => this.setState({error: true});

  render() {
    const keys = [
      'id',
      'season',
      'city',
      'date',
      'team1',
      'team2',
      'toss_winner',
      'toss_decision',
      'result',
      'dl_applied',
      'winner',
      'win_by_runs',
      'win_by_wickets',
      'player_of_match',
      'venue',
      'umpire1',
      'umpire2',
      'umpire3'];
    if(this.state.error) return <p className="text-center">Something went wrong</p>
    return <>

      <CsvParse
            keys={keys}
            onDataUploaded={this.handleData}
            onError={this.handleError}

            render={onChange =>  <div className="form-file">
              <input type="file" className="form-file-input" id="customFile" onChange={onChange} />
              <label className="form-file-label" htmlFor="customFile">
                <span className="form-file-text">Upload CSV to get data...</span>
                <span className="form-file-button">Browse</span>
              </label>
            </div>}


              />
        </>
  }
}

CSVParser.propTypes = {};

export default CSVParser;
