class cell {
  constructor(colour, url, horizontalWeight = 1, verticalWeight = 1, special = false, flame = false, star = false, hypercube = false, supernova = false) {
    //initialising the class' variables
    this._colour = colour;
    this._url = url;
    this._horizontalWeight = horizontalWeight;
    this._verticalWeight = verticalWeight;
    this._special = special;
    this._flame = flame;
    this._star = star;
    this._hypercube = hypercube;
    this._supernova = supernova;
  }
  get colour() {
    return this._colour; //allows the colour to be obtained
  }
  get url() {
    return this._url; //allows the url to be obtained
  }
  get horizontalWeight() {
    return this._horizontalWeight; //allows the horizontal weight to be obtained
  }
  get verticalWeight() {
    return this._verticalWeight; //allows the vertical weight to be obtained
  }
  get special() {
    return this._special; //allows whether or not the gem is special to be obtained
  }
  get flame() {
    return this._flame; //allows whether or not the gem is a flame gem to be obtained
  }
  get star() {
    return this._star; //allows whether or not the gem is a star gem to be obtained
  }
  get hypercube() {
    return this._hypercube; //allows whether or not the gem is a hypercube to be obtained
  }
  get supernova() {
    return this._supernova; //allows whether or not the gem is a hypercube to be obtained
  }
  set colour(colour) {
    this._colour = colour; //allows the colour to be set, used when swapping gems
  }
  set url(url) {
    this._url = url; //allows the url to be set, used when swapping gems
  }
  set horizontalWeight(horizontalWeight) {
    this._horizontalWeight = horizontalWeight; //allows the horizontal weight to be set, used when changing it to match that of the previous gem
  }
  set verticalWeight(verticalWeight) {
    this._verticalWeight = verticalWeight; //allows the vertical weight to be set, used when changing it to match that of the previous gem
  }
  addToHorizontalWeight() {
    this._horizontalWeight = this.horizontalWeight + 1; //allows the horizontal weight to be incremented by one
  }
  addToVerticalWeight() {
    this._verticalWeight = this.verticalWeight + 1; //allows the vertical weight to be incremented by one
  }
};


function startUp() {
  do {
    do {
      //will occur once and then everytime until there is no pending reaction on the grid
      gridOfGems = createGridOfGems(); //creates the initial grid of gems
      var reaction = checkForPendingReactions(gridOfGems);
    } while (reaction);
    var possibleMoves = checkForPossibleReactions(gridOfGems);
    //console.log(possibleMoves);
  } while (!(possibleMoves));
};


