# React useEffect Cleanup Function Missing

This repository demonstrates a common error in React's `useEffect` hook: omitting the cleanup function.  The example shows a component that fetches data on mount but lacks proper cleanup, leading to potential memory leaks and unexpected behavior.

## The Problem

The provided `MyComponent` uses `useEffect` to fetch data from an API. However, it's missing a cleanup function. This means that when the component unmounts, the pending fetch request may continue, possibly leading to wasted resources and unexpected side effects.

## The Solution

The solution involves adding a cleanup function to the `useEffect` hook. This function is executed when the component unmounts and allows for the cancellation or cleanup of any ongoing operations.

## How to Reproduce

Clone the repository and run `npm install` to install the dependencies.  Then, run `npm start` to start the development server.

## Learning Outcomes

By reviewing this example, you'll understand the importance of including cleanup functions in `useEffect` hooks to avoid memory leaks and other potential issues.  This ensures your React applications remain performant and robust.