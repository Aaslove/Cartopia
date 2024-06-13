import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";

type DataType = {
    _id: string;
    Amount: number;
    Quatity: number;
    Discount: number;
    Status: ReactElement;
    Action: ReactElement;
};

const column: Column<DataType>[] = [
    {
        Header: "ID",
        accessor: "_id",
    },
    {
        Header: "Quatity",
        accessor: "Quatity"
    },
    {
        Header: "Discount",
        accessor: "Discount"
    },
    {
        Header: "Amount",
        accessor: "Amount"
    },
    {
        Header: "Status",
        accessor: "Status"
    },
    {
        Header: "Action",
        accessor: "Action"
    }
];

const MyOrders = () => {

    const [rows] = useState<DataType[]>([
        {
            _id: "adsajfknaasdfk",
            Amount: 4545,
            Quatity: 20,
            Discount: 40,
            Status: <span>processing</span>,
            Action: <Link to={`/orders/adsajfknaasdfk`}>View</Link>
        }
    ])

    const table = TableHOC<DataType>(column, rows, "dashboard-product-box", "Orders", true)();
    return (
        <div className="container">
            <h1>My Orders</h1>
            {table}
        </div>
    );
};

export default MyOrders;
