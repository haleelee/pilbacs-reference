// import {format} from 'date-fns';
// import {ColumnFilter} from './ColumnFilter'

export const COLUMNSBOXSCORE = [
    { Header: "First Name", Footer: "First Name", accessor: "playerFName", },
    { Header: "Last Name", Footer: "Last Name", accessor: "playerLName"},
    { Header: "REB", Footer: "REB", accessor: "playerReb", disableFilters: true },
    { Header: "AST", Footer: "AST", accessor: "playerAst", disableFilters: true },
    { Header: "BLK", Footer: "BLK", accessor: "playerBlk", disableFilters: true },
    { Header: "STL", Footer: "STL", accessor: "playerStl", disableFilters: true },
    { Header: "PTS", Footer: "PTS", accessor: "playerPts", disableFilters: true }
]

export const GROUPED_COLUMNS = [
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            { Header: "First Name", Footer: "First Name", accessor: "playerFName" },
            { Header: "Last Name", Footer: "Last Name", accessor: "playerLName" }
        ]
    },
    {
        Header: 'Stats',
        Footer: 'Stats',
        columns: [
            { Header: "REB", Footer: "REB", accessor: "playerReb" },
            { Header: "AST", Footer: "AST", accessor: "playerAst" },
            { Header: "BLK", Footer: "BLK", accessor: "playerBlk" },
            { Header: "STL", Footer: "STL", accessor: "playerStl" },
            { Header: "PTS", Footer: "PTS", accessor: "playerPts" }
        ]
    }
]