function createGridOfGems() {
  const listOfColours = ['B', 'G', 'O', 'P', 'R', 'W', 'Y']; //B for blue gem, G for green gem, O for orange gem, P for purple gem, R for red gem, W for white gem and Y for yellow gem
  const listOfURLs = ['<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0283d382-0feb-4d6b-86f6-69ec2817d857/dc2j9bc-1aff4e18-9665-4fa8-8909-0ac47c77275a.png/v1/fill/w_250,h_250,strp/bejeweled_blue_gem_by_ldinos_dc2j9bc-250t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzAyODNkMzgyLTBmZWItNGQ2Yi04NmY2LTY5ZWMyODE3ZDg1N1wvZGMyajliYy0xYWZmNGUxOC05NjY1LTRmYTgtODkwOS0wYWM0N2M3NzI3NWEucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZY1jdqiqjn-H6PwnGd4Qhi8FPc4k6VoqPeDpoIZX_O8" class="gems bluegem"/>', '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0283d382-0feb-4d6b-86f6-69ec2817d857/dc2fr2h-268ddfa0-b795-4498-a9e2-12127eede365.png/v1/fill/w_250,h_250,strp/bejeweled_green_gem_by_ldinos_dc2fr2h-250t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzAyODNkMzgyLTBmZWItNGQ2Yi04NmY2LTY5ZWMyODE3ZDg1N1wvZGMyZnIyaC0yNjhkZGZhMC1iNzk1LTQ0OTgtYTllMi0xMjEyN2VlZGUzNjUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Ra8KTwor9JPGKWWyh18qYaQs6HHtxAh3Kb_nKvaME3w" class="gems greengem"/>', '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0283d382-0feb-4d6b-86f6-69ec2817d857/dc2fouk-ed449fbb-8fd5-49d9-9ea3-e445fea08148.png/v1/fill/w_894,h_894,strp/bejeweled_orange_gem_by_ldinos_dc2fouk-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzAyODNkMzgyLTBmZWItNGQ2Yi04NmY2LTY5ZWMyODE3ZDg1N1wvZGMyZm91ay1lZDQ0OWZiYi04ZmQ1LTQ5ZDktOWVhMy1lNDQ1ZmVhMDgxNDgucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.O8-xraeh51ApwdjsgLDUf3VIRbkNSM-uXMOaeLK3ZVA" class="gems orangegem"/>', '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0283d382-0feb-4d6b-86f6-69ec2817d857/dc9v7iu-3677d383-767e-48e7-b3cc-6f1b7f8ad609.png/v1/fill/w_250,h_250,strp/bejeweled_purple_gem_by_ldinos_dc9v7iu-250t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzAyODNkMzgyLTBmZWItNGQ2Yi04NmY2LTY5ZWMyODE3ZDg1N1wvZGM5djdpdS0zNjc3ZDM4My03NjdlLTQ4ZTctYjNjYy02ZjFiN2Y4YWQ2MDkucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.rvg0oQFGcXD72dgfkwmZaS3voXq1AuNdgB4SmwwgcAs" class="gems purplegem"/>', '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0283d382-0feb-4d6b-86f6-69ec2817d857/dc7zw40-a33a37cf-3872-4a51-8dca-19f7a9abe671.png/v1/fill/w_894,h_894,strp/bejeweled_red_gem_by_ldinos_dc7zw40-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzAyODNkMzgyLTBmZWItNGQ2Yi04NmY2LTY5ZWMyODE3ZDg1N1wvZGM3enc0MC1hMzNhMzdjZi0zODcyLTRhNTEtOGRjYS0xOWY3YTlhYmU2NzEucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.JryMQ2tWwc-wG-qY58OsTjiqGqwzfSvhDcsjr_J6RSQ" class="gems redgem"/>', '<img src="https://vignette.wikia.nocookie.net/bejeweled/images/0/0a/Daily_Spin_White_Gem.png/revision/latest/scale-to-width-down/182?cb=20181113060840" class="gems whitegem"/>', '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0283d382-0feb-4d6b-86f6-69ec2817d857/dc7nv99-82ec4779-3d49-4592-b3d8-e9c995a9b190.png/v1/fill/w_894,h_894,strp/bejeweled_yellow_gem_by_ldinos_dc7nv99-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzAyODNkMzgyLTBmZWItNGQ2Yi04NmY2LTY5ZWMyODE3ZDg1N1wvZGM3bnY5OS04MmVjNDc3OS0zZDQ5LTQ1OTItYjNkOC1lOWM5OTVhOWIxOTAucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.dLBFB5rV09aCiNYleuVbUfwpTOFJc0T0YG4gG9SAH_w" class="gems yellowgem"/>']; //list of the urls of the image of each of the types of gem
  var gridOfGems = []; //the grid starts empty
  for (cellNumber = 0; cellNumber < 64; cellNumber++) {
    var randomNumber = makeRandomNumber();
    gridOfGems.push(new cell(listOfColours[randomNumber], listOfURLs[randomNumber])); //adds a random gem to the grid
    var cellName = makeCellName(cellNumber);
    //console.log(gridOfGems[cellNumber]);
    document.getElementById(cellName).innerHTML = gridOfGems[cellNumber].url; //sends the generated gem to the html so it can be displayed in the relevant cell
  };
  return gridOfGems;
};


function makeRandomNumber() {
  return Math.floor(Math.random()*7); //makes a random number between 0 and 6 inclusive
};


function makeCellName(cellNumber) {
  return "cell".concat(cellNumber.toString()); //creates a variable with value "cellx"
}


function checkForPendingReactions(gridOfGems) {
  var reaction = false;
  for (cellNumber = 0; cellNumber < 64; cellNumber++) {
    var checkRight = true, checkDown = true
    var columnNumber = cellNumber % 8;
    if (columnNumber == 7) { //if it's in the rightmost column
      checkRight = false;
    };
    if (cellNumber > 55) { //if it's in the bottom row
      checkDown = false;
    };
    gridOfGems = look(gridOfGems, checkRight, checkDown, cellNumber, columnNumber);
  };
  for (cellNumber = 0; cellNumber < 64; cellNumber++) {
    if (gridOfGems[cellNumber].horizontalWeight > 2) {
      reaction = true;
    } else if (gridOfGems[cellNumber].verticalWeight > 2) {
      reaction = true;
    };
  };
  //console.log(reaction);
  return reaction;
};


