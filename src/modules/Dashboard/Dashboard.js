import React, {Component} from 'react';
import Locker from 'lockr';
import {withRouter} from 'react-router-dom';
import DataSet from '../../common/DataSet/DataSet.json';
import Heading from '../../common/Typography/Heading';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Locker.get('data') || DataSet,
    };

  }

  render() {
    const {data = []} = this.state;
    return (<>

      <div className={'container-fluid my-4'}>
        <Heading text={'IPL Data Visualisation'} />

      </div>
    </>);
  }
}

Dashboard.propTypes = {};

export default withRouter(Dashboard);
