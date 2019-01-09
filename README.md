Ternary-Optimizer.js
================

This is a JavaScript code golf tool that facilitates finding shorter forms of ternary operations that return integers.

It could be used for other languages too if the language meets the following requirements:

- uses the ternary operator as `(x?y:z)`
- uses the `!` operator
- operations with `Boolean` values and numeric values can be mixed (coercing `true` to `1` and `false` to `0`)

Here is a list of some examples:
	
	(x?3:2)     //old
	(x+2)       //new, +2 savings
	
	(x?4:5)     //old
	(5-x)       //new, +2 savings
	
	(x?3:0)     //old
	(3*x)       //new, +2 savings
	
	(x?-1:0)    //old
	(-x)        //new, +4 savings
	
	(x?1:-1)    //old
	(2*x-1)     //new, +1 savings
	
	(x?-41:-37) //old
	(4*!x-41)   //new, +2 savings

Demo
-------------

http://ajax333221.github.io/Ternary-Optimizer/

Features
-------------

- option to prefer `(2*x+1)` over `(x?3:1)` with equal length
- moves stuff around for better operator precedence (prevents some parentheses)
- automatically removes unnecessary `+0`, `0-`, `+-` and double parentheses

To Do
-------------

- pass our own `x` parameter in `(x?y:z)`

Copyright and License
-------------

Copyright © 2014 Ajax Isepic (ajax333221)

Licensed under MIT License: http://opensource.org/licenses/mit-license.php
