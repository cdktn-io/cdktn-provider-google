/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ChronicleDataTableConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID to use for the data table. This is also the display name for
  * the data table. It must satisfy the following requirements:
  * - Starts with letter.
  * - Contains only letters, numbers and underscore.
  * - Must be unique and has length < 256.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#data_table_id ChronicleDataTable#data_table_id}
  */
  readonly dataTableId: string;
  /**
  * This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/chronicle_data_table.html.markdown for specifics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#deletion_policy ChronicleDataTable#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A user-provided description of the data table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#description ChronicleDataTable#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#id ChronicleDataTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#instance ChronicleDataTable#instance}
  */
  readonly instance: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#location ChronicleDataTable#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#project ChronicleDataTable#project}
  */
  readonly project?: string;
  /**
  * User-provided TTL of the data table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#row_time_to_live ChronicleDataTable#row_time_to_live}
  */
  readonly rowTimeToLive?: string;
  /**
  * column_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#column_info ChronicleDataTable#column_info}
  */
  readonly columnInfo?: ChronicleDataTableColumnInfo[] | cdktn.IResolvable;
  /**
  * scope_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#scope_info ChronicleDataTable#scope_info}
  */
  readonly scopeInfo?: ChronicleDataTableScopeInfo;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#timeouts ChronicleDataTable#timeouts}
  */
  readonly timeouts?: ChronicleDataTableTimeouts;
}
export interface ChronicleDataTableColumnInfo {
  /**
  * Column Index. 0,1,2...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#column_index ChronicleDataTable#column_index}
  */
  readonly columnIndex: number;
  /**
  * Column type can be STRING, CIDR (Ex- 10.1.1.0/24), REGEX
  * Possible values:
  * STRING
  * REGEX
  * CIDR
  * NUMBER Possible values: ["STRING", "REGEX", "CIDR", "NUMBER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#column_type ChronicleDataTable#column_type}
  */
  readonly columnType?: string;
  /**
  * Whether to include this column in the calculation of the row ID.
  * If no columns have key_column = true, all columns will be included in the
  * calculation of the row ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#key_column ChronicleDataTable#key_column}
  */
  readonly keyColumn?: boolean | cdktn.IResolvable;
  /**
  * Entity proto field path that the column is mapped to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#mapped_column_path ChronicleDataTable#mapped_column_path}
  */
  readonly mappedColumnPath?: string;
  /**
  * Original column name of the Data Table (present in the CSV header in case
  * of creation of data tables using file uploads). It must satisfy the
  * following requirements:
  * - Starts with letter.
  * - Contains only letters, numbers and underscore.
  * - Must be unique and has length < 256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#original_column ChronicleDataTable#original_column}
  */
  readonly originalColumn: string;
  /**
  * Whether the column is a repeated values column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#repeated_values ChronicleDataTable#repeated_values}
  */
  readonly repeatedValues?: boolean | cdktn.IResolvable;
}

export function chronicleDataTableColumnInfoToTerraform(struct?: ChronicleDataTableColumnInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_index: cdktn.numberToTerraform(struct!.columnIndex),
    column_type: cdktn.stringToTerraform(struct!.columnType),
    key_column: cdktn.booleanToTerraform(struct!.keyColumn),
    mapped_column_path: cdktn.stringToTerraform(struct!.mappedColumnPath),
    original_column: cdktn.stringToTerraform(struct!.originalColumn),
    repeated_values: cdktn.booleanToTerraform(struct!.repeatedValues),
  }
}


