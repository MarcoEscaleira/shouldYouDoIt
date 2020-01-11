export type NullaryFn<R> = () => R;
export type UnaryFn<A, R> = (a: A) => R;
export type BinaryFn<A, B, R> = (a: A, b: B) => R;
export type TernaryFn<A, B, C, R> = (a: A, b: B, c: C) => R;
export type QuadFn<A, B, C, D, R> = (a: A, b: B, c: C, d: D) => R;
export type QuinFn<A, B, C, D, F, R> = (a: A, b: B, c: C, d: D, f: F) => R;
export type SixFn<A, B, C, D, F, H, R> = (
  a: A,
  b: B,
  c: C,
  d: D,
  f: F,
  h: H
) => R;
