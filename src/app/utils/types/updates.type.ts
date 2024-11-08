export type Operation = 'up' | 'down';

export interface OperationData {
  operation: Operation;
}

export const operationUp: OperationData = {
  operation: 'up',
};

export const operationDown: OperationData = {
  operation: 'down',
};
