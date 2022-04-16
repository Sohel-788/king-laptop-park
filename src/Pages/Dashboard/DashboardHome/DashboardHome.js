import React from 'react';

import { Route, Switch } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import MyOrders from '../MyOrders/MyOrders';
import { Payment } from '@mui/icons-material';

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

const DashboardHome = () => {
  const classes = useStyles();
    return (
        <>
        <div className={classes.container}>
        <Switch>
        <Route exact path="/myOrders" render={(props) => <MyOrders {...props} />} />
        <Route
          exact
          path="/payment"
          render={(props) => <Payment {...props} />}
        />
      </Switch>
        </div>
        </>
    );
};

export default DashboardHome;