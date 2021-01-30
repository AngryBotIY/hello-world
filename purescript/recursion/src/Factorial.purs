module Main.Factorial where

import Prelude

factorial :: Int -> Int
factorial 0 = 1
factorial number = number * factorial (number - 1)