/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns,
datastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsToTerraform,
datastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsToHclTerraform,
DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsList,
DatastreamStreamSourceConfigSqlServerSourceConfigChangeTables,
datastreamStreamSourceConfigSqlServerSourceConfigChangeTablesToTerraform,
datastreamStreamSourceConfigSqlServerSourceConfigChangeTablesToHclTerraform,
DatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesOutputReference,
DatastreamStreamSourceConfigMongodbSourceConfig,
datastreamStreamSourceConfigMongodbSourceConfigToTerraform,
datastreamStreamSourceConfigMongodbSourceConfigToHclTerraform,
DatastreamStreamSourceConfigMongodbSourceConfigOutputReference,
DatastreamStreamSourceConfigMysqlSourceConfig,
datastreamStreamSourceConfigMysqlSourceConfigToTerraform,
datastreamStreamSourceConfigMysqlSourceConfigToHclTerraform,
DatastreamStreamSourceConfigMysqlSourceConfigOutputReference,
DatastreamStreamSourceConfigOracleSourceConfig,
datastreamStreamSourceConfigOracleSourceConfigToTerraform,
datastreamStreamSourceConfigOracleSourceConfigToHclTerraform,
DatastreamStreamSourceConfigOracleSourceConfigOutputReference,
DatastreamStreamSourceConfigPostgresqlSourceConfig,
datastreamStreamSourceConfigPostgresqlSourceConfigToTerraform,
datastreamStreamSourceConfigPostgresqlSourceConfigToHclTerraform,
DatastreamStreamSourceConfigPostgresqlSourceConfigOutputReference,
DatastreamStreamSourceConfigSalesforceSourceConfig,
datastreamStreamSourceConfigSalesforceSourceConfigToTerraform,
datastreamStreamSourceConfigSalesforceSourceConfigToHclTerraform,
DatastreamStreamSourceConfigSalesforceSourceConfigOutputReference,
DatastreamStreamSourceConfigSpannerSourceConfig,
datastreamStreamSourceConfigSpannerSourceConfigToTerraform,
datastreamStreamSourceConfigSpannerSourceConfigToHclTerraform,
DatastreamStreamSourceConfigSpannerSourceConfigOutputReference } from './structs0';
export interface DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#columns DatastreamStream#columns}
  */
  readonly columns?: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesToTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    columns: cdktn.listMapper(datastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsToTerraform, true)(struct!.columns),
  }
}


export function datastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesToHclTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    columns: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._columns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._columns.internalValue = value.columns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns[] | cdktn.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }
}

export class DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesOutputReference {
    return new DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#schema DatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#tables DatastreamStream#tables}
  */
  readonly tables?: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasToTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    tables: cdktn.listMapper(datastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesToTerraform, true)(struct!.tables),
  }
}


export function datastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasToHclTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tables: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._tables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._tables.internalValue = value.tables;
    }
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables[] | cdktn.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}

export class DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasOutputReference {
    return new DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects {
  /**
  * schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#schemas DatastreamStream#schemas}
  */
  readonly schemas: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsToTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsOutputReference | DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schemas: cdktn.listMapper(datastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasToTerraform, true)(struct!.schemas),
  }
}


export function datastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsToHclTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsOutputReference | DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schemas: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasToHclTerraform, true)(struct!.schemas),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemas.internalValue = value.schemas;
    }
  }

  // schemas - computed: false, optional: false, required: true
  private _schemas = new DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }
  public putSchemas(value: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas[] | cdktn.IResolvable) {
    this._schemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas.internalValue;
  }
}
export interface DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#column DatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The SQL Server data type. Full data types list can be found here:
  * https://learn.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#data_type DatastreamStream#data_type}
  */
  readonly dataType?: string;
}

export function datastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsToTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
  }
}


export function datastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsToHclTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._dataType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._dataType = value.dataType;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: true, optional: false, required: false
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }

  // ordinal_position - computed: true, optional: false, required: false
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }
}

export class DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsOutputReference {
    return new DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#columns DatastreamStream#columns}
  */
  readonly columns?: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesToTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    columns: cdktn.listMapper(datastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsToTerraform, true)(struct!.columns),
  }
}


export function datastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesToHclTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    columns: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._columns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._columns.internalValue = value.columns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns[] | cdktn.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }
}

export class DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesOutputReference {
    return new DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#schema DatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#tables DatastreamStream#tables}
  */
  readonly tables?: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasToTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    tables: cdktn.listMapper(datastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesToTerraform, true)(struct!.tables),
  }
}


