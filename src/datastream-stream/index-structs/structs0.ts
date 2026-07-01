/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
export interface DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFields {
  /**
  * Field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#field DatastreamStream#field}
  */
  readonly field?: string;
}

export function datastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsToTerraform(struct?: DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
  }
}


export function datastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsToHclTerraform(struct?: DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }
}

export class DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFields[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsOutputReference {
    return new DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollections {
  /**
  * Collection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#collection DatastreamStream#collection}
  */
  readonly collection: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#fields DatastreamStream#fields}
  */
  readonly fields?: DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFields[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsToTerraform(struct?: DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    collection: cdktn.stringToTerraform(struct!.collection),
    fields: cdktn.listMapper(datastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsToTerraform, true)(struct!.fields),
  }
}


export function datastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsToHclTerraform(struct?: DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    collection: {
      value: cdktn.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollections | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollections | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collection = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collection = value.collection;
      this._fields.internalValue = value.fields;
    }
  }

  // collection - computed: false, optional: false, required: true
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollections[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsOutputReference {
    return new DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllMongodbExcludedObjectsDatabases {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#database DatastreamStream#database}
  */
  readonly database: string;
  /**
  * collections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#collections DatastreamStream#collections}
  */
  readonly collections?: DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollections[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllMongodbExcludedObjectsDatabasesToTerraform(struct?: DatastreamStreamBackfillAllMongodbExcludedObjectsDatabases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    collections: cdktn.listMapper(datastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsToTerraform, true)(struct!.collections),
  }
}


export function datastreamStreamBackfillAllMongodbExcludedObjectsDatabasesToHclTerraform(struct?: DatastreamStreamBackfillAllMongodbExcludedObjectsDatabases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collections: {
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsToHclTerraform, true)(struct!.collections),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllMongodbExcludedObjectsDatabases | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._collections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collections = this._collections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllMongodbExcludedObjectsDatabases | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._collections.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._collections.internalValue = value.collections;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // collections - computed: false, optional: true, required: false
  private _collections = new DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsList(this, "collections", false);
  public get collections() {
    return this._collections;
  }
  public putCollections(value: DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollections[] | cdktn.IResolvable) {
    this._collections.internalValue = value;
  }
  public resetCollections() {
    this._collections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionsInput() {
    return this._collections.internalValue;
  }
}

export class DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllMongodbExcludedObjectsDatabases[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesOutputReference {
    return new DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllMongodbExcludedObjects {
  /**
  * databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#databases DatastreamStream#databases}
  */
  readonly databases: DatastreamStreamBackfillAllMongodbExcludedObjectsDatabases[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllMongodbExcludedObjectsToTerraform(struct?: DatastreamStreamBackfillAllMongodbExcludedObjectsOutputReference | DatastreamStreamBackfillAllMongodbExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    databases: cdktn.listMapper(datastreamStreamBackfillAllMongodbExcludedObjectsDatabasesToTerraform, true)(struct!.databases),
  }
}


export function datastreamStreamBackfillAllMongodbExcludedObjectsToHclTerraform(struct?: DatastreamStreamBackfillAllMongodbExcludedObjectsOutputReference | DatastreamStreamBackfillAllMongodbExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    databases: {
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllMongodbExcludedObjectsDatabasesToHclTerraform, true)(struct!.databases),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllMongodbExcludedObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamBackfillAllMongodbExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllMongodbExcludedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databases.internalValue = value.databases;
    }
  }

  // databases - computed: false, optional: false, required: true
  private _databases = new DatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesList(this, "databases", false);
  public get databases() {
    return this._databases;
  }
  public putDatabases(value: DatastreamStreamBackfillAllMongodbExcludedObjectsDatabases[] | cdktn.IResolvable) {
    this._databases.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases.internalValue;
  }
}
export interface DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns {
  /**
  * Column collation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#collation DatastreamStream#collation}
  */
  readonly collation?: string;
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#column DatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The MySQL data type. Full data types list can be found here:
  * https://dev.mysql.com/doc/refman/8.0/en/data-types.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#data_type DatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#nullable DatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktn.IResolvable;
  /**
  * The ordinal position of the column in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#ordinal_position DatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#primary_key DatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform(struct?: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    collation: cdktn.stringToTerraform(struct!.collation),
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
    nullable: cdktn.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktn.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktn.booleanToTerraform(struct!.primaryKey),
  }
}


export function datastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsToHclTerraform(struct?: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    collation: {
      value: cdktn.stringToHclTerraform(struct!.collation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    nullable: {
      value: cdktn.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ordinal_position: {
      value: cdktn.numberToHclTerraform(struct!.ordinalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key: {
      value: cdktn.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collation = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collation = value.collation;
      this._column = value.column;
      this._dataType = value.dataType;
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
    }
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
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

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktn.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktn.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktn.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktn.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference {
    return new DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
  /**
  * mysql_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#mysql_columns DatastreamStream#mysql_columns}
  */
  readonly mysqlColumns?: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesToTerraform(struct?: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    mysql_columns: cdktn.listMapper(datastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform, true)(struct!.mysqlColumns),
  }
}


export function datastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesToHclTerraform(struct?: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable): any {
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
    mysql_columns: {
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsToHclTerraform, true)(struct!.mysqlColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._mysqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlColumns = this._mysqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._mysqlColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._mysqlColumns.internalValue = value.mysqlColumns;
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

  // mysql_columns - computed: false, optional: true, required: false
  private _mysqlColumns = new DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsList(this, "mysql_columns", false);
  public get mysqlColumns() {
    return this._mysqlColumns;
  }
  public putMysqlColumns(value: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktn.IResolvable) {
    this._mysqlColumns.internalValue = value;
  }
  public resetMysqlColumns() {
    this._mysqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlColumnsInput() {
    return this._mysqlColumns.internalValue;
  }
}

export class DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesOutputReference {
    return new DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#database DatastreamStream#database}
  */
  readonly database: string;
  /**
  * mysql_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#mysql_tables DatastreamStream#mysql_tables}
  */
  readonly mysqlTables?: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesToTerraform(struct?: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    mysql_tables: cdktn.listMapper(datastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesToTerraform, true)(struct!.mysqlTables),
  }
}


export function datastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesToHclTerraform(struct?: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mysql_tables: {
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesToHclTerraform, true)(struct!.mysqlTables),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mysqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlTables = this._mysqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._mysqlTables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._mysqlTables.internalValue = value.mysqlTables;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // mysql_tables - computed: false, optional: true, required: false
  private _mysqlTables = new DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesList(this, "mysql_tables", false);
  public get mysqlTables() {
    return this._mysqlTables;
  }
  public putMysqlTables(value: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables[] | cdktn.IResolvable) {
    this._mysqlTables.internalValue = value;
  }
  public resetMysqlTables() {
    this._mysqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlTablesInput() {
    return this._mysqlTables.internalValue;
  }
}

export class DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesOutputReference {
    return new DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllMysqlExcludedObjects {
  /**
  * mysql_databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#mysql_databases DatastreamStream#mysql_databases}
  */
  readonly mysqlDatabases: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllMysqlExcludedObjectsToTerraform(struct?: DatastreamStreamBackfillAllMysqlExcludedObjectsOutputReference | DatastreamStreamBackfillAllMysqlExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mysql_databases: cdktn.listMapper(datastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesToTerraform, true)(struct!.mysqlDatabases),
  }
}


export function datastreamStreamBackfillAllMysqlExcludedObjectsToHclTerraform(struct?: DatastreamStreamBackfillAllMysqlExcludedObjectsOutputReference | DatastreamStreamBackfillAllMysqlExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mysql_databases: {
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesToHclTerraform, true)(struct!.mysqlDatabases),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllMysqlExcludedObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamBackfillAllMysqlExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysqlDatabases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlDatabases = this._mysqlDatabases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllMysqlExcludedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysqlDatabases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysqlDatabases.internalValue = value.mysqlDatabases;
    }
  }

  // mysql_databases - computed: false, optional: false, required: true
  private _mysqlDatabases = new DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesList(this, "mysql_databases", false);
  public get mysqlDatabases() {
    return this._mysqlDatabases;
  }
  public putMysqlDatabases(value: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases[] | cdktn.IResolvable) {
    this._mysqlDatabases.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlDatabasesInput() {
    return this._mysqlDatabases.internalValue;
  }
}
export interface DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#column DatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The Oracle data type. Full data types list can be found here:
  * https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#data_type DatastreamStream#data_type}
  */
  readonly dataType?: string;
}

export function datastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsToTerraform(struct?: DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
  }
}


export function datastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsToHclTerraform(struct?: DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable): any {
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

export class DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable | undefined) {
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

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
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

export class DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsOutputReference {
    return new DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
  /**
  * oracle_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#oracle_columns DatastreamStream#oracle_columns}
  */
  readonly oracleColumns?: DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesToTerraform(struct?: DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    oracle_columns: cdktn.listMapper(datastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsToTerraform, true)(struct!.oracleColumns),
  }
}


export function datastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesToHclTerraform(struct?: DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables | cdktn.IResolvable): any {
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
    oracle_columns: {
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsToHclTerraform, true)(struct!.oracleColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._oracleColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleColumns = this._oracleColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._oracleColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._oracleColumns.internalValue = value.oracleColumns;
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

  // oracle_columns - computed: false, optional: true, required: false
  private _oracleColumns = new DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsList(this, "oracle_columns", false);
  public get oracleColumns() {
    return this._oracleColumns;
  }
  public putOracleColumns(value: DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns[] | cdktn.IResolvable) {
    this._oracleColumns.internalValue = value;
  }
  public resetOracleColumns() {
    this._oracleColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleColumnsInput() {
    return this._oracleColumns.internalValue;
  }
}

export class DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOutputReference {
    return new DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#schema DatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * oracle_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#oracle_tables DatastreamStream#oracle_tables}
  */
  readonly oracleTables?: DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasToTerraform(struct?: DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    oracle_tables: cdktn.listMapper(datastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesToTerraform, true)(struct!.oracleTables),
  }
}


export function datastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasToHclTerraform(struct?: DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas | cdktn.IResolvable): any {
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
    oracle_tables: {
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesToHclTerraform, true)(struct!.oracleTables),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._oracleTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleTables = this._oracleTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._oracleTables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._oracleTables.internalValue = value.oracleTables;
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

  // oracle_tables - computed: false, optional: true, required: false
  private _oracleTables = new DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesList(this, "oracle_tables", false);
  public get oracleTables() {
    return this._oracleTables;
  }
  public putOracleTables(value: DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables[] | cdktn.IResolvable) {
    this._oracleTables.internalValue = value;
  }
  public resetOracleTables() {
    this._oracleTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleTablesInput() {
    return this._oracleTables.internalValue;
  }
}

export class DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOutputReference {
    return new DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllOracleExcludedObjects {
  /**
  * oracle_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#oracle_schemas DatastreamStream#oracle_schemas}
  */
  readonly oracleSchemas: DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllOracleExcludedObjectsToTerraform(struct?: DatastreamStreamBackfillAllOracleExcludedObjectsOutputReference | DatastreamStreamBackfillAllOracleExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    oracle_schemas: cdktn.listMapper(datastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasToTerraform, true)(struct!.oracleSchemas),
  }
}


export function datastreamStreamBackfillAllOracleExcludedObjectsToHclTerraform(struct?: DatastreamStreamBackfillAllOracleExcludedObjectsOutputReference | DatastreamStreamBackfillAllOracleExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    oracle_schemas: {
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasToHclTerraform, true)(struct!.oracleSchemas),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllOracleExcludedObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamBackfillAllOracleExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oracleSchemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleSchemas = this._oracleSchemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllOracleExcludedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oracleSchemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oracleSchemas.internalValue = value.oracleSchemas;
    }
  }

  // oracle_schemas - computed: false, optional: false, required: true
  private _oracleSchemas = new DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasList(this, "oracle_schemas", false);
  public get oracleSchemas() {
    return this._oracleSchemas;
  }
  public putOracleSchemas(value: DatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas[] | cdktn.IResolvable) {
    this._oracleSchemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleSchemasInput() {
    return this._oracleSchemas.internalValue;
  }
}
export interface DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#column DatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The PostgreSQL data type. Full data types list can be found here:
  * https://www.postgresql.org/docs/current/datatype.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#data_type DatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#nullable DatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktn.IResolvable;
  /**
  * The ordinal position of the column in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#ordinal_position DatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#primary_key DatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToTerraform(struct?: DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
    nullable: cdktn.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktn.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktn.booleanToTerraform(struct!.primaryKey),
  }
}


export function datastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToHclTerraform(struct?: DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable): any {
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
    nullable: {
      value: cdktn.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ordinal_position: {
      value: cdktn.numberToHclTerraform(struct!.ordinalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key: {
      value: cdktn.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable | undefined {
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
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
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
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
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

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktn.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktn.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktn.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktn.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }
}

export class DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference {
    return new DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
  /**
  * postgresql_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#postgresql_columns DatastreamStream#postgresql_columns}
  */
  readonly postgresqlColumns?: DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesToTerraform(struct?: DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    postgresql_columns: cdktn.listMapper(datastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToTerraform, true)(struct!.postgresqlColumns),
  }
}


export function datastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesToHclTerraform(struct?: DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable): any {
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
    postgresql_columns: {
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToHclTerraform, true)(struct!.postgresqlColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._postgresqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlColumns = this._postgresqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._postgresqlColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._postgresqlColumns.internalValue = value.postgresqlColumns;
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

  // postgresql_columns - computed: false, optional: true, required: false
  private _postgresqlColumns = new DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList(this, "postgresql_columns", false);
  public get postgresqlColumns() {
    return this._postgresqlColumns;
  }
  public putPostgresqlColumns(value: DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktn.IResolvable) {
    this._postgresqlColumns.internalValue = value;
  }
  public resetPostgresqlColumns() {
    this._postgresqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlColumnsInput() {
    return this._postgresqlColumns.internalValue;
  }
}

export class DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesOutputReference {
    return new DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#schema DatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * postgresql_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#postgresql_tables DatastreamStream#postgresql_tables}
  */
  readonly postgresqlTables?: DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasToTerraform(struct?: DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    postgresql_tables: cdktn.listMapper(datastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesToTerraform, true)(struct!.postgresqlTables),
  }
}


export function datastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasToHclTerraform(struct?: DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas | cdktn.IResolvable): any {
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
    postgresql_tables: {
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesToHclTerraform, true)(struct!.postgresqlTables),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._postgresqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlTables = this._postgresqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._postgresqlTables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._postgresqlTables.internalValue = value.postgresqlTables;
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

  // postgresql_tables - computed: false, optional: true, required: false
  private _postgresqlTables = new DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesList(this, "postgresql_tables", false);
  public get postgresqlTables() {
    return this._postgresqlTables;
  }
  public putPostgresqlTables(value: DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables[] | cdktn.IResolvable) {
    this._postgresqlTables.internalValue = value;
  }
  public resetPostgresqlTables() {
    this._postgresqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlTablesInput() {
    return this._postgresqlTables.internalValue;
  }
}

export class DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasOutputReference {
    return new DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllPostgresqlExcludedObjects {
  /**
  * postgresql_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#postgresql_schemas DatastreamStream#postgresql_schemas}
  */
  readonly postgresqlSchemas: DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllPostgresqlExcludedObjectsToTerraform(struct?: DatastreamStreamBackfillAllPostgresqlExcludedObjectsOutputReference | DatastreamStreamBackfillAllPostgresqlExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    postgresql_schemas: cdktn.listMapper(datastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasToTerraform, true)(struct!.postgresqlSchemas),
  }
}


export function datastreamStreamBackfillAllPostgresqlExcludedObjectsToHclTerraform(struct?: DatastreamStreamBackfillAllPostgresqlExcludedObjectsOutputReference | DatastreamStreamBackfillAllPostgresqlExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    postgresql_schemas: {
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasToHclTerraform, true)(struct!.postgresqlSchemas),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllPostgresqlExcludedObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamBackfillAllPostgresqlExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postgresqlSchemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlSchemas = this._postgresqlSchemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllPostgresqlExcludedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._postgresqlSchemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._postgresqlSchemas.internalValue = value.postgresqlSchemas;
    }
  }

  // postgresql_schemas - computed: false, optional: false, required: true
  private _postgresqlSchemas = new DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasList(this, "postgresql_schemas", false);
  public get postgresqlSchemas() {
    return this._postgresqlSchemas;
  }
  public putPostgresqlSchemas(value: DatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas[] | cdktn.IResolvable) {
    this._postgresqlSchemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlSchemasInput() {
    return this._postgresqlSchemas.internalValue;
  }
}
export interface DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields {
  /**
  * Field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#name DatastreamStream#name}
  */
  readonly name?: string;
}

export function datastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsToTerraform(struct?: DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function datastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsToHclTerraform(struct?: DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsOutputReference {
    return new DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllSalesforceExcludedObjectsObjects {
  /**
  * Name of object in Salesforce Org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#object_name DatastreamStream#object_name}
  */
  readonly objectName?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#fields DatastreamStream#fields}
  */
  readonly fields?: DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllSalesforceExcludedObjectsObjectsToTerraform(struct?: DatastreamStreamBackfillAllSalesforceExcludedObjectsObjects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object_name: cdktn.stringToTerraform(struct!.objectName),
    fields: cdktn.listMapper(datastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsToTerraform, true)(struct!.fields),
  }
}


export function datastreamStreamBackfillAllSalesforceExcludedObjectsObjectsToHclTerraform(struct?: DatastreamStreamBackfillAllSalesforceExcludedObjectsObjects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object_name: {
      value: cdktn.stringToHclTerraform(struct!.objectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllSalesforceExcludedObjectsObjects | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllSalesforceExcludedObjectsObjects | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectName = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectName = value.objectName;
      this._fields.internalValue = value.fields;
    }
  }

  // object_name - computed: false, optional: true, required: false
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  public resetObjectName() {
    this._objectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllSalesforceExcludedObjectsObjects[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsOutputReference {
    return new DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllSalesforceExcludedObjects {
  /**
  * objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#objects DatastreamStream#objects}
  */
  readonly objects: DatastreamStreamBackfillAllSalesforceExcludedObjectsObjects[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllSalesforceExcludedObjectsToTerraform(struct?: DatastreamStreamBackfillAllSalesforceExcludedObjectsOutputReference | DatastreamStreamBackfillAllSalesforceExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    objects: cdktn.listMapper(datastreamStreamBackfillAllSalesforceExcludedObjectsObjectsToTerraform, true)(struct!.objects),
  }
}


export function datastreamStreamBackfillAllSalesforceExcludedObjectsToHclTerraform(struct?: DatastreamStreamBackfillAllSalesforceExcludedObjectsOutputReference | DatastreamStreamBackfillAllSalesforceExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    objects: {
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllSalesforceExcludedObjectsObjectsToHclTerraform, true)(struct!.objects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllSalesforceExcludedObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamBackfillAllSalesforceExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllSalesforceExcludedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objects.internalValue = value.objects;
    }
  }

  // objects - computed: false, optional: false, required: true
  private _objects = new DatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsList(this, "objects", false);
  public get objects() {
    return this._objects;
  }
  public putObjects(value: DatastreamStreamBackfillAllSalesforceExcludedObjectsObjects[] | cdktn.IResolvable) {
    this._objects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }
}
export interface DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#column DatastreamStream#column}
  */
  readonly column: string;
}

export function datastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsToTerraform(struct?: DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
  }
}


export function datastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsToHclTerraform(struct?: DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumns | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // is_primary_key - computed: true, optional: false, required: false
  public get isPrimaryKey() {
    return this.getBooleanAttribute('is_primary_key');
  }

  // ordinal_position - computed: true, optional: false, required: false
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
}

export class DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumns[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsOutputReference {
    return new DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#columns DatastreamStream#columns}
  */
  readonly columns?: DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumns[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesToTerraform(struct?: DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    columns: cdktn.listMapper(datastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsToTerraform, true)(struct!.columns),
  }
}


export function datastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesToHclTerraform(struct?: DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTables | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTables | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTables | cdktn.IResolvable | undefined) {
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
  private _columns = new DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumns[] | cdktn.IResolvable) {
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

export class DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTables[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesOutputReference {
    return new DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllSpannerExcludedObjectsSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#schema DatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#tables DatastreamStream#tables}
  */
  readonly tables?: DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTables[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllSpannerExcludedObjectsSchemasToTerraform(struct?: DatastreamStreamBackfillAllSpannerExcludedObjectsSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    tables: cdktn.listMapper(datastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesToTerraform, true)(struct!.tables),
  }
}


export function datastreamStreamBackfillAllSpannerExcludedObjectsSchemasToHclTerraform(struct?: DatastreamStreamBackfillAllSpannerExcludedObjectsSchemas | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllSpannerExcludedObjectsSchemas | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatastreamStreamBackfillAllSpannerExcludedObjectsSchemas | cdktn.IResolvable | undefined) {
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
  private _tables = new DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTables[] | cdktn.IResolvable) {
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

export class DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllSpannerExcludedObjectsSchemas[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasOutputReference {
    return new DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllSpannerExcludedObjects {
  /**
  * schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#schemas DatastreamStream#schemas}
  */
  readonly schemas: DatastreamStreamBackfillAllSpannerExcludedObjectsSchemas[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllSpannerExcludedObjectsToTerraform(struct?: DatastreamStreamBackfillAllSpannerExcludedObjectsOutputReference | DatastreamStreamBackfillAllSpannerExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schemas: cdktn.listMapper(datastreamStreamBackfillAllSpannerExcludedObjectsSchemasToTerraform, true)(struct!.schemas),
  }
}


export function datastreamStreamBackfillAllSpannerExcludedObjectsToHclTerraform(struct?: DatastreamStreamBackfillAllSpannerExcludedObjectsOutputReference | DatastreamStreamBackfillAllSpannerExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schemas: {
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllSpannerExcludedObjectsSchemasToHclTerraform, true)(struct!.schemas),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllSpannerExcludedObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamBackfillAllSpannerExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllSpannerExcludedObjects | undefined) {
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
  private _schemas = new DatastreamStreamBackfillAllSpannerExcludedObjectsSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }
  public putSchemas(value: DatastreamStreamBackfillAllSpannerExcludedObjectsSchemas[] | cdktn.IResolvable) {
    this._schemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas.internalValue;
  }
}
export interface DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#column DatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The SQL Server data type. Full data types list can be found here:
  * https://learn.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#data_type DatastreamStream#data_type}
  */
  readonly dataType?: string;
}

export function datastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsToTerraform(struct?: DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
  }
}


export function datastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsToHclTerraform(struct?: DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns | cdktn.IResolvable): any {
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

export class DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns | cdktn.IResolvable | undefined) {
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

export class DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsOutputReference {
    return new DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#columns DatastreamStream#columns}
  */
  readonly columns?: DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesToTerraform(struct?: DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    columns: cdktn.listMapper(datastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsToTerraform, true)(struct!.columns),
  }
}


export function datastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesToHclTerraform(struct?: DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables | cdktn.IResolvable | undefined) {
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
  private _columns = new DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns[] | cdktn.IResolvable) {
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

export class DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesOutputReference {
    return new DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#schema DatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#tables DatastreamStream#tables}
  */
  readonly tables?: DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllSqlServerExcludedObjectsSchemasToTerraform(struct?: DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    tables: cdktn.listMapper(datastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesToTerraform, true)(struct!.tables),
  }
}


export function datastreamStreamBackfillAllSqlServerExcludedObjectsSchemasToHclTerraform(struct?: DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas | cdktn.IResolvable | undefined) {
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
  private _tables = new DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables[] | cdktn.IResolvable) {
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

export class DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasOutputReference {
    return new DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllSqlServerExcludedObjects {
  /**
  * schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#schemas DatastreamStream#schemas}
  */
  readonly schemas: DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas[] | cdktn.IResolvable;
}

export function datastreamStreamBackfillAllSqlServerExcludedObjectsToTerraform(struct?: DatastreamStreamBackfillAllSqlServerExcludedObjectsOutputReference | DatastreamStreamBackfillAllSqlServerExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schemas: cdktn.listMapper(datastreamStreamBackfillAllSqlServerExcludedObjectsSchemasToTerraform, true)(struct!.schemas),
  }
}


export function datastreamStreamBackfillAllSqlServerExcludedObjectsToHclTerraform(struct?: DatastreamStreamBackfillAllSqlServerExcludedObjectsOutputReference | DatastreamStreamBackfillAllSqlServerExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schemas: {
      value: cdktn.listMapperHcl(datastreamStreamBackfillAllSqlServerExcludedObjectsSchemasToHclTerraform, true)(struct!.schemas),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllSqlServerExcludedObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamBackfillAllSqlServerExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllSqlServerExcludedObjects | undefined) {
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
  private _schemas = new DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }
  public putSchemas(value: DatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas[] | cdktn.IResolvable) {
    this._schemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas.internalValue;
  }
}
export interface DatastreamStreamBackfillAll {
  /**
  * mongodb_excluded_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#mongodb_excluded_objects DatastreamStream#mongodb_excluded_objects}
  */
  readonly mongodbExcludedObjects?: DatastreamStreamBackfillAllMongodbExcludedObjects;
  /**
  * mysql_excluded_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#mysql_excluded_objects DatastreamStream#mysql_excluded_objects}
  */
  readonly mysqlExcludedObjects?: DatastreamStreamBackfillAllMysqlExcludedObjects;
  /**
  * oracle_excluded_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#oracle_excluded_objects DatastreamStream#oracle_excluded_objects}
  */
  readonly oracleExcludedObjects?: DatastreamStreamBackfillAllOracleExcludedObjects;
  /**
  * postgresql_excluded_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#postgresql_excluded_objects DatastreamStream#postgresql_excluded_objects}
  */
  readonly postgresqlExcludedObjects?: DatastreamStreamBackfillAllPostgresqlExcludedObjects;
  /**
  * salesforce_excluded_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#salesforce_excluded_objects DatastreamStream#salesforce_excluded_objects}
  */
  readonly salesforceExcludedObjects?: DatastreamStreamBackfillAllSalesforceExcludedObjects;
  /**
  * spanner_excluded_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#spanner_excluded_objects DatastreamStream#spanner_excluded_objects}
  */
  readonly spannerExcludedObjects?: DatastreamStreamBackfillAllSpannerExcludedObjects;
  /**
  * sql_server_excluded_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#sql_server_excluded_objects DatastreamStream#sql_server_excluded_objects}
  */
  readonly sqlServerExcludedObjects?: DatastreamStreamBackfillAllSqlServerExcludedObjects;
}

export function datastreamStreamBackfillAllToTerraform(struct?: DatastreamStreamBackfillAllOutputReference | DatastreamStreamBackfillAll): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mongodb_excluded_objects: datastreamStreamBackfillAllMongodbExcludedObjectsToTerraform(struct!.mongodbExcludedObjects),
    mysql_excluded_objects: datastreamStreamBackfillAllMysqlExcludedObjectsToTerraform(struct!.mysqlExcludedObjects),
    oracle_excluded_objects: datastreamStreamBackfillAllOracleExcludedObjectsToTerraform(struct!.oracleExcludedObjects),
    postgresql_excluded_objects: datastreamStreamBackfillAllPostgresqlExcludedObjectsToTerraform(struct!.postgresqlExcludedObjects),
    salesforce_excluded_objects: datastreamStreamBackfillAllSalesforceExcludedObjectsToTerraform(struct!.salesforceExcludedObjects),
    spanner_excluded_objects: datastreamStreamBackfillAllSpannerExcludedObjectsToTerraform(struct!.spannerExcludedObjects),
    sql_server_excluded_objects: datastreamStreamBackfillAllSqlServerExcludedObjectsToTerraform(struct!.sqlServerExcludedObjects),
  }
}


export function datastreamStreamBackfillAllToHclTerraform(struct?: DatastreamStreamBackfillAllOutputReference | DatastreamStreamBackfillAll): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mongodb_excluded_objects: {
      value: datastreamStreamBackfillAllMongodbExcludedObjectsToHclTerraform(struct!.mongodbExcludedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllMongodbExcludedObjectsList",
    },
    mysql_excluded_objects: {
      value: datastreamStreamBackfillAllMysqlExcludedObjectsToHclTerraform(struct!.mysqlExcludedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllMysqlExcludedObjectsList",
    },
    oracle_excluded_objects: {
      value: datastreamStreamBackfillAllOracleExcludedObjectsToHclTerraform(struct!.oracleExcludedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllOracleExcludedObjectsList",
    },
    postgresql_excluded_objects: {
      value: datastreamStreamBackfillAllPostgresqlExcludedObjectsToHclTerraform(struct!.postgresqlExcludedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllPostgresqlExcludedObjectsList",
    },
    salesforce_excluded_objects: {
      value: datastreamStreamBackfillAllSalesforceExcludedObjectsToHclTerraform(struct!.salesforceExcludedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllSalesforceExcludedObjectsList",
    },
    spanner_excluded_objects: {
      value: datastreamStreamBackfillAllSpannerExcludedObjectsToHclTerraform(struct!.spannerExcludedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllSpannerExcludedObjectsList",
    },
    sql_server_excluded_objects: {
      value: datastreamStreamBackfillAllSqlServerExcludedObjectsToHclTerraform(struct!.sqlServerExcludedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamBackfillAllSqlServerExcludedObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamBackfillAllOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamBackfillAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mongodbExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongodbExcludedObjects = this._mongodbExcludedObjects?.internalValue;
    }
    if (this._mysqlExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlExcludedObjects = this._mysqlExcludedObjects?.internalValue;
    }
    if (this._oracleExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleExcludedObjects = this._oracleExcludedObjects?.internalValue;
    }
    if (this._postgresqlExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlExcludedObjects = this._postgresqlExcludedObjects?.internalValue;
    }
    if (this._salesforceExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceExcludedObjects = this._salesforceExcludedObjects?.internalValue;
    }
    if (this._spannerExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spannerExcludedObjects = this._spannerExcludedObjects?.internalValue;
    }
    if (this._sqlServerExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServerExcludedObjects = this._sqlServerExcludedObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mongodbExcludedObjects.internalValue = undefined;
      this._mysqlExcludedObjects.internalValue = undefined;
      this._oracleExcludedObjects.internalValue = undefined;
      this._postgresqlExcludedObjects.internalValue = undefined;
      this._salesforceExcludedObjects.internalValue = undefined;
      this._spannerExcludedObjects.internalValue = undefined;
      this._sqlServerExcludedObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mongodbExcludedObjects.internalValue = value.mongodbExcludedObjects;
      this._mysqlExcludedObjects.internalValue = value.mysqlExcludedObjects;
      this._oracleExcludedObjects.internalValue = value.oracleExcludedObjects;
      this._postgresqlExcludedObjects.internalValue = value.postgresqlExcludedObjects;
      this._salesforceExcludedObjects.internalValue = value.salesforceExcludedObjects;
      this._spannerExcludedObjects.internalValue = value.spannerExcludedObjects;
      this._sqlServerExcludedObjects.internalValue = value.sqlServerExcludedObjects;
    }
  }

  // mongodb_excluded_objects - computed: false, optional: true, required: false
  private _mongodbExcludedObjects = new DatastreamStreamBackfillAllMongodbExcludedObjectsOutputReference(this, "mongodb_excluded_objects");
  public get mongodbExcludedObjects() {
    return this._mongodbExcludedObjects;
  }
  public putMongodbExcludedObjects(value: DatastreamStreamBackfillAllMongodbExcludedObjects) {
    this._mongodbExcludedObjects.internalValue = value;
  }
  public resetMongodbExcludedObjects() {
    this._mongodbExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbExcludedObjectsInput() {
    return this._mongodbExcludedObjects.internalValue;
  }

  // mysql_excluded_objects - computed: false, optional: true, required: false
  private _mysqlExcludedObjects = new DatastreamStreamBackfillAllMysqlExcludedObjectsOutputReference(this, "mysql_excluded_objects");
  public get mysqlExcludedObjects() {
    return this._mysqlExcludedObjects;
  }
  public putMysqlExcludedObjects(value: DatastreamStreamBackfillAllMysqlExcludedObjects) {
    this._mysqlExcludedObjects.internalValue = value;
  }
  public resetMysqlExcludedObjects() {
    this._mysqlExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlExcludedObjectsInput() {
    return this._mysqlExcludedObjects.internalValue;
  }

  // oracle_excluded_objects - computed: false, optional: true, required: false
  private _oracleExcludedObjects = new DatastreamStreamBackfillAllOracleExcludedObjectsOutputReference(this, "oracle_excluded_objects");
  public get oracleExcludedObjects() {
    return this._oracleExcludedObjects;
  }
  public putOracleExcludedObjects(value: DatastreamStreamBackfillAllOracleExcludedObjects) {
    this._oracleExcludedObjects.internalValue = value;
  }
  public resetOracleExcludedObjects() {
    this._oracleExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleExcludedObjectsInput() {
    return this._oracleExcludedObjects.internalValue;
  }

  // postgresql_excluded_objects - computed: false, optional: true, required: false
  private _postgresqlExcludedObjects = new DatastreamStreamBackfillAllPostgresqlExcludedObjectsOutputReference(this, "postgresql_excluded_objects");
  public get postgresqlExcludedObjects() {
    return this._postgresqlExcludedObjects;
  }
  public putPostgresqlExcludedObjects(value: DatastreamStreamBackfillAllPostgresqlExcludedObjects) {
    this._postgresqlExcludedObjects.internalValue = value;
  }
  public resetPostgresqlExcludedObjects() {
    this._postgresqlExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlExcludedObjectsInput() {
    return this._postgresqlExcludedObjects.internalValue;
  }

  // salesforce_excluded_objects - computed: false, optional: true, required: false
  private _salesforceExcludedObjects = new DatastreamStreamBackfillAllSalesforceExcludedObjectsOutputReference(this, "salesforce_excluded_objects");
  public get salesforceExcludedObjects() {
    return this._salesforceExcludedObjects;
  }
  public putSalesforceExcludedObjects(value: DatastreamStreamBackfillAllSalesforceExcludedObjects) {
    this._salesforceExcludedObjects.internalValue = value;
  }
  public resetSalesforceExcludedObjects() {
    this._salesforceExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceExcludedObjectsInput() {
    return this._salesforceExcludedObjects.internalValue;
  }

  // spanner_excluded_objects - computed: false, optional: true, required: false
  private _spannerExcludedObjects = new DatastreamStreamBackfillAllSpannerExcludedObjectsOutputReference(this, "spanner_excluded_objects");
  public get spannerExcludedObjects() {
    return this._spannerExcludedObjects;
  }
  public putSpannerExcludedObjects(value: DatastreamStreamBackfillAllSpannerExcludedObjects) {
    this._spannerExcludedObjects.internalValue = value;
  }
  public resetSpannerExcludedObjects() {
    this._spannerExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spannerExcludedObjectsInput() {
    return this._spannerExcludedObjects.internalValue;
  }

  // sql_server_excluded_objects - computed: false, optional: true, required: false
  private _sqlServerExcludedObjects = new DatastreamStreamBackfillAllSqlServerExcludedObjectsOutputReference(this, "sql_server_excluded_objects");
  public get sqlServerExcludedObjects() {
    return this._sqlServerExcludedObjects;
  }
  public putSqlServerExcludedObjects(value: DatastreamStreamBackfillAllSqlServerExcludedObjects) {
    this._sqlServerExcludedObjects.internalValue = value;
  }
  public resetSqlServerExcludedObjects() {
    this._sqlServerExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerExcludedObjectsInput() {
    return this._sqlServerExcludedObjects.internalValue;
  }
}
export interface DatastreamStreamBackfillNone {
}

export function datastreamStreamBackfillNoneToTerraform(struct?: DatastreamStreamBackfillNoneOutputReference | DatastreamStreamBackfillNone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function datastreamStreamBackfillNoneToHclTerraform(struct?: DatastreamStreamBackfillNoneOutputReference | DatastreamStreamBackfillNone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatastreamStreamBackfillNoneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamBackfillNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly {
}

export function datastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyToTerraform(struct?: DatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyOutputReference | DatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function datastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyToHclTerraform(struct?: DatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyOutputReference | DatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig {
  /**
  * The Cloud Storage bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#bucket DatastreamStream#bucket}
  */
  readonly bucket: string;
  /**
  * The bigquery connection. Format: '{project}.{location}.{name}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#connection_name DatastreamStream#connection_name}
  */
  readonly connectionName: string;
  /**
  * The file format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#file_format DatastreamStream#file_format}
  */
  readonly fileFormat: string;
  /**
  * The root path inside the Cloud Storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#root_path DatastreamStream#root_path}
  */
  readonly rootPath?: string;
  /**
  * The table format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#table_format DatastreamStream#table_format}
  */
  readonly tableFormat: string;
}

export function datastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigToTerraform(struct?: DatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigOutputReference | DatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    connection_name: cdktn.stringToTerraform(struct!.connectionName),
    file_format: cdktn.stringToTerraform(struct!.fileFormat),
    root_path: cdktn.stringToTerraform(struct!.rootPath),
    table_format: cdktn.stringToTerraform(struct!.tableFormat),
  }
}


export function datastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigToHclTerraform(struct?: DatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigOutputReference | DatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_name: {
      value: cdktn.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_format: {
      value: cdktn.stringToHclTerraform(struct!.fileFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_path: {
      value: cdktn.stringToHclTerraform(struct!.rootPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_format: {
      value: cdktn.stringToHclTerraform(struct!.tableFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._fileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileFormat = this._fileFormat;
    }
    if (this._rootPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPath = this._rootPath;
    }
    if (this._tableFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFormat = this._tableFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._connectionName = undefined;
      this._fileFormat = undefined;
      this._rootPath = undefined;
      this._tableFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._connectionName = value.connectionName;
      this._fileFormat = value.fileFormat;
      this._rootPath = value.rootPath;
      this._tableFormat = value.tableFormat;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // file_format - computed: false, optional: false, required: true
  private _fileFormat?: string; 
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }
  public set fileFormat(value: string) {
    this._fileFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat;
  }

  // root_path - computed: false, optional: true, required: false
  private _rootPath?: string; 
  public get rootPath() {
    return this.getStringAttribute('root_path');
  }
  public set rootPath(value: string) {
    this._rootPath = value;
  }
  public resetRootPath() {
    this._rootPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPathInput() {
    return this._rootPath;
  }

  // table_format - computed: false, optional: false, required: true
  private _tableFormat?: string; 
  public get tableFormat() {
    return this.getStringAttribute('table_format');
  }
  public set tableFormat(value: string) {
    this._tableFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFormatInput() {
    return this._tableFormat;
  }
}
export interface DatastreamStreamDestinationConfigBigqueryDestinationConfigMerge {
}

export function datastreamStreamDestinationConfigBigqueryDestinationConfigMergeToTerraform(struct?: DatastreamStreamDestinationConfigBigqueryDestinationConfigMergeOutputReference | DatastreamStreamDestinationConfigBigqueryDestinationConfigMerge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function datastreamStreamDestinationConfigBigqueryDestinationConfigMergeToHclTerraform(struct?: DatastreamStreamDestinationConfigBigqueryDestinationConfigMergeOutputReference | DatastreamStreamDestinationConfigBigqueryDestinationConfigMerge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatastreamStreamDestinationConfigBigqueryDestinationConfigMergeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamDestinationConfigBigqueryDestinationConfigMerge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamDestinationConfigBigqueryDestinationConfigMerge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset {
  /**
  * Dataset ID in the format projects/{project}/datasets/{dataset_id} or
  * {project}:{dataset_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#dataset_id DatastreamStream#dataset_id}
  */
  readonly datasetId: string;
}

export function datastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetToTerraform(struct?: DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetOutputReference | DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_id: cdktn.stringToTerraform(struct!.datasetId),
  }
}


export function datastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetToHclTerraform(struct?: DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetOutputReference | DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_id: {
      value: cdktn.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }
}
export interface DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate {
  /**
  * If supplied, every created dataset will have its name prefixed by the provided value.
  * The prefix and name will be separated by an underscore. i.e. _.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#dataset_id_prefix DatastreamStream#dataset_id_prefix}
  */
  readonly datasetIdPrefix?: string;
  /**
  * Describes the Cloud KMS encryption key that will be used to protect destination BigQuery
  * table. The BigQuery Service Account associated with your project requires access to this
  * encryption key. i.e. projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}.
  * See https://cloud.google.com/bigquery/docs/customer-managed-encryption for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#kms_key_name DatastreamStream#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * The geographic location where the dataset should reside.
  * See https://cloud.google.com/bigquery/docs/locations for supported locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#location DatastreamStream#location}
  */
  readonly location: string;
}

export function datastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateToTerraform(struct?: DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateOutputReference | DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_id_prefix: cdktn.stringToTerraform(struct!.datasetIdPrefix),
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
    location: cdktn.stringToTerraform(struct!.location),
  }
}


export function datastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateToHclTerraform(struct?: DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateOutputReference | DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_id_prefix: {
      value: cdktn.stringToHclTerraform(struct!.datasetIdPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetIdPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetIdPrefix = this._datasetIdPrefix;
    }
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetIdPrefix = undefined;
      this._kmsKeyName = undefined;
      this._location = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetIdPrefix = value.datasetIdPrefix;
      this._kmsKeyName = value.kmsKeyName;
      this._location = value.location;
    }
  }

  // dataset_id_prefix - computed: false, optional: true, required: false
  private _datasetIdPrefix?: string; 
  public get datasetIdPrefix() {
    return this.getStringAttribute('dataset_id_prefix');
  }
  public set datasetIdPrefix(value: string) {
    this._datasetIdPrefix = value;
  }
  public resetDatasetIdPrefix() {
    this._datasetIdPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdPrefixInput() {
    return this._datasetIdPrefix;
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}
export interface DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets {
  /**
  * Optional. The project id of the BigQuery dataset. If not specified, the project will be inferred from the stream resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#project_id DatastreamStream#project_id}
  */
  readonly projectId?: string;
  /**
  * dataset_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#dataset_template DatastreamStream#dataset_template}
  */
  readonly datasetTemplate: DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate;
}

export function datastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsToTerraform(struct?: DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsOutputReference | DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    project_id: cdktn.stringToTerraform(struct!.projectId),
    dataset_template: datastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateToTerraform(struct!.datasetTemplate),
  }
}


export function datastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsToHclTerraform(struct?: DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsOutputReference | DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_template: {
      value: datastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateToHclTerraform(struct!.datasetTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._datasetTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetTemplate = this._datasetTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
      this._datasetTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
      this._datasetTemplate.internalValue = value.datasetTemplate;
    }
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // dataset_template - computed: false, optional: false, required: true
  private _datasetTemplate = new DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateOutputReference(this, "dataset_template");
  public get datasetTemplate() {
    return this._datasetTemplate;
  }
  public putDatasetTemplate(value: DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate) {
    this._datasetTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetTemplateInput() {
    return this._datasetTemplate.internalValue;
  }
}
export interface DatastreamStreamDestinationConfigBigqueryDestinationConfig {
  /**
  * The guaranteed data freshness (in seconds) when querying tables created by the stream.
  * Editing this field will only affect new tables created in the future, but existing tables
  * will not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#data_freshness DatastreamStream#data_freshness}
  */
  readonly dataFreshness?: string;
  /**
  * append_only block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#append_only DatastreamStream#append_only}
  */
  readonly appendOnly?: DatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly;
  /**
  * blmt_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#blmt_config DatastreamStream#blmt_config}
  */
  readonly blmtConfig?: DatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig;
  /**
  * merge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#merge DatastreamStream#merge}
  */
  readonly merge?: DatastreamStreamDestinationConfigBigqueryDestinationConfigMerge;
  /**
  * single_target_dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#single_target_dataset DatastreamStream#single_target_dataset}
  */
  readonly singleTargetDataset?: DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset;
  /**
  * source_hierarchy_datasets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#source_hierarchy_datasets DatastreamStream#source_hierarchy_datasets}
  */
  readonly sourceHierarchyDatasets?: DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets;
}

export function datastreamStreamDestinationConfigBigqueryDestinationConfigToTerraform(struct?: DatastreamStreamDestinationConfigBigqueryDestinationConfigOutputReference | DatastreamStreamDestinationConfigBigqueryDestinationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_freshness: cdktn.stringToTerraform(struct!.dataFreshness),
    append_only: datastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyToTerraform(struct!.appendOnly),
    blmt_config: datastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigToTerraform(struct!.blmtConfig),
    merge: datastreamStreamDestinationConfigBigqueryDestinationConfigMergeToTerraform(struct!.merge),
    single_target_dataset: datastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetToTerraform(struct!.singleTargetDataset),
    source_hierarchy_datasets: datastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsToTerraform(struct!.sourceHierarchyDatasets),
  }
}


export function datastreamStreamDestinationConfigBigqueryDestinationConfigToHclTerraform(struct?: DatastreamStreamDestinationConfigBigqueryDestinationConfigOutputReference | DatastreamStreamDestinationConfigBigqueryDestinationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_freshness: {
      value: cdktn.stringToHclTerraform(struct!.dataFreshness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    append_only: {
      value: datastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyToHclTerraform(struct!.appendOnly),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyList",
    },
    blmt_config: {
      value: datastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigToHclTerraform(struct!.blmtConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigList",
    },
    merge: {
      value: datastreamStreamDestinationConfigBigqueryDestinationConfigMergeToHclTerraform(struct!.merge),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamDestinationConfigBigqueryDestinationConfigMergeList",
    },
    single_target_dataset: {
      value: datastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetToHclTerraform(struct!.singleTargetDataset),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetList",
    },
    source_hierarchy_datasets: {
      value: datastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsToHclTerraform(struct!.sourceHierarchyDatasets),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamDestinationConfigBigqueryDestinationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamDestinationConfigBigqueryDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataFreshness !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFreshness = this._dataFreshness;
    }
    if (this._appendOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendOnly = this._appendOnly?.internalValue;
    }
    if (this._blmtConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blmtConfig = this._blmtConfig?.internalValue;
    }
    if (this._merge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.merge = this._merge?.internalValue;
    }
    if (this._singleTargetDataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleTargetDataset = this._singleTargetDataset?.internalValue;
    }
    if (this._sourceHierarchyDatasets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceHierarchyDatasets = this._sourceHierarchyDatasets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamDestinationConfigBigqueryDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataFreshness = undefined;
      this._appendOnly.internalValue = undefined;
      this._blmtConfig.internalValue = undefined;
      this._merge.internalValue = undefined;
      this._singleTargetDataset.internalValue = undefined;
      this._sourceHierarchyDatasets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataFreshness = value.dataFreshness;
      this._appendOnly.internalValue = value.appendOnly;
      this._blmtConfig.internalValue = value.blmtConfig;
      this._merge.internalValue = value.merge;
      this._singleTargetDataset.internalValue = value.singleTargetDataset;
      this._sourceHierarchyDatasets.internalValue = value.sourceHierarchyDatasets;
    }
  }

  // data_freshness - computed: false, optional: true, required: false
  private _dataFreshness?: string; 
  public get dataFreshness() {
    return this.getStringAttribute('data_freshness');
  }
  public set dataFreshness(value: string) {
    this._dataFreshness = value;
  }
  public resetDataFreshness() {
    this._dataFreshness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFreshnessInput() {
    return this._dataFreshness;
  }

  // append_only - computed: false, optional: true, required: false
  private _appendOnly = new DatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyOutputReference(this, "append_only");
  public get appendOnly() {
    return this._appendOnly;
  }
  public putAppendOnly(value: DatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly) {
    this._appendOnly.internalValue = value;
  }
  public resetAppendOnly() {
    this._appendOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendOnlyInput() {
    return this._appendOnly.internalValue;
  }

  // blmt_config - computed: false, optional: true, required: false
  private _blmtConfig = new DatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigOutputReference(this, "blmt_config");
  public get blmtConfig() {
    return this._blmtConfig;
  }
  public putBlmtConfig(value: DatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig) {
    this._blmtConfig.internalValue = value;
  }
  public resetBlmtConfig() {
    this._blmtConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blmtConfigInput() {
    return this._blmtConfig.internalValue;
  }

  // merge - computed: false, optional: true, required: false
  private _merge = new DatastreamStreamDestinationConfigBigqueryDestinationConfigMergeOutputReference(this, "merge");
  public get merge() {
    return this._merge;
  }
  public putMerge(value: DatastreamStreamDestinationConfigBigqueryDestinationConfigMerge) {
    this._merge.internalValue = value;
  }
  public resetMerge() {
    this._merge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeInput() {
    return this._merge.internalValue;
  }

  // single_target_dataset - computed: false, optional: true, required: false
  private _singleTargetDataset = new DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetOutputReference(this, "single_target_dataset");
  public get singleTargetDataset() {
    return this._singleTargetDataset;
  }
  public putSingleTargetDataset(value: DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset) {
    this._singleTargetDataset.internalValue = value;
  }
  public resetSingleTargetDataset() {
    this._singleTargetDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleTargetDatasetInput() {
    return this._singleTargetDataset.internalValue;
  }

  // source_hierarchy_datasets - computed: false, optional: true, required: false
  private _sourceHierarchyDatasets = new DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsOutputReference(this, "source_hierarchy_datasets");
  public get sourceHierarchyDatasets() {
    return this._sourceHierarchyDatasets;
  }
  public putSourceHierarchyDatasets(value: DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets) {
    this._sourceHierarchyDatasets.internalValue = value;
  }
  public resetSourceHierarchyDatasets() {
    this._sourceHierarchyDatasets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHierarchyDatasetsInput() {
    return this._sourceHierarchyDatasets.internalValue;
  }
}
export interface DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat {
}

export function datastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatToTerraform(struct?: DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatOutputReference | DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function datastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatToHclTerraform(struct?: DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatOutputReference | DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat {
  /**
  * Compression of the loaded JSON file. Possible values: ["NO_COMPRESSION", "GZIP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#compression DatastreamStream#compression}
  */
  readonly compression?: string;
  /**
  * The schema file format along JSON data files. Possible values: ["NO_SCHEMA_FILE", "AVRO_SCHEMA_FILE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#schema_file_format DatastreamStream#schema_file_format}
  */
  readonly schemaFileFormat?: string;
}

export function datastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatToTerraform(struct?: DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatOutputReference | DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression: cdktn.stringToTerraform(struct!.compression),
    schema_file_format: cdktn.stringToTerraform(struct!.schemaFileFormat),
  }
}


export function datastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatToHclTerraform(struct?: DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatOutputReference | DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_file_format: {
      value: cdktn.stringToHclTerraform(struct!.schemaFileFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._schemaFileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaFileFormat = this._schemaFileFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compression = undefined;
      this._schemaFileFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compression = value.compression;
      this._schemaFileFormat = value.schemaFileFormat;
    }
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // schema_file_format - computed: false, optional: true, required: false
  private _schemaFileFormat?: string; 
  public get schemaFileFormat() {
    return this.getStringAttribute('schema_file_format');
  }
  public set schemaFileFormat(value: string) {
    this._schemaFileFormat = value;
  }
  public resetSchemaFileFormat() {
    this._schemaFileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaFileFormatInput() {
    return this._schemaFileFormat;
  }
}
export interface DatastreamStreamDestinationConfigGcsDestinationConfig {
  /**
  * The maximum duration for which new events are added before a file is closed and a new file is created.
  * Values within the range of 15-60 seconds are allowed.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#file_rotation_interval DatastreamStream#file_rotation_interval}
  */
  readonly fileRotationInterval?: string;
  /**
  * The maximum file size to be saved in the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#file_rotation_mb DatastreamStream#file_rotation_mb}
  */
  readonly fileRotationMb?: number;
  /**
  * Path inside the Cloud Storage bucket to write data to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#path DatastreamStream#path}
  */
  readonly path?: string;
  /**
  * avro_file_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#avro_file_format DatastreamStream#avro_file_format}
  */
  readonly avroFileFormat?: DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat;
  /**
  * json_file_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#json_file_format DatastreamStream#json_file_format}
  */
  readonly jsonFileFormat?: DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat;
}

export function datastreamStreamDestinationConfigGcsDestinationConfigToTerraform(struct?: DatastreamStreamDestinationConfigGcsDestinationConfigOutputReference | DatastreamStreamDestinationConfigGcsDestinationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_rotation_interval: cdktn.stringToTerraform(struct!.fileRotationInterval),
    file_rotation_mb: cdktn.numberToTerraform(struct!.fileRotationMb),
    path: cdktn.stringToTerraform(struct!.path),
    avro_file_format: datastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatToTerraform(struct!.avroFileFormat),
    json_file_format: datastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatToTerraform(struct!.jsonFileFormat),
  }
}


export function datastreamStreamDestinationConfigGcsDestinationConfigToHclTerraform(struct?: DatastreamStreamDestinationConfigGcsDestinationConfigOutputReference | DatastreamStreamDestinationConfigGcsDestinationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_rotation_interval: {
      value: cdktn.stringToHclTerraform(struct!.fileRotationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_rotation_mb: {
      value: cdktn.numberToHclTerraform(struct!.fileRotationMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    avro_file_format: {
      value: datastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatToHclTerraform(struct!.avroFileFormat),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatList",
    },
    json_file_format: {
      value: datastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatToHclTerraform(struct!.jsonFileFormat),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamDestinationConfigGcsDestinationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamDestinationConfigGcsDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileRotationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileRotationInterval = this._fileRotationInterval;
    }
    if (this._fileRotationMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileRotationMb = this._fileRotationMb;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._avroFileFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroFileFormat = this._avroFileFormat?.internalValue;
    }
    if (this._jsonFileFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonFileFormat = this._jsonFileFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamDestinationConfigGcsDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileRotationInterval = undefined;
      this._fileRotationMb = undefined;
      this._path = undefined;
      this._avroFileFormat.internalValue = undefined;
      this._jsonFileFormat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileRotationInterval = value.fileRotationInterval;
      this._fileRotationMb = value.fileRotationMb;
      this._path = value.path;
      this._avroFileFormat.internalValue = value.avroFileFormat;
      this._jsonFileFormat.internalValue = value.jsonFileFormat;
    }
  }

  // file_rotation_interval - computed: true, optional: true, required: false
  private _fileRotationInterval?: string; 
  public get fileRotationInterval() {
    return this.getStringAttribute('file_rotation_interval');
  }
  public set fileRotationInterval(value: string) {
    this._fileRotationInterval = value;
  }
  public resetFileRotationInterval() {
    this._fileRotationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileRotationIntervalInput() {
    return this._fileRotationInterval;
  }

  // file_rotation_mb - computed: true, optional: true, required: false
  private _fileRotationMb?: number; 
  public get fileRotationMb() {
    return this.getNumberAttribute('file_rotation_mb');
  }
  public set fileRotationMb(value: number) {
    this._fileRotationMb = value;
  }
  public resetFileRotationMb() {
    this._fileRotationMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileRotationMbInput() {
    return this._fileRotationMb;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // avro_file_format - computed: false, optional: true, required: false
  private _avroFileFormat = new DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatOutputReference(this, "avro_file_format");
  public get avroFileFormat() {
    return this._avroFileFormat;
  }
  public putAvroFileFormat(value: DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat) {
    this._avroFileFormat.internalValue = value;
  }
  public resetAvroFileFormat() {
    this._avroFileFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroFileFormatInput() {
    return this._avroFileFormat.internalValue;
  }

  // json_file_format - computed: false, optional: true, required: false
  private _jsonFileFormat = new DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatOutputReference(this, "json_file_format");
  public get jsonFileFormat() {
    return this._jsonFileFormat;
  }
  public putJsonFileFormat(value: DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat) {
    this._jsonFileFormat.internalValue = value;
  }
  public resetJsonFileFormat() {
    this._jsonFileFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonFileFormatInput() {
    return this._jsonFileFormat.internalValue;
  }
}
export interface DatastreamStreamDestinationConfig {
  /**
  * Destination connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#destination_connection_profile DatastreamStream#destination_connection_profile}
  */
  readonly destinationConnectionProfile: string;
  /**
  * bigquery_destination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#bigquery_destination_config DatastreamStream#bigquery_destination_config}
  */
  readonly bigqueryDestinationConfig?: DatastreamStreamDestinationConfigBigqueryDestinationConfig;
  /**
  * gcs_destination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#gcs_destination_config DatastreamStream#gcs_destination_config}
  */
  readonly gcsDestinationConfig?: DatastreamStreamDestinationConfigGcsDestinationConfig;
}

export function datastreamStreamDestinationConfigToTerraform(struct?: DatastreamStreamDestinationConfigOutputReference | DatastreamStreamDestinationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_connection_profile: cdktn.stringToTerraform(struct!.destinationConnectionProfile),
    bigquery_destination_config: datastreamStreamDestinationConfigBigqueryDestinationConfigToTerraform(struct!.bigqueryDestinationConfig),
    gcs_destination_config: datastreamStreamDestinationConfigGcsDestinationConfigToTerraform(struct!.gcsDestinationConfig),
  }
}


export function datastreamStreamDestinationConfigToHclTerraform(struct?: DatastreamStreamDestinationConfigOutputReference | DatastreamStreamDestinationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_connection_profile: {
      value: cdktn.stringToHclTerraform(struct!.destinationConnectionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bigquery_destination_config: {
      value: datastreamStreamDestinationConfigBigqueryDestinationConfigToHclTerraform(struct!.bigqueryDestinationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamDestinationConfigBigqueryDestinationConfigList",
    },
    gcs_destination_config: {
      value: datastreamStreamDestinationConfigGcsDestinationConfigToHclTerraform(struct!.gcsDestinationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamDestinationConfigGcsDestinationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamDestinationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationConnectionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationConnectionProfile = this._destinationConnectionProfile;
    }
    if (this._bigqueryDestinationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDestinationConfig = this._bigqueryDestinationConfig?.internalValue;
    }
    if (this._gcsDestinationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsDestinationConfig = this._gcsDestinationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationConnectionProfile = undefined;
      this._bigqueryDestinationConfig.internalValue = undefined;
      this._gcsDestinationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationConnectionProfile = value.destinationConnectionProfile;
      this._bigqueryDestinationConfig.internalValue = value.bigqueryDestinationConfig;
      this._gcsDestinationConfig.internalValue = value.gcsDestinationConfig;
    }
  }

  // destination_connection_profile - computed: false, optional: false, required: true
  private _destinationConnectionProfile?: string; 
  public get destinationConnectionProfile() {
    return this.getStringAttribute('destination_connection_profile');
  }
  public set destinationConnectionProfile(value: string) {
    this._destinationConnectionProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConnectionProfileInput() {
    return this._destinationConnectionProfile;
  }

  // bigquery_destination_config - computed: false, optional: true, required: false
  private _bigqueryDestinationConfig = new DatastreamStreamDestinationConfigBigqueryDestinationConfigOutputReference(this, "bigquery_destination_config");
  public get bigqueryDestinationConfig() {
    return this._bigqueryDestinationConfig;
  }
  public putBigqueryDestinationConfig(value: DatastreamStreamDestinationConfigBigqueryDestinationConfig) {
    this._bigqueryDestinationConfig.internalValue = value;
  }
  public resetBigqueryDestinationConfig() {
    this._bigqueryDestinationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDestinationConfigInput() {
    return this._bigqueryDestinationConfig.internalValue;
  }

  // gcs_destination_config - computed: false, optional: true, required: false
  private _gcsDestinationConfig = new DatastreamStreamDestinationConfigGcsDestinationConfigOutputReference(this, "gcs_destination_config");
  public get gcsDestinationConfig() {
    return this._gcsDestinationConfig;
  }
  public putGcsDestinationConfig(value: DatastreamStreamDestinationConfigGcsDestinationConfig) {
    this._gcsDestinationConfig.internalValue = value;
  }
  public resetGcsDestinationConfig() {
    this._gcsDestinationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsDestinationConfigInput() {
    return this._gcsDestinationConfig.internalValue;
  }
}
export interface DatastreamStreamRuleSetsCustomizationRulesBigqueryClustering {
  /**
  * Column names to set as clustering columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#columns DatastreamStream#columns}
  */
  readonly columns: string[];
}

export function datastreamStreamRuleSetsCustomizationRulesBigqueryClusteringToTerraform(struct?: DatastreamStreamRuleSetsCustomizationRulesBigqueryClusteringOutputReference | DatastreamStreamRuleSetsCustomizationRulesBigqueryClustering): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columns),
  }
}


export function datastreamStreamRuleSetsCustomizationRulesBigqueryClusteringToHclTerraform(struct?: DatastreamStreamRuleSetsCustomizationRulesBigqueryClusteringOutputReference | DatastreamStreamRuleSetsCustomizationRulesBigqueryClustering): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamRuleSetsCustomizationRulesBigqueryClusteringOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamRuleSetsCustomizationRulesBigqueryClustering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamRuleSetsCustomizationRulesBigqueryClustering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columns = value.columns;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }
}
export interface DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartition {
  /**
  * Partition granularity. Possible values: ["PARTITIONING_TIME_GRANULARITY_UNSPECIFIED", "PARTITIONING_TIME_GRANULARITY_HOUR", "PARTITIONING_TIME_GRANULARITY_DAY", "PARTITIONING_TIME_GRANULARITY_MONTH", "PARTITIONING_TIME_GRANULARITY_YEAR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#partitioning_time_granularity DatastreamStream#partitioning_time_granularity}
  */
  readonly partitioningTimeGranularity?: string;
}

export function datastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartitionToTerraform(struct?: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartitionOutputReference | DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    partitioning_time_granularity: cdktn.stringToTerraform(struct!.partitioningTimeGranularity),
  }
}


export function datastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartitionToHclTerraform(struct?: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartitionOutputReference | DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    partitioning_time_granularity: {
      value: cdktn.stringToHclTerraform(struct!.partitioningTimeGranularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitioningTimeGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitioningTimeGranularity = this._partitioningTimeGranularity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partitioningTimeGranularity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partitioningTimeGranularity = value.partitioningTimeGranularity;
    }
  }

  // partitioning_time_granularity - computed: false, optional: true, required: false
  private _partitioningTimeGranularity?: string; 
  public get partitioningTimeGranularity() {
    return this.getStringAttribute('partitioning_time_granularity');
  }
  public set partitioningTimeGranularity(value: string) {
    this._partitioningTimeGranularity = value;
  }
  public resetPartitioningTimeGranularity() {
    this._partitioningTimeGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitioningTimeGranularityInput() {
    return this._partitioningTimeGranularity;
  }
}
export interface DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartition {
  /**
  * The partitioning column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#column DatastreamStream#column}
  */
  readonly column: string;
  /**
  * The ending value for range partitioning (exclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#end DatastreamStream#end}
  */
  readonly end: number;
  /**
  * The interval of each range within the partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#interval DatastreamStream#interval}
  */
  readonly interval: number;
  /**
  * The starting value for range partitioning (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#start DatastreamStream#start}
  */
  readonly start: number;
}

export function datastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartitionToTerraform(struct?: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartitionOutputReference | DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    end: cdktn.numberToTerraform(struct!.end),
    interval: cdktn.numberToTerraform(struct!.interval),
    start: cdktn.numberToTerraform(struct!.start),
  }
}


export function datastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartitionToHclTerraform(struct?: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartitionOutputReference | DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartition): any {
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
    end: {
      value: cdktn.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktn.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._column = undefined;
      this._end = undefined;
      this._interval = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._column = value.column;
      this._end = value.end;
      this._interval = value.interval;
      this._start = value.start;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartition {
  /**
  * The partitioning column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#column DatastreamStream#column}
  */
  readonly column: string;
  /**
  * Partition granularity. Possible values: ["PARTITIONING_TIME_GRANULARITY_UNSPECIFIED", "PARTITIONING_TIME_GRANULARITY_HOUR", "PARTITIONING_TIME_GRANULARITY_DAY", "PARTITIONING_TIME_GRANULARITY_MONTH", "PARTITIONING_TIME_GRANULARITY_YEAR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#partitioning_time_granularity DatastreamStream#partitioning_time_granularity}
  */
  readonly partitioningTimeGranularity?: string;
}

export function datastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartitionToTerraform(struct?: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartitionOutputReference | DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    partitioning_time_granularity: cdktn.stringToTerraform(struct!.partitioningTimeGranularity),
  }
}


export function datastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartitionToHclTerraform(struct?: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartitionOutputReference | DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartition): any {
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
    partitioning_time_granularity: {
      value: cdktn.stringToHclTerraform(struct!.partitioningTimeGranularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._partitioningTimeGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitioningTimeGranularity = this._partitioningTimeGranularity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._column = undefined;
      this._partitioningTimeGranularity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._column = value.column;
      this._partitioningTimeGranularity = value.partitioningTimeGranularity;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // partitioning_time_granularity - computed: false, optional: true, required: false
  private _partitioningTimeGranularity?: string; 
  public get partitioningTimeGranularity() {
    return this.getStringAttribute('partitioning_time_granularity');
  }
  public set partitioningTimeGranularity(value: string) {
    this._partitioningTimeGranularity = value;
  }
  public resetPartitioningTimeGranularity() {
    this._partitioningTimeGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitioningTimeGranularityInput() {
    return this._partitioningTimeGranularity;
  }
}
export interface DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioning {
  /**
  * If true, queries over the table require a partition filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#require_partition_filter DatastreamStream#require_partition_filter}
  */
  readonly requirePartitionFilter?: boolean | cdktn.IResolvable;
  /**
  * ingestion_time_partition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#ingestion_time_partition DatastreamStream#ingestion_time_partition}
  */
  readonly ingestionTimePartition?: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartition;
  /**
  * integer_range_partition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#integer_range_partition DatastreamStream#integer_range_partition}
  */
  readonly integerRangePartition?: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartition;
  /**
  * time_unit_partition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#time_unit_partition DatastreamStream#time_unit_partition}
  */
  readonly timeUnitPartition?: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartition;
}

export function datastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningToTerraform(struct?: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningOutputReference | DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    require_partition_filter: cdktn.booleanToTerraform(struct!.requirePartitionFilter),
    ingestion_time_partition: datastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartitionToTerraform(struct!.ingestionTimePartition),
    integer_range_partition: datastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartitionToTerraform(struct!.integerRangePartition),
    time_unit_partition: datastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartitionToTerraform(struct!.timeUnitPartition),
  }
}


export function datastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningToHclTerraform(struct?: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningOutputReference | DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    require_partition_filter: {
      value: cdktn.booleanToHclTerraform(struct!.requirePartitionFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ingestion_time_partition: {
      value: datastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartitionToHclTerraform(struct!.ingestionTimePartition),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartitionList",
    },
    integer_range_partition: {
      value: datastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartitionToHclTerraform(struct!.integerRangePartition),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartitionList",
    },
    time_unit_partition: {
      value: datastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartitionToHclTerraform(struct!.timeUnitPartition),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requirePartitionFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirePartitionFilter = this._requirePartitionFilter;
    }
    if (this._ingestionTimePartition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionTimePartition = this._ingestionTimePartition?.internalValue;
    }
    if (this._integerRangePartition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerRangePartition = this._integerRangePartition?.internalValue;
    }
    if (this._timeUnitPartition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnitPartition = this._timeUnitPartition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requirePartitionFilter = undefined;
      this._ingestionTimePartition.internalValue = undefined;
      this._integerRangePartition.internalValue = undefined;
      this._timeUnitPartition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requirePartitionFilter = value.requirePartitionFilter;
      this._ingestionTimePartition.internalValue = value.ingestionTimePartition;
      this._integerRangePartition.internalValue = value.integerRangePartition;
      this._timeUnitPartition.internalValue = value.timeUnitPartition;
    }
  }

  // require_partition_filter - computed: false, optional: true, required: false
  private _requirePartitionFilter?: boolean | cdktn.IResolvable; 
  public get requirePartitionFilter() {
    return this.getBooleanAttribute('require_partition_filter');
  }
  public set requirePartitionFilter(value: boolean | cdktn.IResolvable) {
    this._requirePartitionFilter = value;
  }
  public resetRequirePartitionFilter() {
    this._requirePartitionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePartitionFilterInput() {
    return this._requirePartitionFilter;
  }

  // ingestion_time_partition - computed: false, optional: true, required: false
  private _ingestionTimePartition = new DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartitionOutputReference(this, "ingestion_time_partition");
  public get ingestionTimePartition() {
    return this._ingestionTimePartition;
  }
  public putIngestionTimePartition(value: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartition) {
    this._ingestionTimePartition.internalValue = value;
  }
  public resetIngestionTimePartition() {
    this._ingestionTimePartition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionTimePartitionInput() {
    return this._ingestionTimePartition.internalValue;
  }

  // integer_range_partition - computed: false, optional: true, required: false
  private _integerRangePartition = new DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartitionOutputReference(this, "integer_range_partition");
  public get integerRangePartition() {
    return this._integerRangePartition;
  }
  public putIntegerRangePartition(value: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartition) {
    this._integerRangePartition.internalValue = value;
  }
  public resetIntegerRangePartition() {
    this._integerRangePartition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerRangePartitionInput() {
    return this._integerRangePartition.internalValue;
  }

  // time_unit_partition - computed: false, optional: true, required: false
  private _timeUnitPartition = new DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartitionOutputReference(this, "time_unit_partition");
  public get timeUnitPartition() {
    return this._timeUnitPartition;
  }
  public putTimeUnitPartition(value: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartition) {
    this._timeUnitPartition.internalValue = value;
  }
  public resetTimeUnitPartition() {
    this._timeUnitPartition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitPartitionInput() {
    return this._timeUnitPartition.internalValue;
  }
}
export interface DatastreamStreamRuleSetsCustomizationRules {
  /**
  * bigquery_clustering block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#bigquery_clustering DatastreamStream#bigquery_clustering}
  */
  readonly bigqueryClustering?: DatastreamStreamRuleSetsCustomizationRulesBigqueryClustering;
  /**
  * bigquery_partitioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#bigquery_partitioning DatastreamStream#bigquery_partitioning}
  */
  readonly bigqueryPartitioning?: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioning;
}

export function datastreamStreamRuleSetsCustomizationRulesToTerraform(struct?: DatastreamStreamRuleSetsCustomizationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bigquery_clustering: datastreamStreamRuleSetsCustomizationRulesBigqueryClusteringToTerraform(struct!.bigqueryClustering),
    bigquery_partitioning: datastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningToTerraform(struct!.bigqueryPartitioning),
  }
}


export function datastreamStreamRuleSetsCustomizationRulesToHclTerraform(struct?: DatastreamStreamRuleSetsCustomizationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bigquery_clustering: {
      value: datastreamStreamRuleSetsCustomizationRulesBigqueryClusteringToHclTerraform(struct!.bigqueryClustering),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamRuleSetsCustomizationRulesBigqueryClusteringList",
    },
    bigquery_partitioning: {
      value: datastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningToHclTerraform(struct!.bigqueryPartitioning),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamRuleSetsCustomizationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamRuleSetsCustomizationRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigqueryClustering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryClustering = this._bigqueryClustering?.internalValue;
    }
    if (this._bigqueryPartitioning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryPartitioning = this._bigqueryPartitioning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamRuleSetsCustomizationRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bigqueryClustering.internalValue = undefined;
      this._bigqueryPartitioning.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bigqueryClustering.internalValue = value.bigqueryClustering;
      this._bigqueryPartitioning.internalValue = value.bigqueryPartitioning;
    }
  }

  // bigquery_clustering - computed: false, optional: true, required: false
  private _bigqueryClustering = new DatastreamStreamRuleSetsCustomizationRulesBigqueryClusteringOutputReference(this, "bigquery_clustering");
  public get bigqueryClustering() {
    return this._bigqueryClustering;
  }
  public putBigqueryClustering(value: DatastreamStreamRuleSetsCustomizationRulesBigqueryClustering) {
    this._bigqueryClustering.internalValue = value;
  }
  public resetBigqueryClustering() {
    this._bigqueryClustering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryClusteringInput() {
    return this._bigqueryClustering.internalValue;
  }

  // bigquery_partitioning - computed: false, optional: true, required: false
  private _bigqueryPartitioning = new DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningOutputReference(this, "bigquery_partitioning");
  public get bigqueryPartitioning() {
    return this._bigqueryPartitioning;
  }
  public putBigqueryPartitioning(value: DatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioning) {
    this._bigqueryPartitioning.internalValue = value;
  }
  public resetBigqueryPartitioning() {
    this._bigqueryPartitioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryPartitioningInput() {
    return this._bigqueryPartitioning.internalValue;
  }
}

export class DatastreamStreamRuleSetsCustomizationRulesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamRuleSetsCustomizationRules[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamRuleSetsCustomizationRulesOutputReference {
    return new DatastreamStreamRuleSetsCustomizationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifier {
  /**
  * The MongoDB collection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#collection DatastreamStream#collection}
  */
  readonly collection: string;
  /**
  * The MongoDB database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#database DatastreamStream#database}
  */
  readonly database: string;
}

export function datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifierToTerraform(struct?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifierOutputReference | DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifier): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    collection: cdktn.stringToTerraform(struct!.collection),
    database: cdktn.stringToTerraform(struct!.database),
  }
}


export function datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifierToHclTerraform(struct?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifierOutputReference | DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifier): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    collection: {
      value: cdktn.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifierOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collection = undefined;
      this._database = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collection = value.collection;
      this._database = value.database;
    }
  }

  // collection - computed: false, optional: false, required: true
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }
}
export interface DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifier {
  /**
  * The database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#database DatastreamStream#database}
  */
  readonly database: string;
  /**
  * The table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
}

export function datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifierToTerraform(struct?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifierOutputReference | DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifier): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    table: cdktn.stringToTerraform(struct!.table),
  }
}


export function datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifierToHclTerraform(struct?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifierOutputReference | DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifier): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifierOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._table = value.table;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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
}
export interface DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifier {
  /**
  * The schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#schema DatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * The table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
}

export function datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifierToTerraform(struct?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifierOutputReference | DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifier): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    table: cdktn.stringToTerraform(struct!.table),
  }
}


export function datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifierToHclTerraform(struct?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifierOutputReference | DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifier): any {
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
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifierOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schema = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schema = value.schema;
      this._table = value.table;
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
}
export interface DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifier {
  /**
  * The schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#schema DatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * The table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
}

export function datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifierToTerraform(struct?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifierOutputReference | DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifier): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    table: cdktn.stringToTerraform(struct!.table),
  }
}


export function datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifierToHclTerraform(struct?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifierOutputReference | DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifier): any {
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
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifierOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schema = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schema = value.schema;
      this._table = value.table;
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
}
export interface DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifier {
  /**
  * The Salesforce object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#object_name DatastreamStream#object_name}
  */
  readonly objectName: string;
}

export function datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifierToTerraform(struct?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifierOutputReference | DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifier): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object_name: cdktn.stringToTerraform(struct!.objectName),
  }
}


export function datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifierToHclTerraform(struct?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifierOutputReference | DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifier): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object_name: {
      value: cdktn.stringToHclTerraform(struct!.objectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifierOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectName = value.objectName;
    }
  }

  // object_name - computed: false, optional: false, required: true
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }
}
export interface DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifier {
  /**
  * The schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#schema DatastreamStream#schema}
  */
  readonly schema?: string;
  /**
  * The table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
}

export function datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifierToTerraform(struct?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifierOutputReference | DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifier): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    table: cdktn.stringToTerraform(struct!.table),
  }
}


export function datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifierToHclTerraform(struct?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifierOutputReference | DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifier): any {
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
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifierOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schema = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schema = value.schema;
      this._table = value.table;
    }
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
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
}
export interface DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifier {
  /**
  * The schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#schema DatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * The table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
}

export function datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifierToTerraform(struct?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifierOutputReference | DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifier): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    table: cdktn.stringToTerraform(struct!.table),
  }
}


export function datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifierToHclTerraform(struct?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifierOutputReference | DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifier): any {
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
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifierOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schema = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schema = value.schema;
      this._table = value.table;
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
}
export interface DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifier {
  /**
  * mongodb_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#mongodb_identifier DatastreamStream#mongodb_identifier}
  */
  readonly mongodbIdentifier?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifier;
  /**
  * mysql_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#mysql_identifier DatastreamStream#mysql_identifier}
  */
  readonly mysqlIdentifier?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifier;
  /**
  * oracle_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#oracle_identifier DatastreamStream#oracle_identifier}
  */
  readonly oracleIdentifier?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifier;
  /**
  * postgresql_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#postgresql_identifier DatastreamStream#postgresql_identifier}
  */
  readonly postgresqlIdentifier?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifier;
  /**
  * salesforce_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#salesforce_identifier DatastreamStream#salesforce_identifier}
  */
  readonly salesforceIdentifier?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifier;
  /**
  * spanner_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#spanner_identifier DatastreamStream#spanner_identifier}
  */
  readonly spannerIdentifier?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifier;
  /**
  * sql_server_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#sql_server_identifier DatastreamStream#sql_server_identifier}
  */
  readonly sqlServerIdentifier?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifier;
}

export function datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierToTerraform(struct?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOutputReference | DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifier): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mongodb_identifier: datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifierToTerraform(struct!.mongodbIdentifier),
    mysql_identifier: datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifierToTerraform(struct!.mysqlIdentifier),
    oracle_identifier: datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifierToTerraform(struct!.oracleIdentifier),
    postgresql_identifier: datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifierToTerraform(struct!.postgresqlIdentifier),
    salesforce_identifier: datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifierToTerraform(struct!.salesforceIdentifier),
    spanner_identifier: datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifierToTerraform(struct!.spannerIdentifier),
    sql_server_identifier: datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifierToTerraform(struct!.sqlServerIdentifier),
  }
}


export function datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierToHclTerraform(struct?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOutputReference | DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifier): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mongodb_identifier: {
      value: datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifierToHclTerraform(struct!.mongodbIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifierList",
    },
    mysql_identifier: {
      value: datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifierToHclTerraform(struct!.mysqlIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifierList",
    },
    oracle_identifier: {
      value: datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifierToHclTerraform(struct!.oracleIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifierList",
    },
    postgresql_identifier: {
      value: datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifierToHclTerraform(struct!.postgresqlIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifierList",
    },
    salesforce_identifier: {
      value: datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifierToHclTerraform(struct!.salesforceIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifierList",
    },
    spanner_identifier: {
      value: datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifierToHclTerraform(struct!.spannerIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifierList",
    },
    sql_server_identifier: {
      value: datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifierToHclTerraform(struct!.sqlServerIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifierList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mongodbIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongodbIdentifier = this._mongodbIdentifier?.internalValue;
    }
    if (this._mysqlIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlIdentifier = this._mysqlIdentifier?.internalValue;
    }
    if (this._oracleIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleIdentifier = this._oracleIdentifier?.internalValue;
    }
    if (this._postgresqlIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlIdentifier = this._postgresqlIdentifier?.internalValue;
    }
    if (this._salesforceIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceIdentifier = this._salesforceIdentifier?.internalValue;
    }
    if (this._spannerIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spannerIdentifier = this._spannerIdentifier?.internalValue;
    }
    if (this._sqlServerIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServerIdentifier = this._sqlServerIdentifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mongodbIdentifier.internalValue = undefined;
      this._mysqlIdentifier.internalValue = undefined;
      this._oracleIdentifier.internalValue = undefined;
      this._postgresqlIdentifier.internalValue = undefined;
      this._salesforceIdentifier.internalValue = undefined;
      this._spannerIdentifier.internalValue = undefined;
      this._sqlServerIdentifier.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mongodbIdentifier.internalValue = value.mongodbIdentifier;
      this._mysqlIdentifier.internalValue = value.mysqlIdentifier;
      this._oracleIdentifier.internalValue = value.oracleIdentifier;
      this._postgresqlIdentifier.internalValue = value.postgresqlIdentifier;
      this._salesforceIdentifier.internalValue = value.salesforceIdentifier;
      this._spannerIdentifier.internalValue = value.spannerIdentifier;
      this._sqlServerIdentifier.internalValue = value.sqlServerIdentifier;
    }
  }

  // mongodb_identifier - computed: false, optional: true, required: false
  private _mongodbIdentifier = new DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifierOutputReference(this, "mongodb_identifier");
  public get mongodbIdentifier() {
    return this._mongodbIdentifier;
  }
  public putMongodbIdentifier(value: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifier) {
    this._mongodbIdentifier.internalValue = value;
  }
  public resetMongodbIdentifier() {
    this._mongodbIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbIdentifierInput() {
    return this._mongodbIdentifier.internalValue;
  }

  // mysql_identifier - computed: false, optional: true, required: false
  private _mysqlIdentifier = new DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifierOutputReference(this, "mysql_identifier");
  public get mysqlIdentifier() {
    return this._mysqlIdentifier;
  }
  public putMysqlIdentifier(value: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifier) {
    this._mysqlIdentifier.internalValue = value;
  }
  public resetMysqlIdentifier() {
    this._mysqlIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlIdentifierInput() {
    return this._mysqlIdentifier.internalValue;
  }

  // oracle_identifier - computed: false, optional: true, required: false
  private _oracleIdentifier = new DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifierOutputReference(this, "oracle_identifier");
  public get oracleIdentifier() {
    return this._oracleIdentifier;
  }
  public putOracleIdentifier(value: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifier) {
    this._oracleIdentifier.internalValue = value;
  }
  public resetOracleIdentifier() {
    this._oracleIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleIdentifierInput() {
    return this._oracleIdentifier.internalValue;
  }

  // postgresql_identifier - computed: false, optional: true, required: false
  private _postgresqlIdentifier = new DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifierOutputReference(this, "postgresql_identifier");
  public get postgresqlIdentifier() {
    return this._postgresqlIdentifier;
  }
  public putPostgresqlIdentifier(value: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifier) {
    this._postgresqlIdentifier.internalValue = value;
  }
  public resetPostgresqlIdentifier() {
    this._postgresqlIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlIdentifierInput() {
    return this._postgresqlIdentifier.internalValue;
  }

  // salesforce_identifier - computed: false, optional: true, required: false
  private _salesforceIdentifier = new DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifierOutputReference(this, "salesforce_identifier");
  public get salesforceIdentifier() {
    return this._salesforceIdentifier;
  }
  public putSalesforceIdentifier(value: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifier) {
    this._salesforceIdentifier.internalValue = value;
  }
  public resetSalesforceIdentifier() {
    this._salesforceIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceIdentifierInput() {
    return this._salesforceIdentifier.internalValue;
  }

  // spanner_identifier - computed: false, optional: true, required: false
  private _spannerIdentifier = new DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifierOutputReference(this, "spanner_identifier");
  public get spannerIdentifier() {
    return this._spannerIdentifier;
  }
  public putSpannerIdentifier(value: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifier) {
    this._spannerIdentifier.internalValue = value;
  }
  public resetSpannerIdentifier() {
    this._spannerIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spannerIdentifierInput() {
    return this._spannerIdentifier.internalValue;
  }

  // sql_server_identifier - computed: false, optional: true, required: false
  private _sqlServerIdentifier = new DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifierOutputReference(this, "sql_server_identifier");
  public get sqlServerIdentifier() {
    return this._sqlServerIdentifier;
  }
  public putSqlServerIdentifier(value: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifier) {
    this._sqlServerIdentifier.internalValue = value;
  }
  public resetSqlServerIdentifier() {
    this._sqlServerIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerIdentifierInput() {
    return this._sqlServerIdentifier.internalValue;
  }
}
export interface DatastreamStreamRuleSetsObjectFilter {
  /**
  * source_object_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#source_object_identifier DatastreamStream#source_object_identifier}
  */
  readonly sourceObjectIdentifier?: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifier;
}

export function datastreamStreamRuleSetsObjectFilterToTerraform(struct?: DatastreamStreamRuleSetsObjectFilterOutputReference | DatastreamStreamRuleSetsObjectFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_object_identifier: datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierToTerraform(struct!.sourceObjectIdentifier),
  }
}


export function datastreamStreamRuleSetsObjectFilterToHclTerraform(struct?: DatastreamStreamRuleSetsObjectFilterOutputReference | DatastreamStreamRuleSetsObjectFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_object_identifier: {
      value: datastreamStreamRuleSetsObjectFilterSourceObjectIdentifierToHclTerraform(struct!.sourceObjectIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamRuleSetsObjectFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamRuleSetsObjectFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceObjectIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceObjectIdentifier = this._sourceObjectIdentifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamRuleSetsObjectFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceObjectIdentifier.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceObjectIdentifier.internalValue = value.sourceObjectIdentifier;
    }
  }

  // source_object_identifier - computed: false, optional: true, required: false
  private _sourceObjectIdentifier = new DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOutputReference(this, "source_object_identifier");
  public get sourceObjectIdentifier() {
    return this._sourceObjectIdentifier;
  }
  public putSourceObjectIdentifier(value: DatastreamStreamRuleSetsObjectFilterSourceObjectIdentifier) {
    this._sourceObjectIdentifier.internalValue = value;
  }
  public resetSourceObjectIdentifier() {
    this._sourceObjectIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceObjectIdentifierInput() {
    return this._sourceObjectIdentifier.internalValue;
  }
}
export interface DatastreamStreamRuleSets {
  /**
  * customization_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#customization_rules DatastreamStream#customization_rules}
  */
  readonly customizationRules: DatastreamStreamRuleSetsCustomizationRules[] | cdktn.IResolvable;
  /**
  * object_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#object_filter DatastreamStream#object_filter}
  */
  readonly objectFilter: DatastreamStreamRuleSetsObjectFilter;
}

export function datastreamStreamRuleSetsToTerraform(struct?: DatastreamStreamRuleSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    customization_rules: cdktn.listMapper(datastreamStreamRuleSetsCustomizationRulesToTerraform, true)(struct!.customizationRules),
    object_filter: datastreamStreamRuleSetsObjectFilterToTerraform(struct!.objectFilter),
  }
}


export function datastreamStreamRuleSetsToHclTerraform(struct?: DatastreamStreamRuleSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    customization_rules: {
      value: cdktn.listMapperHcl(datastreamStreamRuleSetsCustomizationRulesToHclTerraform, true)(struct!.customizationRules),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamRuleSetsCustomizationRulesList",
    },
    object_filter: {
      value: datastreamStreamRuleSetsObjectFilterToHclTerraform(struct!.objectFilter),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamRuleSetsObjectFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamRuleSetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamRuleSets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customizationRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizationRules = this._customizationRules?.internalValue;
    }
    if (this._objectFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectFilter = this._objectFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamRuleSets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customizationRules.internalValue = undefined;
      this._objectFilter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customizationRules.internalValue = value.customizationRules;
      this._objectFilter.internalValue = value.objectFilter;
    }
  }

  // customization_rules - computed: false, optional: false, required: true
  private _customizationRules = new DatastreamStreamRuleSetsCustomizationRulesList(this, "customization_rules", false);
  public get customizationRules() {
    return this._customizationRules;
  }
  public putCustomizationRules(value: DatastreamStreamRuleSetsCustomizationRules[] | cdktn.IResolvable) {
    this._customizationRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationRulesInput() {
    return this._customizationRules.internalValue;
  }

  // object_filter - computed: false, optional: false, required: true
  private _objectFilter = new DatastreamStreamRuleSetsObjectFilterOutputReference(this, "object_filter");
  public get objectFilter() {
    return this._objectFilter;
  }
  public putObjectFilter(value: DatastreamStreamRuleSetsObjectFilter) {
    this._objectFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectFilterInput() {
    return this._objectFilter.internalValue;
  }
}

export class DatastreamStreamRuleSetsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamRuleSets[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamRuleSetsOutputReference {
    return new DatastreamStreamRuleSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFields {
  /**
  * Field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#field DatastreamStream#field}
  */
  readonly field?: string;
}

export function datastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsToTerraform(struct?: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
  }
}


export function datastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsToHclTerraform(struct?: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }
}

export class DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFields[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsOutputReference {
    return new DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollections {
  /**
  * Collection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#collection DatastreamStream#collection}
  */
  readonly collection?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#fields DatastreamStream#fields}
  */
  readonly fields?: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFields[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsToTerraform(struct?: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    collection: cdktn.stringToTerraform(struct!.collection),
    fields: cdktn.listMapper(datastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsToTerraform, true)(struct!.fields),
  }
}


export function datastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsToHclTerraform(struct?: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    collection: {
      value: cdktn.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollections | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollections | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collection = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collection = value.collection;
      this._fields.internalValue = value.fields;
    }
  }

  // collection - computed: false, optional: true, required: false
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  public resetCollection() {
    this._collection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollections[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsOutputReference {
    return new DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabases {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#database DatastreamStream#database}
  */
  readonly database?: string;
  /**
  * collections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#collections DatastreamStream#collections}
  */
  readonly collections?: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollections[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesToTerraform(struct?: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    collections: cdktn.listMapper(datastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsToTerraform, true)(struct!.collections),
  }
}


export function datastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesToHclTerraform(struct?: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collections: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsToHclTerraform, true)(struct!.collections),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabases | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._collections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collections = this._collections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabases | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._collections.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._collections.internalValue = value.collections;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // collections - computed: false, optional: true, required: false
  private _collections = new DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsList(this, "collections", false);
  public get collections() {
    return this._collections;
  }
  public putCollections(value: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollections[] | cdktn.IResolvable) {
    this._collections.internalValue = value;
  }
  public resetCollections() {
    this._collections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionsInput() {
    return this._collections.internalValue;
  }
}

export class DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabases[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesOutputReference {
    return new DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjects {
  /**
  * databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#databases DatastreamStream#databases}
  */
  readonly databases?: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabases[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsToTerraform(struct?: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsOutputReference | DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    databases: cdktn.listMapper(datastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesToTerraform, true)(struct!.databases),
  }
}


export function datastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsToHclTerraform(struct?: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsOutputReference | DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    databases: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesToHclTerraform, true)(struct!.databases),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databases.internalValue = value.databases;
    }
  }

  // databases - computed: false, optional: true, required: false
  private _databases = new DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesList(this, "databases", false);
  public get databases() {
    return this._databases;
  }
  public putDatabases(value: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabases[] | cdktn.IResolvable) {
    this._databases.internalValue = value;
  }
  public resetDatabases() {
    this._databases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases.internalValue;
  }
}
export interface DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFields {
  /**
  * Field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#field DatastreamStream#field}
  */
  readonly field?: string;
}

export function datastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsToTerraform(struct?: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
  }
}


export function datastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsToHclTerraform(struct?: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }
}

export class DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFields[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsOutputReference {
    return new DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollections {
  /**
  * Collection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#collection DatastreamStream#collection}
  */
  readonly collection?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#fields DatastreamStream#fields}
  */
  readonly fields?: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFields[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsToTerraform(struct?: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    collection: cdktn.stringToTerraform(struct!.collection),
    fields: cdktn.listMapper(datastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsToTerraform, true)(struct!.fields),
  }
}


export function datastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsToHclTerraform(struct?: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    collection: {
      value: cdktn.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollections | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollections | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collection = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collection = value.collection;
      this._fields.internalValue = value.fields;
    }
  }

  // collection - computed: false, optional: true, required: false
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  public resetCollection() {
    this._collection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollections[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsOutputReference {
    return new DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabases {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#database DatastreamStream#database}
  */
  readonly database?: string;
  /**
  * collections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#collections DatastreamStream#collections}
  */
  readonly collections?: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollections[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesToTerraform(struct?: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    collections: cdktn.listMapper(datastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsToTerraform, true)(struct!.collections),
  }
}


export function datastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesToHclTerraform(struct?: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collections: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsToHclTerraform, true)(struct!.collections),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabases | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._collections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collections = this._collections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabases | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._collections.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._collections.internalValue = value.collections;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // collections - computed: false, optional: true, required: false
  private _collections = new DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsList(this, "collections", false);
  public get collections() {
    return this._collections;
  }
  public putCollections(value: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollections[] | cdktn.IResolvable) {
    this._collections.internalValue = value;
  }
  public resetCollections() {
    this._collections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionsInput() {
    return this._collections.internalValue;
  }
}

export class DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabases[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesOutputReference {
    return new DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjects {
  /**
  * databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#databases DatastreamStream#databases}
  */
  readonly databases?: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabases[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsToTerraform(struct?: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsOutputReference | DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    databases: cdktn.listMapper(datastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesToTerraform, true)(struct!.databases),
  }
}


export function datastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsToHclTerraform(struct?: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsOutputReference | DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    databases: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesToHclTerraform, true)(struct!.databases),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databases.internalValue = value.databases;
    }
  }

  // databases - computed: false, optional: true, required: false
  private _databases = new DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesList(this, "databases", false);
  public get databases() {
    return this._databases;
  }
  public putDatabases(value: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabases[] | cdktn.IResolvable) {
    this._databases.internalValue = value;
  }
  public resetDatabases() {
    this._databases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases.internalValue;
  }
}
export interface DatastreamStreamSourceConfigMongodbSourceConfig {
  /**
  * Optional. Maximum number of concurrent backfill tasks. The number
  * should be non-negative and less than or equal to 50. If not set
  * (or set to 0), the system''s default value is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#max_concurrent_backfill_tasks DatastreamStream#max_concurrent_backfill_tasks}
  */
  readonly maxConcurrentBackfillTasks?: number;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#exclude_objects DatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjects;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#include_objects DatastreamStream#include_objects}
  */
  readonly includeObjects?: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjects;
}

export function datastreamStreamSourceConfigMongodbSourceConfigToTerraform(struct?: DatastreamStreamSourceConfigMongodbSourceConfigOutputReference | DatastreamStreamSourceConfigMongodbSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_concurrent_backfill_tasks: cdktn.numberToTerraform(struct!.maxConcurrentBackfillTasks),
    exclude_objects: datastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    include_objects: datastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
  }
}


export function datastreamStreamSourceConfigMongodbSourceConfigToHclTerraform(struct?: DatastreamStreamSourceConfigMongodbSourceConfigOutputReference | DatastreamStreamSourceConfigMongodbSourceConfig): any {
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
    exclude_objects: {
      value: datastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsToHclTerraform(struct!.excludeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsList",
    },
    include_objects: {
      value: datastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsToHclTerraform(struct!.includeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigMongodbSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigMongodbSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentBackfillTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentBackfillTasks = this._maxConcurrentBackfillTasks;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMongodbSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentBackfillTasks = undefined;
      this._excludeObjects.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentBackfillTasks = value.maxConcurrentBackfillTasks;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._includeObjects.internalValue = value.includeObjects;
    }
  }

  // max_concurrent_backfill_tasks - computed: false, optional: true, required: false
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

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: DatastreamStreamSourceConfigMongodbSourceConfigExcludeObjects) {
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
  private _includeObjects = new DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: DatastreamStreamSourceConfigMongodbSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition {
}

export function datastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionOutputReference | DatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function datastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionToHclTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionOutputReference | DatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns {
  /**
  * Column collation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#collation DatastreamStream#collation}
  */
  readonly collation?: string;
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#column DatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The MySQL data type. Full data types list can be found here:
  * https://dev.mysql.com/doc/refman/8.0/en/data-types.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#data_type DatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#nullable DatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktn.IResolvable;
  /**
  * The ordinal position of the column in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#ordinal_position DatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#primary_key DatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    collation: cdktn.stringToTerraform(struct!.collation),
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
    nullable: cdktn.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktn.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktn.booleanToTerraform(struct!.primaryKey),
  }
}


export function datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToHclTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    collation: {
      value: cdktn.stringToHclTerraform(struct!.collation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    nullable: {
      value: cdktn.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ordinal_position: {
      value: cdktn.numberToHclTerraform(struct!.ordinalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key: {
      value: cdktn.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collation = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collation = value.collation;
      this._column = value.column;
      this._dataType = value.dataType;
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
    }
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
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

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktn.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktn.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktn.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktn.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference {
    return new DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
  /**
  * mysql_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#mysql_columns DatastreamStream#mysql_columns}
  */
  readonly mysqlColumns?: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    mysql_columns: cdktn.listMapper(datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform, true)(struct!.mysqlColumns),
  }
}


export function datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesToHclTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable): any {
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
    mysql_columns: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToHclTerraform, true)(struct!.mysqlColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._mysqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlColumns = this._mysqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._mysqlColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._mysqlColumns.internalValue = value.mysqlColumns;
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

  // mysql_columns - computed: false, optional: true, required: false
  private _mysqlColumns = new DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList(this, "mysql_columns", false);
  public get mysqlColumns() {
    return this._mysqlColumns;
  }
  public putMysqlColumns(value: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktn.IResolvable) {
    this._mysqlColumns.internalValue = value;
  }
  public resetMysqlColumns() {
    this._mysqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlColumnsInput() {
    return this._mysqlColumns.internalValue;
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesOutputReference {
    return new DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#database DatastreamStream#database}
  */
  readonly database: string;
  /**
  * mysql_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#mysql_tables DatastreamStream#mysql_tables}
  */
  readonly mysqlTables?: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    mysql_tables: cdktn.listMapper(datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesToTerraform, true)(struct!.mysqlTables),
  }
}


export function datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesToHclTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mysql_tables: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesToHclTerraform, true)(struct!.mysqlTables),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mysqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlTables = this._mysqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._mysqlTables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._mysqlTables.internalValue = value.mysqlTables;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // mysql_tables - computed: false, optional: true, required: false
  private _mysqlTables = new DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesList(this, "mysql_tables", false);
  public get mysqlTables() {
    return this._mysqlTables;
  }
  public putMysqlTables(value: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables[] | cdktn.IResolvable) {
    this._mysqlTables.internalValue = value;
  }
  public resetMysqlTables() {
    this._mysqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlTablesInput() {
    return this._mysqlTables.internalValue;
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesOutputReference {
    return new DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects {
  /**
  * mysql_databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#mysql_databases DatastreamStream#mysql_databases}
  */
  readonly mysqlDatabases: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsOutputReference | DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mysql_databases: cdktn.listMapper(datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesToTerraform, true)(struct!.mysqlDatabases),
  }
}


export function datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsToHclTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsOutputReference | DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mysql_databases: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesToHclTerraform, true)(struct!.mysqlDatabases),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysqlDatabases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlDatabases = this._mysqlDatabases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysqlDatabases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysqlDatabases.internalValue = value.mysqlDatabases;
    }
  }

  // mysql_databases - computed: false, optional: false, required: true
  private _mysqlDatabases = new DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesList(this, "mysql_databases", false);
  public get mysqlDatabases() {
    return this._mysqlDatabases;
  }
  public putMysqlDatabases(value: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases[] | cdktn.IResolvable) {
    this._mysqlDatabases.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlDatabasesInput() {
    return this._mysqlDatabases.internalValue;
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfigGtid {
}

export function datastreamStreamSourceConfigMysqlSourceConfigGtidToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigGtidOutputReference | DatastreamStreamSourceConfigMysqlSourceConfigGtid): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function datastreamStreamSourceConfigMysqlSourceConfigGtidToHclTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigGtidOutputReference | DatastreamStreamSourceConfigMysqlSourceConfigGtid): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatastreamStreamSourceConfigMysqlSourceConfigGtidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfigGtid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfigGtid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns {
  /**
  * Column collation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#collation DatastreamStream#collation}
  */
  readonly collation?: string;
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#column DatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The MySQL data type. Full data types list can be found here:
  * https://dev.mysql.com/doc/refman/8.0/en/data-types.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#data_type DatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#nullable DatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktn.IResolvable;
  /**
  * The ordinal position of the column in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#ordinal_position DatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#primary_key DatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    collation: cdktn.stringToTerraform(struct!.collation),
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
    nullable: cdktn.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktn.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktn.booleanToTerraform(struct!.primaryKey),
  }
}


export function datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToHclTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    collation: {
      value: cdktn.stringToHclTerraform(struct!.collation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    nullable: {
      value: cdktn.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ordinal_position: {
      value: cdktn.numberToHclTerraform(struct!.ordinalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key: {
      value: cdktn.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collation = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collation = value.collation;
      this._column = value.column;
      this._dataType = value.dataType;
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
    }
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
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

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktn.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktn.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktn.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktn.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference {
    return new DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
  /**
  * mysql_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#mysql_columns DatastreamStream#mysql_columns}
  */
  readonly mysqlColumns?: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    mysql_columns: cdktn.listMapper(datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform, true)(struct!.mysqlColumns),
  }
}


export function datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesToHclTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable): any {
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
    mysql_columns: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToHclTerraform, true)(struct!.mysqlColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._mysqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlColumns = this._mysqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._mysqlColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._mysqlColumns.internalValue = value.mysqlColumns;
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

  // mysql_columns - computed: false, optional: true, required: false
  private _mysqlColumns = new DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList(this, "mysql_columns", false);
  public get mysqlColumns() {
    return this._mysqlColumns;
  }
  public putMysqlColumns(value: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktn.IResolvable) {
    this._mysqlColumns.internalValue = value;
  }
  public resetMysqlColumns() {
    this._mysqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlColumnsInput() {
    return this._mysqlColumns.internalValue;
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesOutputReference {
    return new DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#database DatastreamStream#database}
  */
  readonly database: string;
  /**
  * mysql_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#mysql_tables DatastreamStream#mysql_tables}
  */
  readonly mysqlTables?: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    mysql_tables: cdktn.listMapper(datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesToTerraform, true)(struct!.mysqlTables),
  }
}


export function datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesToHclTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mysql_tables: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesToHclTerraform, true)(struct!.mysqlTables),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mysqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlTables = this._mysqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._mysqlTables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._mysqlTables.internalValue = value.mysqlTables;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // mysql_tables - computed: false, optional: true, required: false
  private _mysqlTables = new DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesList(this, "mysql_tables", false);
  public get mysqlTables() {
    return this._mysqlTables;
  }
  public putMysqlTables(value: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables[] | cdktn.IResolvable) {
    this._mysqlTables.internalValue = value;
  }
  public resetMysqlTables() {
    this._mysqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlTablesInput() {
    return this._mysqlTables.internalValue;
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesOutputReference {
    return new DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects {
  /**
  * mysql_databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#mysql_databases DatastreamStream#mysql_databases}
  */
  readonly mysqlDatabases: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsOutputReference | DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mysql_databases: cdktn.listMapper(datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesToTerraform, true)(struct!.mysqlDatabases),
  }
}


export function datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsToHclTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsOutputReference | DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mysql_databases: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesToHclTerraform, true)(struct!.mysqlDatabases),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysqlDatabases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlDatabases = this._mysqlDatabases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysqlDatabases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysqlDatabases.internalValue = value.mysqlDatabases;
    }
  }

  // mysql_databases - computed: false, optional: false, required: true
  private _mysqlDatabases = new DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesList(this, "mysql_databases", false);
  public get mysqlDatabases() {
    return this._mysqlDatabases;
  }
  public putMysqlDatabases(value: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases[] | cdktn.IResolvable) {
    this._mysqlDatabases.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlDatabasesInput() {
    return this._mysqlDatabases.internalValue;
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfig {
  /**
  * Maximum number of concurrent backfill tasks. The number should be non negative.
  * If not set (or set to 0), the system's default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#max_concurrent_backfill_tasks DatastreamStream#max_concurrent_backfill_tasks}
  */
  readonly maxConcurrentBackfillTasks?: number;
  /**
  * Maximum number of concurrent CDC tasks. The number should be non negative.
  * If not set (or set to 0), the system's default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#max_concurrent_cdc_tasks DatastreamStream#max_concurrent_cdc_tasks}
  */
  readonly maxConcurrentCdcTasks?: number;
  /**
  * binary_log_position block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#binary_log_position DatastreamStream#binary_log_position}
  */
  readonly binaryLogPosition?: DatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#exclude_objects DatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects;
  /**
  * gtid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#gtid DatastreamStream#gtid}
  */
  readonly gtid?: DatastreamStreamSourceConfigMysqlSourceConfigGtid;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#include_objects DatastreamStream#include_objects}
  */
  readonly includeObjects?: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects;
}

export function datastreamStreamSourceConfigMysqlSourceConfigToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigOutputReference | DatastreamStreamSourceConfigMysqlSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_concurrent_backfill_tasks: cdktn.numberToTerraform(struct!.maxConcurrentBackfillTasks),
    max_concurrent_cdc_tasks: cdktn.numberToTerraform(struct!.maxConcurrentCdcTasks),
    binary_log_position: datastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionToTerraform(struct!.binaryLogPosition),
    exclude_objects: datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    gtid: datastreamStreamSourceConfigMysqlSourceConfigGtidToTerraform(struct!.gtid),
    include_objects: datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
  }
}


export function datastreamStreamSourceConfigMysqlSourceConfigToHclTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigOutputReference | DatastreamStreamSourceConfigMysqlSourceConfig): any {
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
    binary_log_position: {
      value: datastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionToHclTerraform(struct!.binaryLogPosition),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionList",
    },
    exclude_objects: {
      value: datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsToHclTerraform(struct!.excludeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsList",
    },
    gtid: {
      value: datastreamStreamSourceConfigMysqlSourceConfigGtidToHclTerraform(struct!.gtid),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMysqlSourceConfigGtidList",
    },
    include_objects: {
      value: datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsToHclTerraform(struct!.includeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigMysqlSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfig | undefined {
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
    if (this._binaryLogPosition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryLogPosition = this._binaryLogPosition?.internalValue;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._gtid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtid = this._gtid?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentBackfillTasks = undefined;
      this._maxConcurrentCdcTasks = undefined;
      this._binaryLogPosition.internalValue = undefined;
      this._excludeObjects.internalValue = undefined;
      this._gtid.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentBackfillTasks = value.maxConcurrentBackfillTasks;
      this._maxConcurrentCdcTasks = value.maxConcurrentCdcTasks;
      this._binaryLogPosition.internalValue = value.binaryLogPosition;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._gtid.internalValue = value.gtid;
      this._includeObjects.internalValue = value.includeObjects;
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

  // binary_log_position - computed: false, optional: true, required: false
  private _binaryLogPosition = new DatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionOutputReference(this, "binary_log_position");
  public get binaryLogPosition() {
    return this._binaryLogPosition;
  }
  public putBinaryLogPosition(value: DatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition) {
    this._binaryLogPosition.internalValue = value;
  }
  public resetBinaryLogPosition() {
    this._binaryLogPosition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryLogPositionInput() {
    return this._binaryLogPosition.internalValue;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects) {
    this._excludeObjects.internalValue = value;
  }
  public resetExcludeObjects() {
    this._excludeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeObjectsInput() {
    return this._excludeObjects.internalValue;
  }

  // gtid - computed: false, optional: true, required: false
  private _gtid = new DatastreamStreamSourceConfigMysqlSourceConfigGtidOutputReference(this, "gtid");
  public get gtid() {
    return this._gtid;
  }
  public putGtid(value: DatastreamStreamSourceConfigMysqlSourceConfigGtid) {
    this._gtid.internalValue = value;
  }
  public resetGtid() {
    this._gtid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtidInput() {
    return this._gtid.internalValue;
  }

  // include_objects - computed: false, optional: true, required: false
  private _includeObjects = new DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }
}
export interface DatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects {
}

export function datastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsToTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsOutputReference | DatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function datastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsToHclTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsOutputReference | DatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#column DatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The Oracle data type. Full data types list can be found here:
  * https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#data_type DatastreamStream#data_type}
  */
  readonly dataType?: string;
}

export function datastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsToTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
  }
}


export function datastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsToHclTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable): any {
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

export class DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable | undefined) {
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

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
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

export class DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsOutputReference {
    return new DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
  /**
  * oracle_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#oracle_columns DatastreamStream#oracle_columns}
  */
  readonly oracleColumns?: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesToTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    oracle_columns: cdktn.listMapper(datastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsToTerraform, true)(struct!.oracleColumns),
  }
}


export function datastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesToHclTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables | cdktn.IResolvable): any {
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
    oracle_columns: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsToHclTerraform, true)(struct!.oracleColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._oracleColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleColumns = this._oracleColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._oracleColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._oracleColumns.internalValue = value.oracleColumns;
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

  // oracle_columns - computed: false, optional: true, required: false
  private _oracleColumns = new DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsList(this, "oracle_columns", false);
  public get oracleColumns() {
    return this._oracleColumns;
  }
  public putOracleColumns(value: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns[] | cdktn.IResolvable) {
    this._oracleColumns.internalValue = value;
  }
  public resetOracleColumns() {
    this._oracleColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleColumnsInput() {
    return this._oracleColumns.internalValue;
  }
}

export class DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOutputReference {
    return new DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#schema DatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * oracle_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#oracle_tables DatastreamStream#oracle_tables}
  */
  readonly oracleTables?: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasToTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    oracle_tables: cdktn.listMapper(datastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesToTerraform, true)(struct!.oracleTables),
  }
}


export function datastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasToHclTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas | cdktn.IResolvable): any {
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
    oracle_tables: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesToHclTerraform, true)(struct!.oracleTables),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._oracleTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleTables = this._oracleTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._oracleTables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._oracleTables.internalValue = value.oracleTables;
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

  // oracle_tables - computed: false, optional: true, required: false
  private _oracleTables = new DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesList(this, "oracle_tables", false);
  public get oracleTables() {
    return this._oracleTables;
  }
  public putOracleTables(value: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables[] | cdktn.IResolvable) {
    this._oracleTables.internalValue = value;
  }
  public resetOracleTables() {
    this._oracleTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleTablesInput() {
    return this._oracleTables.internalValue;
  }
}

export class DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOutputReference {
    return new DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigOracleSourceConfigExcludeObjects {
  /**
  * oracle_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#oracle_schemas DatastreamStream#oracle_schemas}
  */
  readonly oracleSchemas: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigOracleSourceConfigExcludeObjectsToTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOutputReference | DatastreamStreamSourceConfigOracleSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    oracle_schemas: cdktn.listMapper(datastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasToTerraform, true)(struct!.oracleSchemas),
  }
}


export function datastreamStreamSourceConfigOracleSourceConfigExcludeObjectsToHclTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOutputReference | DatastreamStreamSourceConfigOracleSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    oracle_schemas: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasToHclTerraform, true)(struct!.oracleSchemas),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigOracleSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oracleSchemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleSchemas = this._oracleSchemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oracleSchemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oracleSchemas.internalValue = value.oracleSchemas;
    }
  }

  // oracle_schemas - computed: false, optional: false, required: true
  private _oracleSchemas = new DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasList(this, "oracle_schemas", false);
  public get oracleSchemas() {
    return this._oracleSchemas;
  }
  public putOracleSchemas(value: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas[] | cdktn.IResolvable) {
    this._oracleSchemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleSchemasInput() {
    return this._oracleSchemas.internalValue;
  }
}
export interface DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#column DatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The Oracle data type. Full data types list can be found here:
  * https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#data_type DatastreamStream#data_type}
  */
  readonly dataType?: string;
}

export function datastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsToTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
  }
}


export function datastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsToHclTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable): any {
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

export class DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable | undefined) {
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

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
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

export class DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsOutputReference {
    return new DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
  /**
  * oracle_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#oracle_columns DatastreamStream#oracle_columns}
  */
  readonly oracleColumns?: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesToTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    oracle_columns: cdktn.listMapper(datastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsToTerraform, true)(struct!.oracleColumns),
  }
}


export function datastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesToHclTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables | cdktn.IResolvable): any {
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
    oracle_columns: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsToHclTerraform, true)(struct!.oracleColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._oracleColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleColumns = this._oracleColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._oracleColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._oracleColumns.internalValue = value.oracleColumns;
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

  // oracle_columns - computed: false, optional: true, required: false
  private _oracleColumns = new DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsList(this, "oracle_columns", false);
  public get oracleColumns() {
    return this._oracleColumns;
  }
  public putOracleColumns(value: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns[] | cdktn.IResolvable) {
    this._oracleColumns.internalValue = value;
  }
  public resetOracleColumns() {
    this._oracleColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleColumnsInput() {
    return this._oracleColumns.internalValue;
  }
}

export class DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOutputReference {
    return new DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#schema DatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * oracle_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#oracle_tables DatastreamStream#oracle_tables}
  */
  readonly oracleTables?: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasToTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    oracle_tables: cdktn.listMapper(datastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesToTerraform, true)(struct!.oracleTables),
  }
}


export function datastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasToHclTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas | cdktn.IResolvable): any {
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
    oracle_tables: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesToHclTerraform, true)(struct!.oracleTables),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._oracleTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleTables = this._oracleTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._oracleTables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._oracleTables.internalValue = value.oracleTables;
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

  // oracle_tables - computed: false, optional: true, required: false
  private _oracleTables = new DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesList(this, "oracle_tables", false);
  public get oracleTables() {
    return this._oracleTables;
  }
  public putOracleTables(value: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables[] | cdktn.IResolvable) {
    this._oracleTables.internalValue = value;
  }
  public resetOracleTables() {
    this._oracleTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleTablesInput() {
    return this._oracleTables.internalValue;
  }
}

export class DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOutputReference {
    return new DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigOracleSourceConfigIncludeObjects {
  /**
  * oracle_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#oracle_schemas DatastreamStream#oracle_schemas}
  */
  readonly oracleSchemas: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigOracleSourceConfigIncludeObjectsToTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOutputReference | DatastreamStreamSourceConfigOracleSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    oracle_schemas: cdktn.listMapper(datastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasToTerraform, true)(struct!.oracleSchemas),
  }
}


export function datastreamStreamSourceConfigOracleSourceConfigIncludeObjectsToHclTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOutputReference | DatastreamStreamSourceConfigOracleSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    oracle_schemas: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasToHclTerraform, true)(struct!.oracleSchemas),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigOracleSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oracleSchemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleSchemas = this._oracleSchemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oracleSchemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oracleSchemas.internalValue = value.oracleSchemas;
    }
  }

  // oracle_schemas - computed: false, optional: false, required: true
  private _oracleSchemas = new DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasList(this, "oracle_schemas", false);
  public get oracleSchemas() {
    return this._oracleSchemas;
  }
  public putOracleSchemas(value: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas[] | cdktn.IResolvable) {
    this._oracleSchemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleSchemasInput() {
    return this._oracleSchemas.internalValue;
  }
}
export interface DatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects {
}

export function datastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsToTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsOutputReference | DatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function datastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsToHclTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsOutputReference | DatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatastreamStreamSourceConfigOracleSourceConfig {
  /**
  * Maximum number of concurrent backfill tasks. The number should be non negative.
  * If not set (or set to 0), the system's default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#max_concurrent_backfill_tasks DatastreamStream#max_concurrent_backfill_tasks}
  */
  readonly maxConcurrentBackfillTasks?: number;
  /**
  * Maximum number of concurrent CDC tasks. The number should be non negative.
  * If not set (or set to 0), the system's default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#max_concurrent_cdc_tasks DatastreamStream#max_concurrent_cdc_tasks}
  */
  readonly maxConcurrentCdcTasks?: number;
  /**
  * drop_large_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#drop_large_objects DatastreamStream#drop_large_objects}
  */
  readonly dropLargeObjects?: DatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#exclude_objects DatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjects;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#include_objects DatastreamStream#include_objects}
  */
  readonly includeObjects?: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjects;
  /**
  * stream_large_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#stream_large_objects DatastreamStream#stream_large_objects}
  */
  readonly streamLargeObjects?: DatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects;
}

export function datastreamStreamSourceConfigOracleSourceConfigToTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigOutputReference | DatastreamStreamSourceConfigOracleSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_concurrent_backfill_tasks: cdktn.numberToTerraform(struct!.maxConcurrentBackfillTasks),
    max_concurrent_cdc_tasks: cdktn.numberToTerraform(struct!.maxConcurrentCdcTasks),
    drop_large_objects: datastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsToTerraform(struct!.dropLargeObjects),
    exclude_objects: datastreamStreamSourceConfigOracleSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    include_objects: datastreamStreamSourceConfigOracleSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
    stream_large_objects: datastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsToTerraform(struct!.streamLargeObjects),
  }
}


export function datastreamStreamSourceConfigOracleSourceConfigToHclTerraform(struct?: DatastreamStreamSourceConfigOracleSourceConfigOutputReference | DatastreamStreamSourceConfigOracleSourceConfig): any {
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
    drop_large_objects: {
      value: datastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsToHclTerraform(struct!.dropLargeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsList",
    },
    exclude_objects: {
      value: datastreamStreamSourceConfigOracleSourceConfigExcludeObjectsToHclTerraform(struct!.excludeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsList",
    },
    include_objects: {
      value: datastreamStreamSourceConfigOracleSourceConfigIncludeObjectsToHclTerraform(struct!.includeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsList",
    },
    stream_large_objects: {
      value: datastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsToHclTerraform(struct!.streamLargeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigOracleSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigOracleSourceConfig | undefined {
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
    if (this._dropLargeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropLargeObjects = this._dropLargeObjects?.internalValue;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    if (this._streamLargeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamLargeObjects = this._streamLargeObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigOracleSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentBackfillTasks = undefined;
      this._maxConcurrentCdcTasks = undefined;
      this._dropLargeObjects.internalValue = undefined;
      this._excludeObjects.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
      this._streamLargeObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentBackfillTasks = value.maxConcurrentBackfillTasks;
      this._maxConcurrentCdcTasks = value.maxConcurrentCdcTasks;
      this._dropLargeObjects.internalValue = value.dropLargeObjects;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._includeObjects.internalValue = value.includeObjects;
      this._streamLargeObjects.internalValue = value.streamLargeObjects;
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

  // drop_large_objects - computed: false, optional: true, required: false
  private _dropLargeObjects = new DatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsOutputReference(this, "drop_large_objects");
  public get dropLargeObjects() {
    return this._dropLargeObjects;
  }
  public putDropLargeObjects(value: DatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects) {
    this._dropLargeObjects.internalValue = value;
  }
  public resetDropLargeObjects() {
    this._dropLargeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropLargeObjectsInput() {
    return this._dropLargeObjects.internalValue;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new DatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: DatastreamStreamSourceConfigOracleSourceConfigExcludeObjects) {
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
  private _includeObjects = new DatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: DatastreamStreamSourceConfigOracleSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }

  // stream_large_objects - computed: false, optional: true, required: false
  private _streamLargeObjects = new DatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsOutputReference(this, "stream_large_objects");
  public get streamLargeObjects() {
    return this._streamLargeObjects;
  }
  public putStreamLargeObjects(value: DatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects) {
    this._streamLargeObjects.internalValue = value;
  }
  public resetStreamLargeObjects() {
    this._streamLargeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamLargeObjectsInput() {
    return this._streamLargeObjects.internalValue;
  }
}
export interface DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#column DatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The PostgreSQL data type. Full data types list can be found here:
  * https://www.postgresql.org/docs/current/datatype.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#data_type DatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#nullable DatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktn.IResolvable;
  /**
  * The ordinal position of the column in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#ordinal_position DatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#primary_key DatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToTerraform(struct?: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
    nullable: cdktn.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktn.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktn.booleanToTerraform(struct!.primaryKey),
  }
}


export function datastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToHclTerraform(struct?: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable): any {
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
    nullable: {
      value: cdktn.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ordinal_position: {
      value: cdktn.numberToHclTerraform(struct!.ordinalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key: {
      value: cdktn.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable | undefined {
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
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
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
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
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

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktn.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktn.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktn.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktn.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }
}

export class DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference {
    return new DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
  /**
  * postgresql_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#postgresql_columns DatastreamStream#postgresql_columns}
  */
  readonly postgresqlColumns?: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesToTerraform(struct?: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    postgresql_columns: cdktn.listMapper(datastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToTerraform, true)(struct!.postgresqlColumns),
  }
}


export function datastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesToHclTerraform(struct?: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable): any {
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
    postgresql_columns: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToHclTerraform, true)(struct!.postgresqlColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._postgresqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlColumns = this._postgresqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._postgresqlColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._postgresqlColumns.internalValue = value.postgresqlColumns;
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

  // postgresql_columns - computed: false, optional: true, required: false
  private _postgresqlColumns = new DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList(this, "postgresql_columns", false);
  public get postgresqlColumns() {
    return this._postgresqlColumns;
  }
  public putPostgresqlColumns(value: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktn.IResolvable) {
    this._postgresqlColumns.internalValue = value;
  }
  public resetPostgresqlColumns() {
    this._postgresqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlColumnsInput() {
    return this._postgresqlColumns.internalValue;
  }
}

export class DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesOutputReference {
    return new DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#schema DatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * postgresql_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#postgresql_tables DatastreamStream#postgresql_tables}
  */
  readonly postgresqlTables?: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasToTerraform(struct?: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    postgresql_tables: cdktn.listMapper(datastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesToTerraform, true)(struct!.postgresqlTables),
  }
}


export function datastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasToHclTerraform(struct?: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas | cdktn.IResolvable): any {
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
    postgresql_tables: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesToHclTerraform, true)(struct!.postgresqlTables),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._postgresqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlTables = this._postgresqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._postgresqlTables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._postgresqlTables.internalValue = value.postgresqlTables;
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

  // postgresql_tables - computed: false, optional: true, required: false
  private _postgresqlTables = new DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesList(this, "postgresql_tables", false);
  public get postgresqlTables() {
    return this._postgresqlTables;
  }
  public putPostgresqlTables(value: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables[] | cdktn.IResolvable) {
    this._postgresqlTables.internalValue = value;
  }
  public resetPostgresqlTables() {
    this._postgresqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlTablesInput() {
    return this._postgresqlTables.internalValue;
  }
}

export class DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasOutputReference {
    return new DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects {
  /**
  * postgresql_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#postgresql_schemas DatastreamStream#postgresql_schemas}
  */
  readonly postgresqlSchemas: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsToTerraform(struct?: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsOutputReference | DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    postgresql_schemas: cdktn.listMapper(datastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasToTerraform, true)(struct!.postgresqlSchemas),
  }
}


export function datastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsToHclTerraform(struct?: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsOutputReference | DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    postgresql_schemas: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasToHclTerraform, true)(struct!.postgresqlSchemas),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postgresqlSchemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlSchemas = this._postgresqlSchemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._postgresqlSchemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._postgresqlSchemas.internalValue = value.postgresqlSchemas;
    }
  }

  // postgresql_schemas - computed: false, optional: false, required: true
  private _postgresqlSchemas = new DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasList(this, "postgresql_schemas", false);
  public get postgresqlSchemas() {
    return this._postgresqlSchemas;
  }
  public putPostgresqlSchemas(value: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas[] | cdktn.IResolvable) {
    this._postgresqlSchemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlSchemasInput() {
    return this._postgresqlSchemas.internalValue;
  }
}
export interface DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#column DatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The PostgreSQL data type. Full data types list can be found here:
  * https://www.postgresql.org/docs/current/datatype.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#data_type DatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#nullable DatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktn.IResolvable;
  /**
  * The ordinal position of the column in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#ordinal_position DatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#primary_key DatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToTerraform(struct?: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
    nullable: cdktn.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktn.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktn.booleanToTerraform(struct!.primaryKey),
  }
}


export function datastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToHclTerraform(struct?: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable): any {
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
    nullable: {
      value: cdktn.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ordinal_position: {
      value: cdktn.numberToHclTerraform(struct!.ordinalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key: {
      value: cdktn.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable | undefined {
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
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
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
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
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

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktn.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktn.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktn.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktn.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }
}

export class DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference {
    return new DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
  /**
  * postgresql_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#postgresql_columns DatastreamStream#postgresql_columns}
  */
  readonly postgresqlColumns?: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesToTerraform(struct?: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    postgresql_columns: cdktn.listMapper(datastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToTerraform, true)(struct!.postgresqlColumns),
  }
}


export function datastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesToHclTerraform(struct?: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable): any {
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
    postgresql_columns: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToHclTerraform, true)(struct!.postgresqlColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._postgresqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlColumns = this._postgresqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._postgresqlColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._postgresqlColumns.internalValue = value.postgresqlColumns;
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

  // postgresql_columns - computed: false, optional: true, required: false
  private _postgresqlColumns = new DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList(this, "postgresql_columns", false);
  public get postgresqlColumns() {
    return this._postgresqlColumns;
  }
  public putPostgresqlColumns(value: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktn.IResolvable) {
    this._postgresqlColumns.internalValue = value;
  }
  public resetPostgresqlColumns() {
    this._postgresqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlColumnsInput() {
    return this._postgresqlColumns.internalValue;
  }
}

export class DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesOutputReference {
    return new DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#schema DatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * postgresql_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#postgresql_tables DatastreamStream#postgresql_tables}
  */
  readonly postgresqlTables?: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasToTerraform(struct?: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    postgresql_tables: cdktn.listMapper(datastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesToTerraform, true)(struct!.postgresqlTables),
  }
}


export function datastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasToHclTerraform(struct?: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas | cdktn.IResolvable): any {
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
    postgresql_tables: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesToHclTerraform, true)(struct!.postgresqlTables),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._postgresqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlTables = this._postgresqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._postgresqlTables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._postgresqlTables.internalValue = value.postgresqlTables;
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

  // postgresql_tables - computed: false, optional: true, required: false
  private _postgresqlTables = new DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesList(this, "postgresql_tables", false);
  public get postgresqlTables() {
    return this._postgresqlTables;
  }
  public putPostgresqlTables(value: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables[] | cdktn.IResolvable) {
    this._postgresqlTables.internalValue = value;
  }
  public resetPostgresqlTables() {
    this._postgresqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlTablesInput() {
    return this._postgresqlTables.internalValue;
  }
}

export class DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasOutputReference {
    return new DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects {
  /**
  * postgresql_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#postgresql_schemas DatastreamStream#postgresql_schemas}
  */
  readonly postgresqlSchemas: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsToTerraform(struct?: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsOutputReference | DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    postgresql_schemas: cdktn.listMapper(datastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasToTerraform, true)(struct!.postgresqlSchemas),
  }
}


export function datastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsToHclTerraform(struct?: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsOutputReference | DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    postgresql_schemas: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasToHclTerraform, true)(struct!.postgresqlSchemas),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postgresqlSchemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlSchemas = this._postgresqlSchemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._postgresqlSchemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._postgresqlSchemas.internalValue = value.postgresqlSchemas;
    }
  }

  // postgresql_schemas - computed: false, optional: false, required: true
  private _postgresqlSchemas = new DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasList(this, "postgresql_schemas", false);
  public get postgresqlSchemas() {
    return this._postgresqlSchemas;
  }
  public putPostgresqlSchemas(value: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas[] | cdktn.IResolvable) {
    this._postgresqlSchemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlSchemasInput() {
    return this._postgresqlSchemas.internalValue;
  }
}
export interface DatastreamStreamSourceConfigPostgresqlSourceConfig {
  /**
  * Maximum number of concurrent backfill tasks. The number should be non
  * negative. If not set (or set to 0), the system's default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#max_concurrent_backfill_tasks DatastreamStream#max_concurrent_backfill_tasks}
  */
  readonly maxConcurrentBackfillTasks?: number;
  /**
  * The name of the publication that includes the set of all tables
  * that are defined in the stream's include_objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#publication DatastreamStream#publication}
  */
  readonly publication: string;
  /**
  * The name of the logical replication slot that's configured with
  * the pgoutput plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#replication_slot DatastreamStream#replication_slot}
  */
  readonly replicationSlot: string;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#exclude_objects DatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#include_objects DatastreamStream#include_objects}
  */
  readonly includeObjects?: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects;
}

export function datastreamStreamSourceConfigPostgresqlSourceConfigToTerraform(struct?: DatastreamStreamSourceConfigPostgresqlSourceConfigOutputReference | DatastreamStreamSourceConfigPostgresqlSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_concurrent_backfill_tasks: cdktn.numberToTerraform(struct!.maxConcurrentBackfillTasks),
    publication: cdktn.stringToTerraform(struct!.publication),
    replication_slot: cdktn.stringToTerraform(struct!.replicationSlot),
    exclude_objects: datastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    include_objects: datastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
  }
}


export function datastreamStreamSourceConfigPostgresqlSourceConfigToHclTerraform(struct?: DatastreamStreamSourceConfigPostgresqlSourceConfigOutputReference | DatastreamStreamSourceConfigPostgresqlSourceConfig): any {
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
    publication: {
      value: cdktn.stringToHclTerraform(struct!.publication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_slot: {
      value: cdktn.stringToHclTerraform(struct!.replicationSlot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_objects: {
      value: datastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsToHclTerraform(struct!.excludeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsList",
    },
    include_objects: {
      value: datastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsToHclTerraform(struct!.includeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigPostgresqlSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigPostgresqlSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentBackfillTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentBackfillTasks = this._maxConcurrentBackfillTasks;
    }
    if (this._publication !== undefined) {
      hasAnyValues = true;
      internalValueResult.publication = this._publication;
    }
    if (this._replicationSlot !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationSlot = this._replicationSlot;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigPostgresqlSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentBackfillTasks = undefined;
      this._publication = undefined;
      this._replicationSlot = undefined;
      this._excludeObjects.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentBackfillTasks = value.maxConcurrentBackfillTasks;
      this._publication = value.publication;
      this._replicationSlot = value.replicationSlot;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._includeObjects.internalValue = value.includeObjects;
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

  // publication - computed: false, optional: false, required: true
  private _publication?: string; 
  public get publication() {
    return this.getStringAttribute('publication');
  }
  public set publication(value: string) {
    this._publication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicationInput() {
    return this._publication;
  }

  // replication_slot - computed: false, optional: false, required: true
  private _replicationSlot?: string; 
  public get replicationSlot() {
    return this.getStringAttribute('replication_slot');
  }
  public set replicationSlot(value: string) {
    this._replicationSlot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSlotInput() {
    return this._replicationSlot;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: DatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects) {
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
  private _includeObjects = new DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: DatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }
}
export interface DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields {
  /**
  * Field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#name DatastreamStream#name}
  */
  readonly name?: string;
}

export function datastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsToTerraform(struct?: DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function datastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsToHclTerraform(struct?: DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsOutputReference {
    return new DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects {
  /**
  * Name of object in Salesforce Org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#object_name DatastreamStream#object_name}
  */
  readonly objectName?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#fields DatastreamStream#fields}
  */
  readonly fields?: DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsToTerraform(struct?: DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object_name: cdktn.stringToTerraform(struct!.objectName),
    fields: cdktn.listMapper(datastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsToTerraform, true)(struct!.fields),
  }
}


export function datastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsToHclTerraform(struct?: DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object_name: {
      value: cdktn.stringToHclTerraform(struct!.objectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectName = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectName = value.objectName;
      this._fields.internalValue = value.fields;
    }
  }

  // object_name - computed: false, optional: true, required: false
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  public resetObjectName() {
    this._objectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsOutputReference {
    return new DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects {
  /**
  * objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#objects DatastreamStream#objects}
  */
  readonly objects: DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsToTerraform(struct?: DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsOutputReference | DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    objects: cdktn.listMapper(datastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsToTerraform, true)(struct!.objects),
  }
}


export function datastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsToHclTerraform(struct?: DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsOutputReference | DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    objects: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsToHclTerraform, true)(struct!.objects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objects.internalValue = value.objects;
    }
  }

  // objects - computed: false, optional: false, required: true
  private _objects = new DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsList(this, "objects", false);
  public get objects() {
    return this._objects;
  }
  public putObjects(value: DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects[] | cdktn.IResolvable) {
    this._objects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }
}
export interface DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields {
  /**
  * Field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#name DatastreamStream#name}
  */
  readonly name?: string;
}

export function datastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsToTerraform(struct?: DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function datastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsToHclTerraform(struct?: DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsOutputReference {
    return new DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects {
  /**
  * Name of object in Salesforce Org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#object_name DatastreamStream#object_name}
  */
  readonly objectName?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#fields DatastreamStream#fields}
  */
  readonly fields?: DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsToTerraform(struct?: DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object_name: cdktn.stringToTerraform(struct!.objectName),
    fields: cdktn.listMapper(datastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsToTerraform, true)(struct!.fields),
  }
}


export function datastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsToHclTerraform(struct?: DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object_name: {
      value: cdktn.stringToHclTerraform(struct!.objectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectName = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectName = value.objectName;
      this._fields.internalValue = value.fields;
    }
  }

  // object_name - computed: false, optional: true, required: false
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  public resetObjectName() {
    this._objectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsOutputReference {
    return new DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects {
  /**
  * objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#objects DatastreamStream#objects}
  */
  readonly objects: DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsToTerraform(struct?: DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsOutputReference | DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    objects: cdktn.listMapper(datastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsToTerraform, true)(struct!.objects),
  }
}


export function datastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsToHclTerraform(struct?: DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsOutputReference | DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    objects: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsToHclTerraform, true)(struct!.objects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objects.internalValue = value.objects;
    }
  }

  // objects - computed: false, optional: false, required: true
  private _objects = new DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsList(this, "objects", false);
  public get objects() {
    return this._objects;
  }
  public putObjects(value: DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects[] | cdktn.IResolvable) {
    this._objects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }
}
export interface DatastreamStreamSourceConfigSalesforceSourceConfig {
  /**
  * Salesforce objects polling interval. The interval at which new changes will be polled for each object. The duration must be between 5 minutes and 24 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#polling_interval DatastreamStream#polling_interval}
  */
  readonly pollingInterval: string;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#exclude_objects DatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#include_objects DatastreamStream#include_objects}
  */
  readonly includeObjects?: DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects;
}

export function datastreamStreamSourceConfigSalesforceSourceConfigToTerraform(struct?: DatastreamStreamSourceConfigSalesforceSourceConfigOutputReference | DatastreamStreamSourceConfigSalesforceSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    polling_interval: cdktn.stringToTerraform(struct!.pollingInterval),
    exclude_objects: datastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    include_objects: datastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
  }
}


export function datastreamStreamSourceConfigSalesforceSourceConfigToHclTerraform(struct?: DatastreamStreamSourceConfigSalesforceSourceConfigOutputReference | DatastreamStreamSourceConfigSalesforceSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    polling_interval: {
      value: cdktn.stringToHclTerraform(struct!.pollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_objects: {
      value: datastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsToHclTerraform(struct!.excludeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsList",
    },
    include_objects: {
      value: datastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsToHclTerraform(struct!.includeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSalesforceSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigSalesforceSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingInterval = this._pollingInterval;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSalesforceSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pollingInterval = undefined;
      this._excludeObjects.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pollingInterval = value.pollingInterval;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._includeObjects.internalValue = value.includeObjects;
    }
  }

  // polling_interval - computed: false, optional: false, required: true
  private _pollingInterval?: string; 
  public get pollingInterval() {
    return this.getStringAttribute('polling_interval');
  }
  public set pollingInterval(value: string) {
    this._pollingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: DatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects) {
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
  private _includeObjects = new DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: DatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }
}
export interface DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#column DatastreamStream#column}
  */
  readonly column?: string;
}

export function datastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsToTerraform(struct?: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
  }
}


export function datastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsToHclTerraform(struct?: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumns | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
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

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // is_primary_key - computed: true, optional: false, required: false
  public get isPrimaryKey() {
    return this.getBooleanAttribute('is_primary_key');
  }

  // ordinal_position - computed: true, optional: false, required: false
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
}

export class DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumns[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsOutputReference {
    return new DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#columns DatastreamStream#columns}
  */
  readonly columns?: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumns[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesToTerraform(struct?: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    columns: cdktn.listMapper(datastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsToTerraform, true)(struct!.columns),
  }
}


export function datastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesToHclTerraform(struct?: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTables | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTables | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTables | cdktn.IResolvable | undefined) {
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
  private _columns = new DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumns[] | cdktn.IResolvable) {
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

export class DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTables[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesOutputReference {
    return new DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#schema DatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#tables DatastreamStream#tables}
  */
  readonly tables?: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTables[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasToTerraform(struct?: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    tables: cdktn.listMapper(datastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesToTerraform, true)(struct!.tables),
  }
}


export function datastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasToHclTerraform(struct?: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemas | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemas | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemas | cdktn.IResolvable | undefined) {
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
  private _tables = new DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTables[] | cdktn.IResolvable) {
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

export class DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemas[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasOutputReference {
    return new DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjects {
  /**
  * schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#schemas DatastreamStream#schemas}
  */
  readonly schemas: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemas[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsToTerraform(struct?: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsOutputReference | DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schemas: cdktn.listMapper(datastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasToTerraform, true)(struct!.schemas),
  }
}


export function datastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsToHclTerraform(struct?: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsOutputReference | DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schemas: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasToHclTerraform, true)(struct!.schemas),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjects | undefined) {
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
  private _schemas = new DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }
  public putSchemas(value: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemas[] | cdktn.IResolvable) {
    this._schemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas.internalValue;
  }
}
export interface DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#column DatastreamStream#column}
  */
  readonly column?: string;
}

export function datastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsToTerraform(struct?: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
  }
}


export function datastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsToHclTerraform(struct?: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumns | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
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

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // is_primary_key - computed: true, optional: false, required: false
  public get isPrimaryKey() {
    return this.getBooleanAttribute('is_primary_key');
  }

  // ordinal_position - computed: true, optional: false, required: false
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
}

export class DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumns[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsOutputReference {
    return new DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#columns DatastreamStream#columns}
  */
  readonly columns?: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumns[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesToTerraform(struct?: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    columns: cdktn.listMapper(datastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsToTerraform, true)(struct!.columns),
  }
}


export function datastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesToHclTerraform(struct?: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTables | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTables | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTables | cdktn.IResolvable | undefined) {
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
  private _columns = new DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumns[] | cdktn.IResolvable) {
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

export class DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTables[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesOutputReference {
    return new DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#schema DatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#tables DatastreamStream#tables}
  */
  readonly tables?: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTables[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasToTerraform(struct?: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    tables: cdktn.listMapper(datastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesToTerraform, true)(struct!.tables),
  }
}


export function datastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasToHclTerraform(struct?: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemas | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemas | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemas | cdktn.IResolvable | undefined) {
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
  private _tables = new DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTables[] | cdktn.IResolvable) {
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

export class DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemas[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasOutputReference {
    return new DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjects {
  /**
  * schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#schemas DatastreamStream#schemas}
  */
  readonly schemas: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemas[] | cdktn.IResolvable;
}

export function datastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsToTerraform(struct?: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsOutputReference | DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schemas: cdktn.listMapper(datastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasToTerraform, true)(struct!.schemas),
  }
}


export function datastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsToHclTerraform(struct?: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsOutputReference | DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schemas: {
      value: cdktn.listMapperHcl(datastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasToHclTerraform, true)(struct!.schemas),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjects | undefined) {
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
  private _schemas = new DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }
  public putSchemas(value: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemas[] | cdktn.IResolvable) {
    this._schemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas.internalValue;
  }
}
export interface DatastreamStreamSourceConfigSpannerSourceConfig {
  /**
  * Whether to use DataBoost for backfill queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#backfill_data_boost_enabled DatastreamStream#backfill_data_boost_enabled}
  */
  readonly backfillDataBoostEnabled?: boolean | cdktn.IResolvable;
  /**
  * The Spanner change stream name to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#change_stream_name DatastreamStream#change_stream_name}
  */
  readonly changeStreamName?: string;
  /**
  * The FGAC role to use for Spanner queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#fgac_role DatastreamStream#fgac_role}
  */
  readonly fgacRole?: string;
  /**
  * Max concurrent backfill tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#max_concurrent_backfill_tasks DatastreamStream#max_concurrent_backfill_tasks}
  */
  readonly maxConcurrentBackfillTasks?: number;
  /**
  * Max concurrent CDC tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#max_concurrent_cdc_tasks DatastreamStream#max_concurrent_cdc_tasks}
  */
  readonly maxConcurrentCdcTasks?: number;
  /**
  * The RPC priority to use for Spanner queries. Possible values: ["LOW", "MEDIUM", "HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#spanner_rpc_priority DatastreamStream#spanner_rpc_priority}
  */
  readonly spannerRpcPriority?: string;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#exclude_objects DatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjects;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#include_objects DatastreamStream#include_objects}
  */
  readonly includeObjects?: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjects;
}

export function datastreamStreamSourceConfigSpannerSourceConfigToTerraform(struct?: DatastreamStreamSourceConfigSpannerSourceConfigOutputReference | DatastreamStreamSourceConfigSpannerSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    backfill_data_boost_enabled: cdktn.booleanToTerraform(struct!.backfillDataBoostEnabled),
    change_stream_name: cdktn.stringToTerraform(struct!.changeStreamName),
    fgac_role: cdktn.stringToTerraform(struct!.fgacRole),
    max_concurrent_backfill_tasks: cdktn.numberToTerraform(struct!.maxConcurrentBackfillTasks),
    max_concurrent_cdc_tasks: cdktn.numberToTerraform(struct!.maxConcurrentCdcTasks),
    spanner_rpc_priority: cdktn.stringToTerraform(struct!.spannerRpcPriority),
    exclude_objects: datastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    include_objects: datastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
  }
}


export function datastreamStreamSourceConfigSpannerSourceConfigToHclTerraform(struct?: DatastreamStreamSourceConfigSpannerSourceConfigOutputReference | DatastreamStreamSourceConfigSpannerSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    backfill_data_boost_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.backfillDataBoostEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    change_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.changeStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fgac_role: {
      value: cdktn.stringToHclTerraform(struct!.fgacRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    spanner_rpc_priority: {
      value: cdktn.stringToHclTerraform(struct!.spannerRpcPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_objects: {
      value: datastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsToHclTerraform(struct!.excludeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsList",
    },
    include_objects: {
      value: datastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsToHclTerraform(struct!.includeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamStreamSourceConfigSpannerSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigSpannerSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backfillDataBoostEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.backfillDataBoostEnabled = this._backfillDataBoostEnabled;
    }
    if (this._changeStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeStreamName = this._changeStreamName;
    }
    if (this._fgacRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.fgacRole = this._fgacRole;
    }
    if (this._maxConcurrentBackfillTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentBackfillTasks = this._maxConcurrentBackfillTasks;
    }
    if (this._maxConcurrentCdcTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentCdcTasks = this._maxConcurrentCdcTasks;
    }
    if (this._spannerRpcPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.spannerRpcPriority = this._spannerRpcPriority;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSpannerSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backfillDataBoostEnabled = undefined;
      this._changeStreamName = undefined;
      this._fgacRole = undefined;
      this._maxConcurrentBackfillTasks = undefined;
      this._maxConcurrentCdcTasks = undefined;
      this._spannerRpcPriority = undefined;
      this._excludeObjects.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backfillDataBoostEnabled = value.backfillDataBoostEnabled;
      this._changeStreamName = value.changeStreamName;
      this._fgacRole = value.fgacRole;
      this._maxConcurrentBackfillTasks = value.maxConcurrentBackfillTasks;
      this._maxConcurrentCdcTasks = value.maxConcurrentCdcTasks;
      this._spannerRpcPriority = value.spannerRpcPriority;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._includeObjects.internalValue = value.includeObjects;
    }
  }

  // backfill_data_boost_enabled - computed: false, optional: true, required: false
  private _backfillDataBoostEnabled?: boolean | cdktn.IResolvable; 
  public get backfillDataBoostEnabled() {
    return this.getBooleanAttribute('backfill_data_boost_enabled');
  }
  public set backfillDataBoostEnabled(value: boolean | cdktn.IResolvable) {
    this._backfillDataBoostEnabled = value;
  }
  public resetBackfillDataBoostEnabled() {
    this._backfillDataBoostEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillDataBoostEnabledInput() {
    return this._backfillDataBoostEnabled;
  }

  // change_stream_name - computed: false, optional: true, required: false
  private _changeStreamName?: string; 
  public get changeStreamName() {
    return this.getStringAttribute('change_stream_name');
  }
  public set changeStreamName(value: string) {
    this._changeStreamName = value;
  }
  public resetChangeStreamName() {
    this._changeStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeStreamNameInput() {
    return this._changeStreamName;
  }

  // fgac_role - computed: false, optional: true, required: false
  private _fgacRole?: string; 
  public get fgacRole() {
    return this.getStringAttribute('fgac_role');
  }
  public set fgacRole(value: string) {
    this._fgacRole = value;
  }
  public resetFgacRole() {
    this._fgacRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgacRoleInput() {
    return this._fgacRole;
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

  // spanner_rpc_priority - computed: false, optional: true, required: false
  private _spannerRpcPriority?: string; 
  public get spannerRpcPriority() {
    return this.getStringAttribute('spanner_rpc_priority');
  }
  public set spannerRpcPriority(value: string) {
    this._spannerRpcPriority = value;
  }
  public resetSpannerRpcPriority() {
    this._spannerRpcPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spannerRpcPriorityInput() {
    return this._spannerRpcPriority;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: DatastreamStreamSourceConfigSpannerSourceConfigExcludeObjects) {
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
  private _includeObjects = new DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: DatastreamStreamSourceConfigSpannerSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }
}
export interface DatastreamStreamSourceConfigSqlServerSourceConfigChangeTables {
}

export function datastreamStreamSourceConfigSqlServerSourceConfigChangeTablesToTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesOutputReference | DatastreamStreamSourceConfigSqlServerSourceConfigChangeTables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function datastreamStreamSourceConfigSqlServerSourceConfigChangeTablesToHclTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesOutputReference | DatastreamStreamSourceConfigSqlServerSourceConfigChangeTables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigSqlServerSourceConfigChangeTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigSqlServerSourceConfigChangeTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#column DatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The SQL Server data type. Full data types list can be found here:
  * https://learn.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/datastream_stream#data_type DatastreamStream#data_type}
  */
  readonly dataType?: string;
}

export function datastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsToTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
  }
}


export function datastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsToHclTerraform(struct?: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns | cdktn.IResolvable): any {
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

export class DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns | cdktn.IResolvable | undefined) {
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

export class DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsList extends cdktn.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns[] | cdktn.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsOutputReference {
    return new DatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