function look(gridOfGems, checkRight, checkDown, cellNumber, columnNumber) {
  //console.log(cellNumber);
  if (columnNumber != 0) {
    if (gridOfGems[cellNumber].colour == gridOfGems[cellNumber - 1].colour) {
      gridOfGems[cellNumber].horizontalWeight = gridOfGems[cellNumber - 1].horizontalWeight; //The number of same colour gems adjacent horizontally
      checkRight = false;
    };
  };
  if (checkRight) {
    var lookDistance = 1, same = true; //lookDistance controls which cell is being checked, same checks if the cell is the same colour
    while (same) {
      if (gridOfGems[cellNumber].colour == gridOfGems[cellNumber + lookDistance].colour) {
        //console.log(gridOfGems[cellNumber].colour);
        lookDistance += 1;
        gridOfGems[cellNumber].addToHorizontalWeight();
        if ((cellNumber + lookDistance) % 8 == 0) {
          same = false;
        };
      } else {
        same = false;
      };
    };
  };
  if (cellNumber > 7) {
    if (gridOfGems[cellNumber].colour == gridOfGems[cellNumber - 8].colour) {
      gridOfGems[cellNumber].verticalWeight = gridOfGems[cellNumber - 8].verticalWeight //The number of same colour gems adjacent vertically
      checkDown = false;
    };
  };
  if (checkDown) {
    var lookDistance = 1, same = true; //lookDistance controls which cell is being checked, same checks if the cell is the same colour
    while (same) {
      if (gridOfGems[cellNumber].colour == gridOfGems[cellNumber + (8 * lookDistance)].colour) {
        lookDistance += 1;
        gridOfGems[cellNumber].addToVerticalWeight();
        if (cellNumber + (lookDistance * 8) > 63) {
          same = false;
        };
      } else {
        same = false;
      };
    };
  };
  return gridOfGems;
};


function checkForPossibleReactions(gridOfGems) {
  var possibleMoves = false; //keeps track of whether or not a possible move has been found
  const columnChecks = [[1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2], [0, 1], [0]], rowChecks = [[5, 6, 7], [4, 5, 6, 7], [4, 5, 6, 7], [4, 5, 6, 7], [4, 5, 6, 7], [4, 5, 6], [4, 5], [4]]; //determines which rows and columns are checked to determine a possible reaction in order to avoid checking a cell that either isn't relevant to the reaction or doesn't exist
  for (cellNumber = 0; cellNumber < 64; cellNumber++) {
    var columnNumber = cellNumber % 8, rowNumber = Math.floor(cellNumber / 8); //checklist controls which cells relevant to the selected cell, columnNumber is which column the cell is in
    var checkList = columnChecks[columnNumber].concat(rowChecks[rowNumber]); //adds the relevant cells to check to checkList
    //console.log(checkList);
    possibleMoves = checkEndHorizontal(gridOfGems, checkList, cellNumber, possibleMoves);
    if (possibleMoves == false) {
      possibleMoves = checkEndVertical(gridOfGems, checkList, cellNumber, possibleMoves);
      if (possibleMoves == false) {
        possibleMoves = checkMidHorizontal(gridOfGems, checkList, cellNumber, possibleMoves);
        if (possibleMoves == false) {
          possibleMoves = checkMidVertical(gridOfGems, checkList, cellNumber, possibleMoves);
        } else {
          break; //allows the loop to be left early if there is a possible move
        };
      } else {
        break; //allows the loop to be left early if there is a possible move
      };
    } else {
      break; //allows the loop to be left early if there is a possible move
    };
    //console.log(cellNumber);
  };
  //console.log(possibleMoves);
  return possibleMoves;
};


function checkEndHorizontal(gridOfGems, checkList, cellNumber, possibleMoves) {
  if (gridOfGems[cellNumber].horizontalWeight == 2 && checkList.indexOf(2) >= 0) {
    const colour = gridOfGems[cellNumber].colour;
    if (checkList.indexOf(3) >= 0) {
      //this needs to be done in two seperate if statements in order to avoid an error otherwise the function will try to check an index in gridOfGems that does not exist
      if (colour == gridOfGems[cellNumber + 3].colour) {
        possibleMoves = true;
      };
    };
    if (checkList.indexOf(4) >= 0) {
      if (colour == gridOfGems[cellNumber - 6].colour) {
        //this needs to be done in two seperate if statements in order to avoid an error otherwise the function will try to check an index in gridOfGems that does not exist
        possibleMoves = true;
      };
    };
    if (checkList.indexOf(5) >= 0) {
      //this needs to be done in two seperate if statements in order to avoid an error otherwise the function will try to check an index in gridOfGems that does not exist
      if (colour == gridOfGems[cellNumber + 10].colour) {
        possibleMoves = true;
      };
    };
  };
  return possibleMoves;
};


