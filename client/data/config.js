const sentryKey = '027e01eb800e4686b2f91aee3da14898';
const sentryApp = '173175';
const sentryUrl = `https://${sentryKey}@app.getsentry.com/${sentryApp}`;

// export function logException(ex, context) {
//   Raven.captureException(ex, {
//     extra: context,
//   });
//   /* eslint no-console:0 */
//   window && window.console && console.error && console.error(ex);
// }

export default sentryUrl;
