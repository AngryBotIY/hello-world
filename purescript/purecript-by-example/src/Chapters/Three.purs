module Chapter.Three where

import Prelude

import Control.Plus (empty)
import Data.List (List(..), filter, head, nubBy)
import Data.Maybe (Maybe)

-- functions
add :: Int -> Int -> Int
add x y = x + y

sub :: Int -> Int -> Int
sub = \x y -> x - y

mult :: Int -> Int -> Int -> Int
mult x y z = first * second
  where -- local scope
    first = add x y
    second = add y z

-- example
type Address = { street :: String, city :: String, state :: String }

type Entry = { firstName :: String, lastName ::String, address :: Address }

type AddressBook = List Entry

book :: AddressBook
book = empty

insertEntry :: Entry -> AddressBook -> AddressBook
insertEntry = Cons

findEntry :: String -> String -> AddressBook -> Maybe Entry
findEntry firstName lastName = head <<< filter filterEntry
  where
    filterEntry :: Entry -> Boolean
    filterEntry entry = entry.firstName == firstName && entry.lastName == lastName

findEntryByStreet :: String -> AddressBook -> Maybe Entry
findEntryByStreet street = head <<< filter filterEntry
  where
    filterEntry :: Entry -> Boolean
    filterEntry entry = entry.address.street == street

findEntryByName :: String -> AddressBook -> Maybe Entry
findEntryByName firstName = head <<< filter filterEntry
  where
    filterEntry :: Entry -> Boolean
    filterEntry entry = entry.firstName == firstName

removeDuplicates :: AddressBook -> AddressBook
removeDuplicates = nubBy removeEntry
  where
    removeEntry :: Entry -> Entry -> Boolean
    removeEntry prev next = prev.firstName == next.firstName

showEntry :: Entry -> String
showEntry entry =
  entry.lastName <> ", " <>
  entry.firstName <> ", " <>
  showAddress entry.address

showAddress :: Address -> String
showAddress address =
  address.street <> ", " <>
  address.city <> ", " <>
  address.state