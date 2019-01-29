import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  ...((require('/home/muthukumaraswamy/mygir/jsinterview/interviewonline1/js-interview-online-master/src/dva.js').config || (() => ({})))()),
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'app', ...(require('/home/muthukumaraswamy/mygir/jsinterview/interviewonline1/js-interview-online-master/src/models/app.js').default) });