export function datastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasToHclTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tables: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._tables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._tables.internalValue = value.tables;
    }
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables[] | cdktn.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}

export class DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasOutputReference {
    return new DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects {
  /**
  * schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#schemas DatastreamStream#schemas}
  */
  readonly schemas: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsToTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsOutputReference | DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schemas: cdktn.listMapper(datastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasToTerraform, true)(struct!.schemas),
  }
}


export function datastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsToHclTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsOutputReference | DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schemas: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasToHclTerraform, true)(struct!.schemas),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemas.internalValue = value.schemas;
    }
  }

  // schemas - computed: false, optional: false, required: true
  private _schemas = new DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }
  public putSchemas(value: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas[] | cdktn.IResolvable) {
    this._schemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas.internalValue;
  }
}
export interface DatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs {
}

export function datastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsToTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsOutputReference | DatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function datastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsToHclTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsOutputReference | DatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatastreamStreamSourceConfigSqlServerSourceConfig {
  /**
  * Max concurrent backfill tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#max_concurrent_backfill_tasks DatastreamStream#max_concurrent_backfill_tasks}
  */
  readonly maxConcurrentBackfillTasks?: number;
  /**
  * Max concurrent CDC tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#max_concurrent_cdc_tasks DatastreamStream#max_concurrent_cdc_tasks}
  */
  readonly maxConcurrentCdcTasks?: number;
  /**
  * change_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#change_tables DatastreamStream#change_tables}
  */
  readonly changeTables?: DatastreamStreamSourceConfigSqlServerSourceConfigChangeTables;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#exclude_objects DatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#include_objects DatastreamStream#include_objects}
  */
  readonly includeObjects?: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects;
  /**
  * transaction_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#transaction_logs DatastreamStream#transaction_logs}
  */
  readonly transactionLogs?: DatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs;
}

export function datastreamStreamSourceConfigSqlServerSourceConfigToTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigOutputReference | DatastreamStreamSourceConfigSqlServerSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_concurrent_backfill_tasks: cdktn.numberToTerraform(struct!.maxConcurrentBackfillTasks),
    max_concurrent_cdc_tasks: cdktn.numberToTerraform(struct!.maxConcurrentCdcTasks),
    change_tables: datastreamStreamSourceConfigSqlServerSourceConfigChangeTablesToTerraform(struct!.changeTables),
    exclude_objects: datastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    include_objects: datastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
    transaction_logs: datastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsToTerraform(struct!.transactionLogs),
  }
}


