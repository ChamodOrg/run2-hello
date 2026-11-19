import { Heading, Screen, defineApp, useCollection } from "@wso2/prototype-kit";

interface Greeting { id: string; text: string }

const greetings: Greeting[] = [{ id: "greeting.1", text: "Hello, World!" }];

function GreetingScreen() {
  const all = useCollection<Greeting>("greetings");
  const greeting = all.items[0]!;
  return (
    <Screen>
      <Heading id="heading.greeting" text={greeting.text} />
    </Screen>
  );
}

export default defineApp({
  screens: { "screen.greeting": GreetingScreen },
  data: { greetings },
});
