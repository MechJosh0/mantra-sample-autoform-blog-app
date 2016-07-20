import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import Component from '../components/create_comment';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const errors = LocalState.get('CREATE_COMMENT_ERROR');
  const submitted = LocalState.get('CREATE_COMMENT_SUBMITTED');
  onData(null, {errors, submitted});

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  create: actions.comments.create,
  clearErrors: actions.comments.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
