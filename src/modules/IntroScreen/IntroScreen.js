import React, {memo} from 'react';
import CSVParser from '../CSVParser/CSVParser';
import Card from '../../common/Card/Card';

const IntroScreen = () =>
    <div className="jumbotron jumbotron-fluid vh-100 d-flex flex-row align-items-center justify-content-center flex-column">
      <div className="container">
        <h1 className="display-4 mb-4 font-weight-bold">IPL Data Visualisation</h1>

        <div className="row">
          <div className="col-md-6">

            <Card>
              <p>Please upload the CSV file containing the data of IPL series.</p>
              <CSVParser />
            </Card>
          </div>
        </div>
      </div>
    </div>;

export default memo(IntroScreen);
