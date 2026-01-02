import { init } from "./framework";
import { User } from "./src/user";

const firstName = "Elvis";
const lastName = "Madiba";

init("#app", User({ firstName, lastName }));
