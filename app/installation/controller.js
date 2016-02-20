import Ember from 'ember';

const {
  computed,
  get,
  set
} = Ember;

export default Ember.Controller.extend({
  progress: 0,
  steps: 12,

  init() {
    this._super(...arguments);
    set(this, 'completedStepNames', []);
  },

  stepSize: computed('steps', function() {
    return 100 / get(this, 'steps');
  }),

  _notComplete(stepName) {
    return !get(this, 'completedStepNames').contains(stepName);
  },

  actions: {
    incrementProgress(stepName) {
      if (this._notComplete(stepName)) {
        const current = get(this, 'progress');
        const stepSize = get(this, 'stepSize');

        set(this, 'progress', current + stepSize);
        get(this, 'completedStepNames').pushObject(stepName);
      }
    }
  }
});
