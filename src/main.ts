import { squared } from "./util";
import * as tf from '@tensorflow/tfjs';

console.log(squared(3));

const a = tf.tensor(
  [
    [
      [0, 1, 2],
      [1, 2, 3],
      [3, 4, 5]
    ],
    [
      [0, 1, 2],
      [1, 2, 3],
      [3, 4, 5]
    ]
  ]);

const b = tf.tensor(
  [
    [
      [0, 1, 2],
      [1, 2, 3],
      [3, 4, 5]
    ],
    [
      [0, 1, 2],
      [1, 2, 3],
      [3, 4, 5]
    ]
  ]);

a.matMul(b).print();
