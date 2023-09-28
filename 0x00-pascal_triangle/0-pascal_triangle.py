#!/usr/bin/python3
'''A module for working with Pascal's triangle.
'''

def pascal_triangle(n):
  """Returns a list of lists of integers representing the Pascal's triangle of n."""

# Check if n is a non-negative integer.
  if not isinstance(n, int) or n < 0:
    return []

  # Initialize the Pascal's triangle.
  triangle = []

  # Iterate over the rows of the Pascal's triangle.
  for i in range(n):

    # Initialize the current row.
    line = []

    # Iterate over the columns of the current row.
    for j in range(i + 1):

      # If the current column is the first or last column, append the value 1.
      if j == 0 or j == i:
        line.append(1)
     
     # If the current row is not the first row and the current column is not the first column,
      # append the sum of the two elements from the previous row.
      elif i > 0 and j > 0:
        line.append(triangle[i - 1][j - 1] + triangle[i - 1][j])
   
   # Append the current row to the Pascal's triangle.
    triangle.append(line)
 
 # Return the Pascal's triangle.
  return triangle
