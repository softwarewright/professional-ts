/* eslint-disable @typescript-eslint/no-empty-function */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

// 
const x: {
  user: {
    name: string;
    address?: {
      street: string;
      city: string;
    }
  }
} = { user: { name: "Darrius Wright " } };

// The question mark means early termination
console.log(x.user.address?.city);

// Class, private, nullish
class Foo {
  // This is true privacy
  #name: string;
  constructor(public rawName?: string) {
    // specifically nullish meaning null | undefined
    this.#name = rawName ?? '(no name)';
  }
  log() {
    console.log(this.#name)
  }
}

// Export all
// export * as foo from './foo'

// Tuple Types

type FooBar<T extends any[]> = [boolean, ...T, boolean];

// Named tuple arguments that can be supplied to the function...
type Address = [streetNumber: number, city: string, state: string, postal: number];

function printAddress(...address: Address) {
  console.log(address)
}

printAddress(123, 'San Francisco', 'CA', 1231);


// Recursive type aliases...
type JSONValue =
  string |
  number |
  boolean |
  null |
  JSONValue[] |
  {
    [k: string]: JSONValue
  };


const value: JSONValue = {
  name: 'mike',
  address: {
    street: 'Spear St',
  }
}

console.log(value);

// Look into conditional recusive types...

// beta
// type Corner = `${'top' | 'bottom'}-${'left' | 'right'}`;

// error logs an error if there is no error
// @ts-expect-error testing
const num1: number = 'String';
// ignore just turns off typescript
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// const num2: number = 5;


function somethingRisky() { }

// type-guard
function isError(err: any): err is Error {
  return err instanceof Error
}

// assert is error, works great for tests
function assertIsError(err: any): asserts err is Error {
  if (!(err instanceof Error)) throw new Error(`Not an error: ${err}`);
}

try {
  somethingRisky();
  // Since you do not know the type of your error assign it to
  // unknown this will force you deal with validating that the error is
  // what you expect it to be.
} catch (err: unknown) {
  assertIsError(err)
  console.log(err.stack)
  // if (isError(err)) {
  //   console.log(err.stack)
  // } else {
  //   console.log(err);
  // }
}

// Allows you to pull the type information 
import type { useAsyncDataEffect } from '../src/utils/api';