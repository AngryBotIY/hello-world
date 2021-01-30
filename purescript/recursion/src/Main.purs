module Main where

import Prelude

import Main.Factorial (factorial)
import Main.Fibonacci (fibonacci)

import Effect (Effect)
import Effect.Console (log)

main :: Effect Unit
main = do
  log (show (factorial 5))
  log (show (fibonacci 5))