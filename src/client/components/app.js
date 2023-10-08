import React from "react";
import styled from "styled-components";
import RM from "./react-markdown";

export default function App() {
  return (
    <Card>
      <Container>
        <RM>My name is `Roger Gomez Castells (roggc)`.</RM>
        <RM>
          I am a `Fullstack React Developer`, meaning I am able to develop
          `React` on the server with `React Server Components (RSC)`.
        </RM>
        <RM>
          I have developed an implementation of `React Server Components (RSC)`.
          Can be used with `npx create-rsc-app@latest my-app` for the setup
          without `SSR (Server Side Rendering)` and with `npx
          create-rsc-app@latest my-app --ssr` for the setup with `SSR`.
        </RM>
        <RM>
          I love `React` and web development in general. I have also experience
          with `React Native` (I've developed and published an app with it named
          `mygroupsapp`).
        </RM>
        <RM>
          I have also developed a library for state management in `React` (and
          `React Native`) named `react-context-slices`. It seamlessly integrates
          both `Redux` and `React Context` with zero-boilerplate. I've made a
          dedicated site to it: click
          **[here](https://react-context-slices.github.io)** to see.
        </RM>
        <RM>
          I have also made a dedicated site for `The RSC Setup` I've made, can
          be seen **[here](https://rsc-setup.netlify.app)**.
        </RM>
        <RM>Check my **[github](https://github.com/roggc)** for more info.</RM>
      </Container>
    </Card>
  );
}

const Container = styled.div`
  font-family: sans-serif;
`;

const C = styled.div`
  border-radius: 10px;
  background-color: #f9f6ee;
  box-shadow: 0 0 1px 1px;
  padding: 10px;
  display: inline-flex;
`;

const Card = styled(C)`
  --max-width: 600px;
`;
