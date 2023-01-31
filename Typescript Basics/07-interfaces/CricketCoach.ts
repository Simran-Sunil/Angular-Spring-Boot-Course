import { Coach } from "./Coach";

export class CricketCoach implements Coach{

    getDailyWorkout(): string {
        return "Practics your spin bowling technique.";
    }
}