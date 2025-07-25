import {
  Button,
  Cell,
  Collection,
  Column as AriaColumn,
  ColumnProps,
  Row as AriaRow,
  RowProps,
  Table as AriaTable,
  TableHeader as AriaTableHeader,
  TableHeaderProps,
  TableProps,
  useTableOptions
} from 'react-aria-components';
import {MyCheckbox} from './Checkbox';

import './Table.css';

export function Table(props: TableProps) {
  return <AriaTable {...props} />;
}

export { Table as MyTable };

export function Column(props: ColumnProps) {
  return (
    (
      <AriaColumn {...props}>
        {({ allowsSorting, sortDirection }) => (
          <>
            {props.children}
            {allowsSorting && (
              <span aria-hidden="true" className="sort-indicator">
                {sortDirection === 'ascending' ? '▲' : '▼'}
              </span>
            )}
          </>
        )}
      </AriaColumn>
    )
  );
}

export function TableHeader<T extends object>(
  { columns, children }: TableHeaderProps<T>
) {
  let { selectionBehavior, selectionMode, allowsDragging } = useTableOptions();

  return (
    (
      <AriaTableHeader>
        {/* Add extra columns for drag and drop and selection. */}
        {allowsDragging && <AriaColumn />}
        {selectionBehavior === 'toggle' && (
          <AriaColumn>
            {selectionMode === 'multiple' && <MyCheckbox slot="selection" />}
          </AriaColumn>
        )}
        <Collection items={columns}>
          {children}
        </Collection>
      </AriaTableHeader>
    )
  );
}

export { TableHeader as MyTableHeader };

export function Row<T extends object>(
  { id, columns, children, ...otherProps }: RowProps<T>
) {
  let { selectionBehavior, allowsDragging } = useTableOptions();

  return (
    (
      <AriaRow id={id} {...otherProps}>
        {allowsDragging && (
          <Cell>
            <Button slot="drag">≡</Button>
          </Cell>
        )}
        {selectionBehavior === 'toggle' && (
          <Cell>
            <MyCheckbox slot="selection" />
          </Cell>
        )}
        <Collection items={columns}>
          {children}
        </Collection>
      </AriaRow>
    )
  );
}

export { Row as MyRow };
