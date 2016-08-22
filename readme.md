# Saga Login Flow with Solid

> A login/register flow built with React & Redux Saga

This application demonstrates what a React-based register/login workflow might look like with [Redux Saga](https://github.com/yelouafi/redux-saga).

It's based on Juan Soto's [saga-login-flow](https://github.com/sotojuan/saga-login-flow) which is based on Max Stoiber's [login-flow](https://github.com/mxstbr/login-flow), but uses Redux Saga instead of Redux Thunk to handle asynchronous actions.

All the saga stuff is [here](https://github.com/sotojuan/saga-login-flow/blob/master/app/sagas/index.js). The rest is regular React and Redux!

The rest is a migration from Juan's, away from a typical username/password login toward a Solid WebID based login.


## Thanks

* [Juan Soto](https://github.com/sotojuan) for the vast majority of this code to date!
* [Max Stoiber](https://twitter.com/mxstbr) for the Login Flow idea.
* [Yassine Elouafi](https://github.com/yelouafi) for Redux Saga. Awesome!

## License

MIT © [Seann Ives](http://www.gweep.net/~abate)
