// import {format} from 'date-fns';
// import {ColumnFilter} from './ColumnFilter'

export const COLUMNSPLAYERS = [
    { Header: "Date", Footer: "Date", accessor: "gameDate", },
    { Header: "Last Name", Footer: "Last Name", accessor: "playerLName"},
    { Header: "REB", Footer: "REB", accessor: "playerReb", disableFilters: true },
    { Header: "AST", Footer: "AST", accessor: "playerAst", disableFilters: true },
    { Header: "BLK", Footer: "BLK", accessor: "playerBlk", disableFilters: true },
    { Header: "STL", Footer: "STL", accessor: "playerStl", disableFilters: true },
    { Header: "PTS", Footer: "PTS", accessor: "playerPts", disableFilters: true }
]
