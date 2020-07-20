---
title: "Randomized Parameters in WebWork"
date: "2020-07-10"
en/categories: WebWork
en/tags: 
    - WebWork
    - PGrandom
---

WeBWorK uses of the language perl with extra packages to author questions.

A parameter/variable in Perl starts with "\$", for example `$a`, `$integer`, `$var`.

Supported by the `PGrandom` package, in WeBWork random variables can be defined.

## One random number

- Generates a random number between the initial and final values in steps of increment.
  
  ```perl
  random( $initial, $final, $increment )
  ```

   If the increment is 0 or less, then random chooses a floating point number between `$initial` and `$final` using a small increment.`$increment` defaults to 1, if it is not supplied as an argument.

   Example: `$m=random(-2, 20, 3);` generates a number among -2, 1, 4, ..., 19 and stores it in the variable `$m`. Because the step is 3.

- Generates a random number between 0 and $final.

  ```perl
  rand( $final )
  ```

  `$final` defaults to 1 if that argument is omitted.

  Example: `$r = rand(1);` generates a number between 0 and 1 and store it in the variable `$r`.

- Generate a nonzero random number between the initial and final values.

  ```perl
  non_zero_random( $initial, $final );
  ```

  Example: `$coef = non_zero_random(2,7);` generates a nonzero integer between 2 and 7 and stores it in the variable `$coef`.

## Two or more different random numbers

- Generate two or more different random numbers

  ```perl
  do { $new = random($initial, $final); } until ( $new != $old );
  ```

  $old is a predefined random number.

  Example: `do { $new = random(1, 6); } until ( $new != 3 );` generates a number between 1 and 6 but not equal to 3 and store it in the variable `$new`.

- Generate a third different random number number

  ```perl
  do { $third=random( $initial, $final ); } until (( $third != $first ) and ( $third != $second ));
  ```

  `$first` and `second` are predefined random numbers.

  Example: `do { $third = random(1, 6); } until (($third != 3) and ($third != 5);` generates a number between 1 and 6 but not equal to 3 and 5, and store it in the variable `$third`.

## Random variables

To generate a random variable, we can use the `RandomVariableName` function supported by the package `PCCmacros.pl`.

- Generate one random variable.

  ```perl
  $var = RandomVariableName( type=>variable );
  Context()->variables->are( $var=>'Real' );
  ```

  In order to use the variable `$var` in formula, the second line is necessary.

- Generate two different random variables

  ```perl
  $vary = RandomVariableName(type=>variable);
  do { $vary = RandomVariableName(type=>variable) } until ( $vary != $varx );
  Context()->variables->add( $vary=>'Real' );
  ```

  `$varx` is a predefined variable. Note that `add()` should be used for extra variables.

  Example: The following codes will generate two different variables `$varx` and `$vary`.

  ```perl
  $varx = RandomVariableName( type=>variable );
  Context()->variables->are( $vars=>'Real' );
  do { $vary = RandomVariableName(type=>variable )} until ( $vary != $varx );
  Context()->variables->add( $vary=>'Real' );
  ```

## A random element from a list

- Randomizing from a list

  ```perl
  list_random( $x1, $x2,...,$xn );
  ```

  The element `$xi` can be a number, a letter or an expression.

  Example: `$Days = list_random(28, 29, 30, 31)` randomly assigns a number from the list to the variable `$Days`.

- Randomizing from an array
  
  ```perl
  @array = ( $elem1, $elem2, ..., $elemn );
  $arrayLength = scalar( @array );
  $randIndex = random(0, $arrayLength);
  $var = $array[ $randIndex ];
  ```

  Example: Randomly assigns a number or the letter $x$ from the list to the variable `$Days`.

  ```perl
  @array = ('x', 29, 30, 31);
  $arrayLength = scalar( @array );
  $randIndex = random(0, $arrayLength);
  $Days = $array[ $randIndex ];
  ```

## References

- <https://webwork.maa.org/wiki/Authors>
- <https://www.uleth.ca/sites/default/files/2017/09/problemgenerationwithwebwork.pdf>
- <https://webwork.maa.org/moodle/mod/forum/discuss.php?d=2964>
- <https://webwork.maa.org/mediawiki_new/images/a/ab/WeBWorK_Problem_Authoring_Tutorial.pdf>
