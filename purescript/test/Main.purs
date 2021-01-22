module Test.Main where

import Prelude

import FirstChapter (multiplesSum)
import Test.Unit (suite, test)
import Test.Unit.Assert as Assert
import Test.Unit.Main (runTest)

main = do
  runTest do
    -- FirstChapter module
    suite "Euler - Sum of Multiples" do
      test "below 10" do
        Assert.equal 23 (multiplesSum 10)
      test "below 1000" do
        Assert.equal 233168 (multiplesSum 1000)
