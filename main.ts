game.splash("Let's calculate the area of a Trapozoid")
let Base_1 = game.askForNumber("what is the first base (cm)?")
let Base_2 = game.askForNumber("what is the second base (cm)?")
let height = game.askForNumber("what is the height (cm)?")
let area = (Base_1 + Base_2) / 2 * height
game.splash("the area of a trapezoid of height " + height + "cm with bases of " + Base_1 + "cm and " + Base_2 + "cm is " + area + "cm^2!")