function checkEndVertical(gridOfGems, checkList, cellNumber, possibleMoves) {
  if (gridOfGems[cellNumber].verticalWeight == 2 && checkList.indexOf(6) >= 0) {
    const colour = gridOfGems[cellNumber].colour;
    if (checkList.indexOf(7) >= 0) {
      //this needs to be done in two seperate if statements in order to avoid an error otherwise the function will try to check an index in gridOfGems that does not exist
      if (colour == gridOfGems[cellNumber + 24].colour) {
        possibleMoves = true;
      };
    };
    if (checkList.indexOf(0) >= 0) {
      //this needs to be done in two seperate if statements in order to avoid an error otherwise the function will try to check an index in gridOfGems that does not exist
      if (colour == gridOfGems[cellNumber + 15].colour) {
        possibleMoves = true;
      };
    };
    if (checkList.indexOf(1) >= 0) {
      //this needs to be done in two seperate if statements in order to avoid an error otherwise the function will try to check an index in gridOfGems that does not exist
      if (colour == gridOfGems[cellNumber + 17].colour) {
        possibleMoves = true;
      };
    };
  };
  return possibleMoves;
};


function checkMidHorizontal(gridOfGems, checkList, cellNumber, possibleMoves) {
  if (checkList.indexOf(2) >= 0) {
    const colour = gridOfGems[cellNumber].colour;
    //this needs to be done in two seperate if statements in order to avoid an error otherwise the function will try to check an index in gridOfGems that does not exist
    if (colour == gridOfGems[cellNumber + 2].colour) {
      if (checkList.indexOf(4) >= 0) {
        //this needs to be done in two seperate if statements in order to avoid an error otherwise the function will try to check an index in gridOfGems that does not exist
        if (colour == gridOfGems[cellNumber - 7].colour) {
          possibleMoves = true;
        };
      };
      if (checkList.indexOf(5) >= 0) {
        //this needs to be done in two seperate if statements in order to avoid an error otherwise the function will try to check an index in gridOfGems that does not exist
        if (colour == gridOfGems[cellNumber + 9].colour) {
          possibleMoves = true;
        };
      };
    };
  };
  return possibleMoves;
};


function checkMidVertical(gridOfGems, checkList, cellNumber, possibleMoves) {
  if (checkList.indexOf(6) >= 0) {
    const colour = gridOfGems[cellNumber].colour;
    //this needs to be done in two seperate if statements in order to avoid an error otherwise the function will try to check an index in gridOfGems that does not exist
    if (colour == gridOfGems[cellNumber + 16].colour) {
      if (checkList.indexOf(0) >= 0) {
        //this needs to be done in two seperate if statements in order to avoid an error otherwise the function will try to check an index in gridOfGems that does not exist
        if (colour == gridOfGems[cellNumber + 7].colour) {
          possibleMoves = true;
        };
      };
      if (checkList.indexOf(1) >= 0) {
        //this needs to be done in two seperate if statements in order to avoid an error otherwise the function will try to check an index in gridOfGems that does not exist
        if (colour == gridOfGems[cellNumber + 9].colour) {
          possibleMoves = true;
        };
      };
    };
  };
  return possibleMoves;
};


function selectGem(cellNumber) {
  //console.log(cellNumber);
  //console.log(selectedGems);
  var cellName = makeCellName(cellNumber);
  if (selectedGems.indexOf(cellNumber) >= 0) {
    //if the cellNumber is already selected
    selectedGems.splice(selectedGems.indexOf(cellNumber), 1); //remove it from the list of selected gems
    document.getElementById(cellName).style.backgroundColor = "transparent"; //change its backround colour back to default
  } else if (selectedGems.length > 0) {
    var otherCell = selectedGems[0]; //the other selected gem
    var cellDeselected = makeCellName(otherCell);
    if (cellNumber == otherCell - 8 || cellNumber == otherCell - 1 || cellNumber == otherCell + 1 || cellNumber == otherCell + 8) {
      //if the two selected gems are adjacent
      selectedGems.push(cellNumber); //add to the list of selected gems
      document.getElementById(cellDeselected).style.backgroundColor = "transparent"; //change the background colour of the already selected gem to the default
      swapGems();
    } else {
      //if the two gems are not adjacent
      selectedGems = [cellNumber]; //makes the newly selected gem the only item in the list of selected gems
      document.getElementById(cellDeselected).style.backgroundColor = "transparent"; //change the background colour of the already selected gem to the default
      document.getElementById(cellName).style.backgroundColor = "yellow"; //change its background colour to yellow
    };
  } else {
    //if the list of selected gems was empty
    selectedGems.push(cellNumber);
    document.getElementById(cellName).style.backgroundColor = "yellow"; //change its background colour to yellow
  };
};


