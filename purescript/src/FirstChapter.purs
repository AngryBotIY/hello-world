module FirstChapter where

import Prelude
import Data.List (range, filter)
import Data.Foldable (sum)

-- Euler - Sum of Multiples
input n = range 0 (n - 1)

filtered n = filter (\n -> mod n 3 == 0 || mod n 5 == 0) (input n)

multiplesSum n = sum (filtered n)