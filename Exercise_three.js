/*Chessboard

Write a program that creates a string that represents an 8×8 grid, using new-line characters to separate lines. At each position of the grid there is either a space or a # character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

*/

let size = 8;
let grid = "";
for(let iterator = 0; iterator < size; iterator++)
{
    if(iterator % 2 == 0)
    {
        for(let itertatorGrid = 0; itertatorGrid < size; itertatorGrid++)
        {
            itertatorGrid % 2 == 0?grid += " ": grid+="#";
        }
        grid += '\n'
    }

    if(iterator % 2 != 0)
    {
        for(let itertatorGrid = 0; itertatorGrid < size; itertatorGrid++)
        {
            itertatorGrid % 2 != 0?grid += " ": grid+="#";
        }
        grid += '\n'
    }
}

console.log(grid);