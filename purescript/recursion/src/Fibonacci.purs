module Main.Fibonacci where

import Prelude

fibonacci :: Int -> Int
fibonacci 0 = 1
fibonacci 1 = 2
fibonacci number = fibonacci (number - 1) + fibonacci (number - 2)