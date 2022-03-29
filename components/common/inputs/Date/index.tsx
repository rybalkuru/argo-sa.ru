import { string } from "prop-types";

interface IInputDate {
    title: string;
    currentDate?: Date;
    availableDates?: Date[];
}
const InputDate = ({ title, currentDate, availableDates }: IInputDate) => {
    return;
};
export default InputDate;
