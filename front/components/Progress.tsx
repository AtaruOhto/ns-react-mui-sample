import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Progresses = () => (
    <div>
        <h2>Circular Progress</h2>
        <CircularProgress />
        <CircularProgress size={60} thickness={10} color={"#FF5722"} />
        <CircularProgress size={80} thickness={12} color={"#E91E63"} />
        <CircularProgress size={100} thickness={14} color={"#3F51B5"} />
        <CircularProgress size={120} thickness={20} color={"#009688"} />
    </div>
);

export default Progresses

