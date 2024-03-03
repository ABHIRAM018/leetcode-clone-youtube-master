// global.d.ts
import 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elementName: string]: any; // You can specify more specific types if needed
    }
  }
}
