import React from 'react';
import { connect } from 'react-redux';
import SingleUser from './singleUser';

const Users = (props) => {
  const { Userdata } = props;

  return (
    <>
      <SingleUser data={Userdata} />
    </>
  );
};

const mapStateToProps = (state) => ({
  Userdata: state.data.users,
});

export default connect(mapStateToProps)(Users);
