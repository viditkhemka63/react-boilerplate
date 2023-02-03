import { FC, useState } from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import type { ExpandableConfig } from "antd/es/table/interface";

import "./table.scss";

interface DataType {
  key: number;
  name: string;
  age: number;
  address: string;
  description: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value as string) === 0,
  },
];

const data: DataType[] = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: "John Brown",
    age: Number(`${i}2`),
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const defaultExpandable = {
  expandedRowRender: (record: DataType) => <p>{record.description}</p>,
};

interface TableComponentPropS {
  //   data: any[];
  //   config: any[];
}

export const TableComponent: FC<
  TableComponentPropS
> = ({}: TableComponentPropS) => {
  const [loading, setLoading] = useState(false);
  const [expandable, setExpandable] = useState<
    ExpandableConfig<DataType> | undefined
  >(defaultExpandable);

  const [hasData, setHasData] = useState(true);

  const tableColumns = columns.map((item) => ({ ...item }));

  const tableProps: TableProps<DataType> = {
    loading,
    expandable,
    showHeader: true,
  };

  return (
    <>
      <Table
        className="table-wrapper"
        {...tableProps}
        columns={tableColumns}
        dataSource={hasData ? data : []}
      />
    </>
  );
};