export function chronicleDataTableColumnInfoToHclTerraform(struct?: ChronicleDataTableColumnInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_index: {
      value: cdktn.numberToHclTerraform(struct!.columnIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    column_type: {
      value: cdktn.stringToHclTerraform(struct!.columnType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_column: {
      value: cdktn.booleanToHclTerraform(struct!.keyColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mapped_column_path: {
      value: cdktn.stringToHclTerraform(struct!.mappedColumnPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    original_column: {
      value: cdktn.stringToHclTerraform(struct!.originalColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeated_values: {
      value: cdktn.booleanToHclTerraform(struct!.repeatedValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDataTableColumnInfoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleDataTableColumnInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnIndex = this._columnIndex;
    }
    if (this._columnType !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnType = this._columnType;
    }
    if (this._keyColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyColumn = this._keyColumn;
    }
    if (this._mappedColumnPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedColumnPath = this._mappedColumnPath;
    }
    if (this._originalColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalColumn = this._originalColumn;
    }
    if (this._repeatedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatedValues = this._repeatedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDataTableColumnInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnIndex = undefined;
      this._columnType = undefined;
      this._keyColumn = undefined;
      this._mappedColumnPath = undefined;
      this._originalColumn = undefined;
      this._repeatedValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnIndex = value.columnIndex;
      this._columnType = value.columnType;
      this._keyColumn = value.keyColumn;
      this._mappedColumnPath = value.mappedColumnPath;
      this._originalColumn = value.originalColumn;
      this._repeatedValues = value.repeatedValues;
    }
  }

  // column_index - computed: false, optional: false, required: true
  private _columnIndex?: number; 
  public get columnIndex() {
    return this.getNumberAttribute('column_index');
  }
  public set columnIndex(value: number) {
    this._columnIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnIndexInput() {
    return this._columnIndex;
  }

  // column_type - computed: false, optional: true, required: false
  private _columnType?: string; 
  public get columnType() {
    return this.getStringAttribute('column_type');
  }
  public set columnType(value: string) {
    this._columnType = value;
  }
  public resetColumnType() {
    this._columnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnTypeInput() {
    return this._columnType;
  }

  // key_column - computed: false, optional: true, required: false
  private _keyColumn?: boolean | cdktn.IResolvable; 
  public get keyColumn() {
    return this.getBooleanAttribute('key_column');
  }
  public set keyColumn(value: boolean | cdktn.IResolvable) {
    this._keyColumn = value;
  }
  public resetKeyColumn() {
    this._keyColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyColumnInput() {
    return this._keyColumn;
  }

  // mapped_column_path - computed: false, optional: true, required: false
  private _mappedColumnPath?: string; 
  public get mappedColumnPath() {
    return this.getStringAttribute('mapped_column_path');
  }
  public set mappedColumnPath(value: string) {
    this._mappedColumnPath = value;
  }
  public resetMappedColumnPath() {
    this._mappedColumnPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedColumnPathInput() {
    return this._mappedColumnPath;
  }

  // original_column - computed: false, optional: false, required: true
  private _originalColumn?: string; 
  public get originalColumn() {
    return this.getStringAttribute('original_column');
  }
  public set originalColumn(value: string) {
    this._originalColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originalColumnInput() {
    return this._originalColumn;
  }

  // repeated_values - computed: false, optional: true, required: false
  private _repeatedValues?: boolean | cdktn.IResolvable; 
  public get repeatedValues() {
    return this.getBooleanAttribute('repeated_values');
  }
  public set repeatedValues(value: boolean | cdktn.IResolvable) {
    this._repeatedValues = value;
  }
  public resetRepeatedValues() {
    this._repeatedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatedValuesInput() {
    return this._repeatedValues;
  }
}

export class ChronicleDataTableColumnInfoList extends cdktn.ComplexList {
  public internalValue? : ChronicleDataTableColumnInfo[] | cdktn.IResolvable

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
  public get(index: number): ChronicleDataTableColumnInfoOutputReference {
    return new ChronicleDataTableColumnInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleDataTableScopeInfo {
  /**
  * Contains the list of scope names of the data table. If the list is empty,
  * the data table is treated as unscoped. The scope names should be
  * full resource names and should be of the format:
  * "projects/{project}/locations/{location}/instances/{instance}/dataAccessScopes/{scope_name}"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#data_access_scopes ChronicleDataTable#data_access_scopes}
  */
  readonly dataAccessScopes: string[];
}

export function chronicleDataTableScopeInfoToTerraform(struct?: ChronicleDataTableScopeInfoOutputReference | ChronicleDataTableScopeInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_access_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dataAccessScopes),
  }
}


export function chronicleDataTableScopeInfoToHclTerraform(struct?: ChronicleDataTableScopeInfoOutputReference | ChronicleDataTableScopeInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_access_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dataAccessScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleDataTableScopeInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleDataTableScopeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataAccessScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataAccessScopes = this._dataAccessScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleDataTableScopeInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataAccessScopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataAccessScopes = value.dataAccessScopes;
    }
  }

  // data_access_scopes - computed: false, optional: false, required: true
  private _dataAccessScopes?: string[]; 
  public get dataAccessScopes() {
    return this.getListAttribute('data_access_scopes');
  }
  public set dataAccessScopes(value: string[]) {
    this._dataAccessScopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAccessScopesInput() {
    return this._dataAccessScopes;
  }
}
export interface ChronicleDataTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#create ChronicleDataTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#delete ChronicleDataTable#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#update ChronicleDataTable#update}
  */
  readonly update?: string;
}

export function chronicleDataTableTimeoutsToTerraform(struct?: ChronicleDataTableTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function chronicleDataTableTimeoutsToHclTerraform(struct?: ChronicleDataTableTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ChronicleDataTableTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChronicleDataTableTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleDataTableTimeouts | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table google_chronicle_data_table}
*/
export class ChronicleDataTable extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_chronicle_data_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ChronicleDataTable resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChronicleDataTable to import
  * @param importFromId The id of the existing ChronicleDataTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChronicleDataTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_chronicle_data_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/chronicle_data_table google_chronicle_data_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChronicleDataTableConfig
  */
  public constructor(scope: Construct, id: string, config: ChronicleDataTableConfig) {
    super(scope, id, {
      terraformResourceType: 'google_chronicle_data_table',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.33.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataTableId = config.dataTableId;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._instance = config.instance;
    this._location = config.location;
    this._project = config.project;
    this._rowTimeToLive = config.rowTimeToLive;
    this._columnInfo.internalValue = config.columnInfo;
    this._scopeInfo.internalValue = config.scopeInfo;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approximate_row_count - computed: true, optional: false, required: false
  public get approximateRowCount() {
    return this.getNumberAttribute('approximate_row_count');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_table_id - computed: false, optional: false, required: true
  private _dataTableId?: string; 
  public get dataTableId() {
    return this.getStringAttribute('data_table_id');
  }
  public set dataTableId(value: string) {
    this._dataTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTableIdInput() {
    return this._dataTableId;
  }

  // data_table_uuid - computed: true, optional: false, required: false
  public get dataTableUuid() {
    return this.getStringAttribute('data_table_uuid');
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // row_time_to_live - computed: false, optional: true, required: false
  private _rowTimeToLive?: string; 
  public get rowTimeToLive() {
    return this.getStringAttribute('row_time_to_live');
  }
  public set rowTimeToLive(value: string) {
    this._rowTimeToLive = value;
  }
  public resetRowTimeToLive() {
    this._rowTimeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowTimeToLiveInput() {
    return this._rowTimeToLive;
  }

  // row_time_to_live_update_time - computed: true, optional: false, required: false
  public get rowTimeToLiveUpdateTime() {
    return this.getStringAttribute('row_time_to_live_update_time');
  }

  // rule_associations_count - computed: true, optional: false, required: false
  public get ruleAssociationsCount() {
    return this.getNumberAttribute('rule_associations_count');
  }

  // rules - computed: true, optional: false, required: false
  public get rules() {
    return this.getListAttribute('rules');
  }

  // update_source - computed: true, optional: false, required: false
  public get updateSource() {
    return this.getStringAttribute('update_source');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // column_info - computed: false, optional: true, required: false
  private _columnInfo = new ChronicleDataTableColumnInfoList(this, "column_info", false);
  public get columnInfo() {
    return this._columnInfo;
  }
  public putColumnInfo(value: ChronicleDataTableColumnInfo[] | cdktn.IResolvable) {
    this._columnInfo.internalValue = value;
  }
  public resetColumnInfo() {
    this._columnInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInfoInput() {
    return this._columnInfo.internalValue;
  }

  // scope_info - computed: false, optional: true, required: false
  private _scopeInfo = new ChronicleDataTableScopeInfoOutputReference(this, "scope_info");
  public get scopeInfo() {
    return this._scopeInfo;
  }
  public putScopeInfo(value: ChronicleDataTableScopeInfo) {
    this._scopeInfo.internalValue = value;
  }
  public resetScopeInfo() {
    this._scopeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInfoInput() {
    return this._scopeInfo.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ChronicleDataTableTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ChronicleDataTableTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_table_id: cdktn.stringToTerraform(this._dataTableId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      instance: cdktn.stringToTerraform(this._instance),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      row_time_to_live: cdktn.stringToTerraform(this._rowTimeToLive),
      column_info: cdktn.listMapper(chronicleDataTableColumnInfoToTerraform, true)(this._columnInfo.internalValue),
      scope_info: chronicleDataTableScopeInfoToTerraform(this._scopeInfo.internalValue),
      timeouts: chronicleDataTableTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_table_id: {
        value: cdktn.stringToHclTerraform(this._dataTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance: {
        value: cdktn.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      row_time_to_live: {
        value: cdktn.stringToHclTerraform(this._rowTimeToLive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      column_info: {
        value: cdktn.listMapperHcl(chronicleDataTableColumnInfoToHclTerraform, true)(this._columnInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleDataTableColumnInfoList",
      },
      scope_info: {
        value: chronicleDataTableScopeInfoToHclTerraform(this._scopeInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleDataTableScopeInfoList",
      },
      timeouts: {
        value: chronicleDataTableTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ChronicleDataTableTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