export function datastreamStreamSourceConfigSqlServerSourceConfigToHclTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigOutputReference | DatastreamStreamSourceConfigSqlServerSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_concurrent_backfill_tasks: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrentBackfillTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_concurrent_cdc_tasks: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrentCdcTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    change_tables: {
      value: datastreamStreamSourceConfigSqlServerSourceConfigChangeTablesToHclTerraform(struct!.changeTables),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesList",
    },
    exclude_objects: {
      value: datastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsToHclTerraform(struct!.excludeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsList",
    },
    include_objects: {
      value: datastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsToHclTerraform(struct!.includeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsList",
    },
    transaction_logs: {
      value: datastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsToHclTerraform(struct!.transactionLogs),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSqlServerSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigSqlServerSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentBackfillTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentBackfillTasks = this._maxConcurrentBackfillTasks;
    }
    if (this._maxConcurrentCdcTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentCdcTasks = this._maxConcurrentCdcTasks;
    }
    if (this._changeTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeTables = this._changeTables?.internalValue;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    if (this._transactionLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionLogs = this._transactionLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSqlServerSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentBackfillTasks = undefined;
      this._maxConcurrentCdcTasks = undefined;
      this._changeTables.internalValue = undefined;
      this._excludeObjects.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
      this._transactionLogs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentBackfillTasks = value.maxConcurrentBackfillTasks;
      this._maxConcurrentCdcTasks = value.maxConcurrentCdcTasks;
      this._changeTables.internalValue = value.changeTables;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._includeObjects.internalValue = value.includeObjects;
      this._transactionLogs.internalValue = value.transactionLogs;
    }
  }

  // max_concurrent_backfill_tasks - computed: true, optional: true, required: false
  private _maxConcurrentBackfillTasks?: number; 
  public get maxConcurrentBackfillTasks() {
    return this.getNumberAttribute('max_concurrent_backfill_tasks');
  }
  public set maxConcurrentBackfillTasks(value: number) {
    this._maxConcurrentBackfillTasks = value;
  }
  public resetMaxConcurrentBackfillTasks() {
    this._maxConcurrentBackfillTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentBackfillTasksInput() {
    return this._maxConcurrentBackfillTasks;
  }

  // max_concurrent_cdc_tasks - computed: true, optional: true, required: false
  private _maxConcurrentCdcTasks?: number; 
  public get maxConcurrentCdcTasks() {
    return this.getNumberAttribute('max_concurrent_cdc_tasks');
  }
  public set maxConcurrentCdcTasks(value: number) {
    this._maxConcurrentCdcTasks = value;
  }
  public resetMaxConcurrentCdcTasks() {
    this._maxConcurrentCdcTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentCdcTasksInput() {
    return this._maxConcurrentCdcTasks;
  }

  // change_tables - computed: false, optional: true, required: false
  private _changeTables = new DatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesOutputReference(this, "change_tables");
  public get changeTables() {
    return this._changeTables;
  }
  public putChangeTables(value: DatastreamStreamSourceConfigSqlServerSourceConfigChangeTables) {
    this._changeTables.internalValue = value;
  }
  public resetChangeTables() {
    this._changeTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTablesInput() {
    return this._changeTables.internalValue;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects) {
    this._excludeObjects.internalValue = value;
  }
  public resetExcludeObjects() {
    this._excludeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeObjectsInput() {
    return this._excludeObjects.internalValue;
  }

  // include_objects - computed: false, optional: true, required: false
  private _includeObjects = new DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: DatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }

  // transaction_logs - computed: false, optional: true, required: false
  private _transactionLogs = new DatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsOutputReference(this, "transaction_logs");
  public get transactionLogs() {
    return this._transactionLogs;
  }
  public putTransactionLogs(value: DatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs) {
    this._transactionLogs.internalValue = value;
  }
  public resetTransactionLogs() {
    this._transactionLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionLogsInput() {
    return this._transactionLogs.internalValue;
  }
}
export interface DatastreamStreamSourceConfig {
  /**
  * Source connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#source_connection_profile DatastreamStream#source_connection_profile}
  */
  readonly sourceConnectionProfile: string;
  /**
  * mongodb_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#mongodb_source_config DatastreamStream#mongodb_source_config}
  */
  readonly mongodbSourceConfig?: DatastreamStreamSourceConfigMongodbSourceConfig;
  /**
  * mysql_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#mysql_source_config DatastreamStream#mysql_source_config}
  */
  readonly mysqlSourceConfig?: DatastreamStreamSourceConfigMysqlSourceConfig;
  /**
  * oracle_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#oracle_source_config DatastreamStream#oracle_source_config}
  */
  readonly oracleSourceConfig?: DatastreamStreamSourceConfigOracleSourceConfig;
  /**
  * postgresql_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#postgresql_source_config DatastreamStream#postgresql_source_config}
  */
  readonly postgresqlSourceConfig?: DatastreamStreamSourceConfigPostgresqlSourceConfig;
  /**
  * salesforce_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#salesforce_source_config DatastreamStream#salesforce_source_config}
  */
  readonly salesforceSourceConfig?: DatastreamStreamSourceConfigSalesforceSourceConfig;
  /**
  * spanner_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#spanner_source_config DatastreamStream#spanner_source_config}
  */
  readonly spannerSourceConfig?: DatastreamStreamSourceConfigSpannerSourceConfig;
  /**
  * sql_server_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#sql_server_source_config DatastreamStream#sql_server_source_config}
  */
  readonly sqlServerSourceConfig?: DatastreamStreamSourceConfigSqlServerSourceConfig;
}

export function datastreamStreamSourceConfigToTerraform(struct?: DatastreamStreamSourceConfigOutputReference | DatastreamStreamSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_connection_profile: cdktn.stringToTerraform(struct!.sourceConnectionProfile),
    mongodb_source_config: datastreamStreamSourceConfigMongodbSourceConfigToTerraform(struct!.mongodbSourceConfig),
    mysql_source_config: datastreamStreamSourceConfigMysqlSourceConfigToTerraform(struct!.mysqlSourceConfig),
    oracle_source_config: datastreamStreamSourceConfigOracleSourceConfigToTerraform(struct!.oracleSourceConfig),
    postgresql_source_config: datastreamStreamSourceConfigPostgresqlSourceConfigToTerraform(struct!.postgresqlSourceConfig),
    salesforce_source_config: datastreamStreamSourceConfigSalesforceSourceConfigToTerraform(struct!.salesforceSourceConfig),
    spanner_source_config: datastreamStreamSourceConfigSpannerSourceConfigToTerraform(struct!.spannerSourceConfig),
    sql_server_source_config: datastreamStreamSourceConfigSqlServerSourceConfigToTerraform(struct!.sqlServerSourceConfig),
  }
}


export function datastreamStreamSourceConfigToHclTerraform(struct?: DatastreamStreamSourceConfigOutputReference | DatastreamStreamSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_connection_profile: {
      value: cdktn.stringToHclTerraform(struct!.sourceConnectionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mongodb_source_config: {
      value: datastreamStreamSourceConfigMongodbSourceConfigToHclTerraform(struct!.mongodbSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMongodbSourceConfigList",
    },
    mysql_source_config: {
      value: datastreamStreamSourceConfigMysqlSourceConfigToHclTerraform(struct!.mysqlSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMysqlSourceConfigList",
    },
    oracle_source_config: {
      value: datastreamStreamSourceConfigOracleSourceConfigToHclTerraform(struct!.oracleSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigOracleSourceConfigList",
    },
    postgresql_source_config: {
      value: datastreamStreamSourceConfigPostgresqlSourceConfigToHclTerraform(struct!.postgresqlSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigPostgresqlSourceConfigList",
    },
    salesforce_source_config: {
      value: datastreamStreamSourceConfigSalesforceSourceConfigToHclTerraform(struct!.salesforceSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSalesforceSourceConfigList",
    },
    spanner_source_config: {
      value: datastreamStreamSourceConfigSpannerSourceConfigToHclTerraform(struct!.spannerSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSpannerSourceConfigList",
    },
    sql_server_source_config: {
      value: datastreamStreamSourceConfigSqlServerSourceConfigToHclTerraform(struct!.sqlServerSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSqlServerSourceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceConnectionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConnectionProfile = this._sourceConnectionProfile;
    }
    if (this._mongodbSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongodbSourceConfig = this._mongodbSourceConfig?.internalValue;
    }
    if (this._mysqlSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlSourceConfig = this._mysqlSourceConfig?.internalValue;
    }
    if (this._oracleSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleSourceConfig = this._oracleSourceConfig?.internalValue;
    }
    if (this._postgresqlSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlSourceConfig = this._postgresqlSourceConfig?.internalValue;
    }
    if (this._salesforceSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceSourceConfig = this._salesforceSourceConfig?.internalValue;
    }
    if (this._spannerSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spannerSourceConfig = this._spannerSourceConfig?.internalValue;
    }
    if (this._sqlServerSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServerSourceConfig = this._sqlServerSourceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceConnectionProfile = undefined;
      this._mongodbSourceConfig.internalValue = undefined;
      this._mysqlSourceConfig.internalValue = undefined;
      this._oracleSourceConfig.internalValue = undefined;
      this._postgresqlSourceConfig.internalValue = undefined;
      this._salesforceSourceConfig.internalValue = undefined;
      this._spannerSourceConfig.internalValue = undefined;
      this._sqlServerSourceConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceConnectionProfile = value.sourceConnectionProfile;
      this._mongodbSourceConfig.internalValue = value.mongodbSourceConfig;
      this._mysqlSourceConfig.internalValue = value.mysqlSourceConfig;
      this._oracleSourceConfig.internalValue = value.oracleSourceConfig;
      this._postgresqlSourceConfig.internalValue = value.postgresqlSourceConfig;
      this._salesforceSourceConfig.internalValue = value.salesforceSourceConfig;
      this._spannerSourceConfig.internalValue = value.spannerSourceConfig;
      this._sqlServerSourceConfig.internalValue = value.sqlServerSourceConfig;
    }
  }

  // source_connection_profile - computed: false, optional: false, required: true
  private _sourceConnectionProfile?: string; 
  public get sourceConnectionProfile() {
    return this.getStringAttribute('source_connection_profile');
  }
  public set sourceConnectionProfile(value: string) {
    this._sourceConnectionProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConnectionProfileInput() {
    return this._sourceConnectionProfile;
  }

  // mongodb_source_config - computed: false, optional: true, required: false
  private _mongodbSourceConfig = new DatastreamStreamSourceConfigMongodbSourceConfigOutputReference(this, "mongodb_source_config");
  public get mongodbSourceConfig() {
    return this._mongodbSourceConfig;
  }
  public putMongodbSourceConfig(value: DatastreamStreamSourceConfigMongodbSourceConfig) {
    this._mongodbSourceConfig.internalValue = value;
  }
  public resetMongodbSourceConfig() {
    this._mongodbSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbSourceConfigInput() {
    return this._mongodbSourceConfig.internalValue;
  }

  // mysql_source_config - computed: false, optional: true, required: false
  private _mysqlSourceConfig = new DatastreamStreamSourceConfigMysqlSourceConfigOutputReference(this, "mysql_source_config");
  public get mysqlSourceConfig() {
    return this._mysqlSourceConfig;
  }
  public putMysqlSourceConfig(value: DatastreamStreamSourceConfigMysqlSourceConfig) {
    this._mysqlSourceConfig.internalValue = value;
  }
  public resetMysqlSourceConfig() {
    this._mysqlSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlSourceConfigInput() {
    return this._mysqlSourceConfig.internalValue;
  }

  // oracle_source_config - computed: false, optional: true, required: false
  private _oracleSourceConfig = new DatastreamStreamSourceConfigOracleSourceConfigOutputReference(this, "oracle_source_config");
  public get oracleSourceConfig() {
    return this._oracleSourceConfig;
  }
  public putOracleSourceConfig(value: DatastreamStreamSourceConfigOracleSourceConfig) {
    this._oracleSourceConfig.internalValue = value;
  }
  public resetOracleSourceConfig() {
    this._oracleSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleSourceConfigInput() {
    return this._oracleSourceConfig.internalValue;
  }

  // postgresql_source_config - computed: false, optional: true, required: false
  private _postgresqlSourceConfig = new DatastreamStreamSourceConfigPostgresqlSourceConfigOutputReference(this, "postgresql_source_config");
  public get postgresqlSourceConfig() {
    return this._postgresqlSourceConfig;
  }
  public putPostgresqlSourceConfig(value: DatastreamStreamSourceConfigPostgresqlSourceConfig) {
    this._postgresqlSourceConfig.internalValue = value;
  }
  public resetPostgresqlSourceConfig() {
    this._postgresqlSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlSourceConfigInput() {
    return this._postgresqlSourceConfig.internalValue;
  }

  // salesforce_source_config - computed: false, optional: true, required: false
  private _salesforceSourceConfig = new DatastreamStreamSourceConfigSalesforceSourceConfigOutputReference(this, "salesforce_source_config");
  public get salesforceSourceConfig() {
    return this._salesforceSourceConfig;
  }
  public putSalesforceSourceConfig(value: DatastreamStreamSourceConfigSalesforceSourceConfig) {
    this._salesforceSourceConfig.internalValue = value;
  }
  public resetSalesforceSourceConfig() {
    this._salesforceSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceSourceConfigInput() {
    return this._salesforceSourceConfig.internalValue;
  }

  // spanner_source_config - computed: false, optional: true, required: false
  private _spannerSourceConfig = new DatastreamStreamSourceConfigSpannerSourceConfigOutputReference(this, "spanner_source_config");
  public get spannerSourceConfig() {
    return this._spannerSourceConfig;
  }
  public putSpannerSourceConfig(value: DatastreamStreamSourceConfigSpannerSourceConfig) {
    this._spannerSourceConfig.internalValue = value;
  }
  public resetSpannerSourceConfig() {
    this._spannerSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spannerSourceConfigInput() {
    return this._spannerSourceConfig.internalValue;
  }

  // sql_server_source_config - computed: false, optional: true, required: false
  private _sqlServerSourceConfig = new DatastreamStreamSourceConfigSqlServerSourceConfigOutputReference(this, "sql_server_source_config");
  public get sqlServerSourceConfig() {
    return this._sqlServerSourceConfig;
  }
  public putSqlServerSourceConfig(value: DatastreamStreamSourceConfigSqlServerSourceConfig) {
    this._sqlServerSourceConfig.internalValue = value;
  }
  public resetSqlServerSourceConfig() {
    this._sqlServerSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerSourceConfigInput() {
    return this._sqlServerSourceConfig.internalValue;
  }
}
export interface DatastreamStreamTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#create DatastreamStream#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#delete DatastreamStream#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/datastream_stream#update DatastreamStream#update}
  */
  readonly update?: string;
}

export function datastreamStreamTimeoutsToTerraform(struct?: DatastreamStreamTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function datastreamStreamTimeoutsToHclTerraform(struct?: DatastreamStreamTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatastreamStreamTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
