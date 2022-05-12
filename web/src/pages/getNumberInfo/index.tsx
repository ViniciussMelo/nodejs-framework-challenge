import { useState } from 'react';

import 'antd/dist/antd.css';
import { Input, Table } from 'antd';
import GetNumberInformationService from '../../services/GetNumberInformationService';
const { Search } = Input;

interface IDataSource {
  key: number;
  number: number;
  dividerNumbers: string;
  primesNumber: string;
}

const columns = [
  {
    title: 'Number',
    dataIndex: 'number',
    align: 'right' as const,
  },
  {
    title: 'Divider numbers',
    dataIndex: 'dividerNumbers',
  },
  {
    title: 'Primes numbers',
    dataIndex: 'primesNumber',
  },
];

const GetNumberInfo = () => {
  const [dataSource, setDataSource] = useState<IDataSource[]>([]);

  const formatArray = (numbers: Array<number>): string => {
    return numbers.join(', ');
  }

  const getNumberInformation = async (value: string) => {
    const number = parseInt(value);

    if (!number) return alert('Invalid number!');

    const { data } = await GetNumberInformationService.getNumberInformation(number);

    setDataSource([...dataSource, {
      key: dataSource.length,
      number: number,
      dividerNumbers: formatArray(data.dividerNumbers),
      primesNumber: formatArray(data.primesNumber)
    }])
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '20vh'
        }}
      >
        <Search
          placeholder="Type a number to get his information"
          allowClear
          onSearch={getNumberInformation}
          style={{ width: 304 }}
        />
      </div>
      <div>
        <Table 
          dataSource={dataSource} 
          columns={columns}
          pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20']}}
        />
      </div>
    </>
  )
}

export default GetNumberInfo;