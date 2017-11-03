import {animate, AnimationEntryMetadata, state, style, transition, trigger} from '@angular/core';

// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('0.2s ease-in')
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
  ]);

// export function moveIn() {
//   return trigger('moveIn', [
//     state('void', style({position: 'fixed', width: '100%'})),
//     state('*', style({position: 'fixed', width: '100%'})),
//     transition(':enter', [
//       style({opacity: '0', transform: 'translateX(100px)'}),
//       animate('.6s ease-in-out', style({opacity: '1', transform: 'translateX(0)'}))
//     ]),
//     transition(':leave', [
//       style({opacity: '1', transform: 'translateX(0)'}),
//       animate('.3s ease-in-out', style({opacity: '0', transform: 'translateX(-200px)'}))
//     ])
//   ]);
// }
//
// export function fallIn() {
//   return trigger('fallIn', [
//     transition(':enter', [
//       style({opacity: '0', transform: 'translateY(40px)'}),
//       animate('.4s .2s ease-in-out', style({opacity: '1', transform: 'translateY(0)'}))
//     ]),
//     transition(':leave', [
//       style({opacity: '1', transform: 'translateX(0)'}),
//       animate('.3s ease-in-out', style({opacity: '0', transform: 'translateX(-200px)'}))
//     ])
//   ]);
// }
//
// export function moveInLeft() {
//   return trigger('moveInLeft', [
//     transition(':enter', [
//       style({opacity: '0', transform: 'translateX(-100px)'}),
//       animate('.6s .2s ease-in-out', style({opacity: '1', transform: 'translateX(0)'}))
//     ])
//   ]);
// }

export const fadeInAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('fadeInAnimation', [

    // route 'enter' transition
    transition(':enter', [

      // css styles at start of transition
      style({opacity: 0}),

      // animation and styles at end of transition
      animate('.3s', style({opacity: 1}))
    ]),
  ]);
