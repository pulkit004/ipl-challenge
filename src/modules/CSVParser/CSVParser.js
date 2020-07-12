import React, {Component} from 'react';
import CsvParse from '@vtex/react-csv-parse';
import Locker from 'lockr';
import Button from '../../common/Button/Button';
import {withRouter} from 'react-router-dom';

const KEYS_FOR_CSV = [
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

class CSVParser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDataPresent: !!Locker.get('data'), loader: true, disabled: true
    };
  }

  handleData = (data) => {
    this.setState({disabled: false});
    Locker.set('data', data);
  };
  handleError = () => this.setState({error: true});

  componentDidMount() {
    if (this.state.isDataPresent) {
      Locker.rm('data');
    }
    this.setState({loader: false});

  }

  render() {
    const {loader, error, isDataPresent, disabled} = this.state;
    if (loader) return 'Please wait...';
    if (error) return <p className="text-center my-5 text-danger">Something went wrong.
      Please <span onClick={() => window.location.reload()}>refresh</span>!</p>;
    return <>


      <CsvParse
          keys={KEYS_FOR_CSV}
          onDataUploaded={this.handleData}
          onError={this.handleError}

          render={onChange => <div className="form-file">
            <input type="file" className="form-file-input" id="customFile" onChange={onChange} />
            <label className="form-file-label" htmlFor="customFile">
              <span className="form-file-text">Upload CSV to get data...</span>
              <span className="form-file-button">Browse</span>
            </label>

            <div className="my-3" />

            <Button text={'Continue'} disabled={isDataPresent || disabled} onClick={() => this.props.history.push('/dashboard')} />

          </div>}


      />
    </>;
  }
}

CSVParser.propTypes = {};

export default withRouter(CSVParser);
