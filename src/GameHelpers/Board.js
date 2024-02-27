import { defaultCell } from "./Cell";

export const buildBoard = ({ rows, cols }) => {
    const board = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => ({ ...defaultCell }))
    );

    return {
        rows: board,
        size: { rows, cols}
    };
}