function swapGems() {
  var newGrid = [];
  for (cellNumber = 0; cellNumber < 64; cellNumber++) {
    var cellName = makeCellName(cellNumber);
    if (cellNumber == selectedGems[0]) { 
      //if the current cellNumber is the first item in the list of selected gems
      newGrid.push(new cell(gridOfGems[selectedGems[1]].colour, gridOfGems[selectedGems[1]].url));
    } else if (cellNumber == selectedGems[1]) {
      //if the current cellNumber is the second item in the list of selected gems
      newGrid.push(new cell(gridOfGems[selectedGems[0]].colour, gridOfGems[selectedGems[0]].url));
    } else {
      //if the current cellNumber isn't in the list of selected gems
      newGrid.push(new cell(gridOfGems[cellNumber].colour, gridOfGems[cellNumber].url))
    };
    document.getElementById(cellName).innerHTML = newGrid[cellNumber].url;
  };
  reaction = checkForPendingReactions(newGrid);
  if (reaction == true) {
    initiateReaction(0);
    gridOfGems = newGrid;
  } else {
    for (cellNumber = 0; cellNumber < 64; cellNumber++) {
      cellName = makeCellName(cellNumber);
      document.getElementById(cellName).innerHTML = gridOfGems[cellNumber].url;
    };
  };
  selectedGems = [];
};


function initiateReaction(reactionNumber) {
  var falling = [], reactionList = [], flameFormPoints = [], starFormPoints = [], hypercubeFormPoints = [], supernovaFormPoints = []; //lists relevant for later forming gems
  for (cellNumber = 0; cellNumber < 64; cellNumber++) {
    var formedGem = "none", columnNumber = cellNumber % 8, formedHere = false; //formedGem dictates the type of special gem to be formed and formedHere dictates if it's formed at the current cell
    var horizontalWeight = gridOfGems[cellNumber].horizontalWeight, verticalWeight = gridOfGems[cellNumber].verticalWeight;
    if (horizontalWeight > 2) {
      var horizontalReaction = true; //keeps track of whether or not there is a horizontal reaction here
      if ((reactionNumber == 0 && selectedGems.indexOf(cellNumber) >= 0) || (reactionNumber > 0 && columnNumber == 0)) {
        //(if there have been no prior reactions and it is one of the selected gems) or (if there has been at least one prior reaction and the cell is in the leftmost column)
        formedHere =  true;
      } else if (cellNumber > 0) {
        //checks if the there is a cell to left of which the colour can be checked
        if (reactionNumber > 0 && gridOfGems[cellNumber].colour !== gridOfGems[cellNumber - 1].colour) {
          //if there has been at least one prior reaction and the gem is not the same colour as the one to the left of it
          formedHere = true;
        };
      };
    };
    if (verticalWeight > 2) {
      var verticalReaction = true; //keeps track of whether or not there is a vertical reaction here
      if ((reactionNumber == 0 && selectedGems.indexOf(cellNumber) >= 0) || (reactionNumber > 0 && cellNumber < 8)) {
        //(if there have been no prior reactions and it is one of the selected gems) or (if there has been at least one prior reaction and the cell is in the top row)
        formedHere = true;
      } else if (cellNumber > 7) {
        //checks if the there is a cell above of which the colour can be checked
        if (reactionNumber > 0 && gridOfGems[cellNumber].colour !== gridOfGems[cellNumber - 8].colour) {
          //if there has been at least one prior reaction and the gem is not the same colour as the one above it
          formedHere = true;
        };
      };
    };
    if (horizontalReaction == true || verticalReaction == true) {
      if (gridOfGems[cellNumber].special == false) {
        console.log("To be added.")
        //reactSpecialGems()
      } else if (horizontalReaction == true && verticalReaction == true) {
        formedGem = "star"
      } //add more else ifs conditional on varying values of horizontal and vertical reaction to check what type of gem is formed. Ensure this doesn't override star gem form.
    };
  };
};


var selectedGems = [], gridOfGems = [];
window.onload = startUp;