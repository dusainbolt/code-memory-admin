import React from 'react';
import { Pagination, Table, Empty } from 'antd';
import { useTranslation } from 'react-i18next';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { FilterValue, GetRowKey, SorterResult, TableCurrentDataSource } from 'antd/lib/table/interface';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

type TableProps = {
  columns?: ColumnsType<any>;
  dataSource?: readonly any[];
  current?: number;
  pageSize?: number;
  total?: number;
  rowClassName?: string;
  pageSizeOptions?: string[];
  onChangeTable?: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<any> | SorterResult<any>[],
    extra: TableCurrentDataSource<any>
  ) => void;
  onChangePagination?: (page: number, pageSize?: number) => void;
  size?: SizeType;
  bordered?: boolean;
  rowKey?: string | GetRowKey<any>;
  className?: string;
  scroll?: any;
  loading?: boolean;
  showTotal?: boolean;
  showSizeChanger?: boolean;
  enablePagination?: boolean;
};

function TableCommon({
  columns = [],
  dataSource = [],
  current = 0,
  pageSize = 0,
  total = 0,
  rowClassName = '',
  pageSizeOptions = ['10', '20', '50'],
  onChangeTable,
  onChangePagination,
  size,
  enablePagination = true,
  ...props
}: TableProps) {
  const { t } = useTranslation();
  return (
    <div className="table">
      <Table
        className="table__table"
        locale={{ emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={t('common.noData')} /> }}
        pagination={false}
        columns={columns}
        bordered
        rowClassName={rowClassName}
        dataSource={dataSource}
        onChange={onChangeTable}
        rowKey={record => record?.id}
        showSorterTooltip={false}
        {...props}
      />
      {enablePagination && (
        <div className="my-pagination">
          <Pagination
            size="small"
            total={total ? total : 1}
            current={current}
            pageSize={pageSize}
            pageSizeOptions={pageSizeOptions}
            onChange={onChangePagination}
            locale={{ items_per_page: `/ ${t('common.text_page_size')}` }}
            showSizeChanger
          />
        </div>
      )}
    </div>
  );
}

export default TableCommon;
