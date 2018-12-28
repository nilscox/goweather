import { KEY } from 'redux-pack';

export type ActionArg = {
  type: string,
  payload: any,
  meta?: any,
};

// this utility method will make an action that redux pack understands
const makePackAction = (lifecycle: string, { type, payload, meta = {} }: ActionArg) => {
  return {
    type,
    payload,
    meta: {
      ...meta,
      [KEY.LIFECYCLE]: lifecycle,
    },
  }
};

export default makePackAction;

// TODO: configure jest so it does not thinks this module is a test
test('', () => {});
