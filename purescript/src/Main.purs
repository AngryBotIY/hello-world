module Main where

import Prelude

import Effect.Console (log)
import FirstChapter (multiplesSum)

main = do
  log ("Euler - sum of multiples below 1000 is: " <> show (multiplesSum 1000))
