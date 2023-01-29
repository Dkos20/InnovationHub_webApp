import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import { defineAsyncComponent } from 'vue';

const VueFormKit = {
  install(app, options = {}) {
    const configs = { componentPrefix: '', ...options };

    const folders = {
      Select: import.meta.glob('./components/Select/*.vue'),
      Form: import.meta.glob('./components/Form/*.vue'),
      Block: import.meta.glob('./components/Block/*.vue'),
      Icon: import.meta.glob('./components/Icon/*.vue'),
    };
    Object.entries(folders).forEach(([folder, modules]) => {
      Object.entries(modules).forEach(([path, m]) => {
        const componentName = upperFirst(
          camelCase(path.split('/').pop().replace(/\.\w+$/, '')),
        );
        app.component(`${configs.componentPrefix}${folder}${componentName}`, defineAsyncComponent(m));
      });
    });

    app.config.globalProperties.$formKitConfigs = configs;
    app.provide('formKitConfigs', configs);
  },
};

export default VueFormKit;
