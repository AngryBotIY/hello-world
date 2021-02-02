module Main where

import Prelude

import Chapter.Two (circleArea, diagonal)
import Effect.Console (logShow)

main = do
  logShow (diagonal 3.0 4.0)
  logShow (circleArea 5.0)