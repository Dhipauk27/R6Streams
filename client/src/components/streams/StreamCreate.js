import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  
  onSubmit = formValues => {
    this.props.createStream(formValues)
  }

  render() {
    return (
      <div>
        <div style={{ fontSize: '16px', marginLeft: '25px', marginTop: '10px', fontFamily: 'verdana'}}>
          Create a Stream
        </div>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(null, {createStream})(StreamCreate);