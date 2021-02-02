module Chapter.Two where

import Prelude
import Math (pi, sqrt)

-- example
diagonal w h = sqrt (w * w + h * h)

-- exercise: compute the area of circle with a given radius
circleArea r = pi * (r * r)