# stackrouter
Smooth integration of react navigation and webview for React Native apps

> :warning: It's still under development🥺
## What is stackrouter?
`stackrouter` is inspired by [react navigation](https://github.com/react-navigation/react-navigation) and [stackflow](https://github.com/daangn/stackflow).
  
react-navigation only stacks native activity, but not webview history. `stackrouter` stacks native activity and webview history together, Therefore smooth native and webview integration.

### The following actions are possible:
**(Include Revert)**  
* React Native Activity => Webview => Webview => React Native Activity
* Webview => Webview => React Native Activity => Webview
* Webview => React Native Activity  => React Native Activity 
* ...etc