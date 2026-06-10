/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BigtableTableConfig extends cdktn.TerraformMetaArguments {
  /**
  * Duration to retain change stream data for the table. Set to 0 to disable. Must be between 1 and 7 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#change_stream_retention BigtableTable#change_stream_retention}
  */
  readonly changeStreamRetention?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#deletion_policy BigtableTable#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#deletion_protection BigtableTable#deletion_protection}
  */
  readonly deletionProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#id BigtableTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Bigtable instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#instance_name BigtableTable#instance_name}
  */
  readonly instanceName: string;
  /**
  * The name of the table. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#name BigtableTable#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#project BigtableTable#project}
  */
  readonly project?: string;
  /**
  * Defines the row key schema of a table. To create or update a table with a row key schema, specify this argument.
  * 					Note that in-place update is not supported, and any in-place modification to the schema will lead to failure.
  * 				    To update a schema, please clear it (by omitting the field), and update the resource again with a new schema.\n
  * 					
  * 					The schema must be a valid JSON encoded string representing a Type's struct protobuf message. Note that for bytes sequence (like delimited_bytes.delimiter)
  * 					the delimiter must be base64 encoded. For example, if you want to set a delimiter to a single byte character "#", it should be set to "Iw==", which is the base64 encoding of the byte sequence "#".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#row_key_schema BigtableTable#row_key_schema}
  */
  readonly rowKeySchema?: string;
  /**
  * A list of predefined keys to split the table on. !> Warning: Modifying the split_keys of an existing table will cause Terraform to delete/recreate the entire google_bigtable_table resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#split_keys BigtableTable#split_keys}
  */
  readonly splitKeys?: string[];
  /**
  * automated_backup_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#automated_backup_policy BigtableTable#automated_backup_policy}
  */
  readonly automatedBackupPolicy?: BigtableTableAutomatedBackupPolicy;
  /**
  * column_family block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#column_family BigtableTable#column_family}
  */
  readonly columnFamily?: BigtableTableColumnFamily[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#timeouts BigtableTable#timeouts}
  */
  readonly timeouts?: BigtableTableTimeouts;
}
export interface BigtableTableAutomatedBackupPolicy {
  /**
  * How frequently automated backups should occur.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#frequency BigtableTable#frequency}
  */
  readonly frequency?: string;
  /**
  * A list of Cloud Bigtable zones where automated backups are allowed to be created. If empty, automated backups will be created in all zones of the instance. Locations are in the format projects/{project}/locations/{zone}. This field can only be set for tables in Enterprise Plus instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#locations BigtableTable#locations}
  */
  readonly locations?: string[];
  /**
  * How long the automated backups should be retained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#retention_period BigtableTable#retention_period}
  */
  readonly retentionPeriod?: string;
}

export function bigtableTableAutomatedBackupPolicyToTerraform(struct?: BigtableTableAutomatedBackupPolicyOutputReference | BigtableTableAutomatedBackupPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    frequency: cdktn.stringToTerraform(struct!.frequency),
    locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.locations),
    retention_period: cdktn.stringToTerraform(struct!.retentionPeriod),
  }
}


export function bigtableTableAutomatedBackupPolicyToHclTerraform(struct?: BigtableTableAutomatedBackupPolicyOutputReference | BigtableTableAutomatedBackupPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    frequency: {
      value: cdktn.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.locations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    retention_period: {
      value: cdktn.stringToHclTerraform(struct!.retentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigtableTableAutomatedBackupPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigtableTableAutomatedBackupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    if (this._retentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigtableTableAutomatedBackupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
      this._locations = undefined;
      this._retentionPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
      this._locations = value.locations;
      this._retentionPeriod = value.retentionPeriod;
    }
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // locations - computed: true, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }

  // retention_period - computed: true, optional: true, required: false
  private _retentionPeriod?: string; 
  public get retentionPeriod() {
    return this.getStringAttribute('retention_period');
  }
  public set retentionPeriod(value: string) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }
}
export interface BigtableTableColumnFamily {
  /**
  * The name of the column family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#family BigtableTable#family}
  */
  readonly family: string;
  /**
  * The type of the column family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#type BigtableTable#type}
  */
  readonly type?: string;
}

export function bigtableTableColumnFamilyToTerraform(struct?: BigtableTableColumnFamily | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    family: cdktn.stringToTerraform(struct!.family),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bigtableTableColumnFamilyToHclTerraform(struct?: BigtableTableColumnFamily | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    family: {
      value: cdktn.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigtableTableColumnFamilyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BigtableTableColumnFamily | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigtableTableColumnFamily | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._family = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._family = value.family;
      this._type = value.type;
    }
  }

  // family - computed: false, optional: false, required: true
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class BigtableTableColumnFamilyList extends cdktn.ComplexList {
  public internalValue? : BigtableTableColumnFamily[] | cdktn.IResolvable

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
  public get(index: number): BigtableTableColumnFamilyOutputReference {
    return new BigtableTableColumnFamilyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigtableTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#create BigtableTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#update BigtableTable#update}
  */
  readonly update?: string;
}

export function bigtableTableTimeoutsToTerraform(struct?: BigtableTableTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function bigtableTableTimeoutsToHclTerraform(struct?: BigtableTableTimeouts | cdktn.IResolvable): any {
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

export class BigtableTableTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BigtableTableTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigtableTableTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table google_bigtable_table}
*/
export class BigtableTable extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigtable_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BigtableTable resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigtableTable to import
  * @param importFromId The id of the existing BigtableTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigtableTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_bigtable_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_table google_bigtable_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigtableTableConfig
  */
  public constructor(scope: Construct, id: string, config: BigtableTableConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigtable_table',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.36.0',
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
    this._changeStreamRetention = config.changeStreamRetention;
    this._deletionPolicy = config.deletionPolicy;
    this._deletionProtection = config.deletionProtection;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._name = config.name;
    this._project = config.project;
    this._rowKeySchema = config.rowKeySchema;
    this._splitKeys = config.splitKeys;
    this._automatedBackupPolicy.internalValue = config.automatedBackupPolicy;
    this._columnFamily.internalValue = config.columnFamily;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_stream_retention - computed: true, optional: true, required: false
  private _changeStreamRetention?: string; 
  public get changeStreamRetention() {
    return this.getStringAttribute('change_stream_retention');
  }
  public set changeStreamRetention(value: string) {
    this._changeStreamRetention = value;
  }
  public resetChangeStreamRetention() {
    this._changeStreamRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeStreamRetentionInput() {
    return this._changeStreamRetention;
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

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: string; 
  public get deletionProtection() {
    return this.getStringAttribute('deletion_protection');
  }
  public set deletionProtection(value: string) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // row_key_schema - computed: false, optional: true, required: false
  private _rowKeySchema?: string; 
  public get rowKeySchema() {
    return this.getStringAttribute('row_key_schema');
  }
  public set rowKeySchema(value: string) {
    this._rowKeySchema = value;
  }
  public resetRowKeySchema() {
    this._rowKeySchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowKeySchemaInput() {
    return this._rowKeySchema;
  }

  // split_keys - computed: false, optional: true, required: false
  private _splitKeys?: string[]; 
  public get splitKeys() {
    return this.getListAttribute('split_keys');
  }
  public set splitKeys(value: string[]) {
    this._splitKeys = value;
  }
  public resetSplitKeys() {
    this._splitKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitKeysInput() {
    return this._splitKeys;
  }

  // automated_backup_policy - computed: false, optional: true, required: false
  private _automatedBackupPolicy = new BigtableTableAutomatedBackupPolicyOutputReference(this, "automated_backup_policy");
  public get automatedBackupPolicy() {
    return this._automatedBackupPolicy;
  }
  public putAutomatedBackupPolicy(value: BigtableTableAutomatedBackupPolicy) {
    this._automatedBackupPolicy.internalValue = value;
  }
  public resetAutomatedBackupPolicy() {
    this._automatedBackupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedBackupPolicyInput() {
    return this._automatedBackupPolicy.internalValue;
  }

  // column_family - computed: false, optional: true, required: false
  private _columnFamily = new BigtableTableColumnFamilyList(this, "column_family", true);
  public get columnFamily() {
    return this._columnFamily;
  }
  public putColumnFamily(value: BigtableTableColumnFamily[] | cdktn.IResolvable) {
    this._columnFamily.internalValue = value;
  }
  public resetColumnFamily() {
    this._columnFamily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnFamilyInput() {
    return this._columnFamily.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigtableTableTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigtableTableTimeouts) {
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
      change_stream_retention: cdktn.stringToTerraform(this._changeStreamRetention),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      deletion_protection: cdktn.stringToTerraform(this._deletionProtection),
      id: cdktn.stringToTerraform(this._id),
      instance_name: cdktn.stringToTerraform(this._instanceName),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      row_key_schema: cdktn.stringToTerraform(this._rowKeySchema),
      split_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(this._splitKeys),
      automated_backup_policy: bigtableTableAutomatedBackupPolicyToTerraform(this._automatedBackupPolicy.internalValue),
      column_family: cdktn.listMapper(bigtableTableColumnFamilyToTerraform, true)(this._columnFamily.internalValue),
      timeouts: bigtableTableTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      change_stream_retention: {
        value: cdktn.stringToHclTerraform(this._changeStreamRetention),
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
      deletion_protection: {
        value: cdktn.stringToHclTerraform(this._deletionProtection),
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
      instance_name: {
        value: cdktn.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      row_key_schema: {
        value: cdktn.stringToHclTerraform(this._rowKeySchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      split_keys: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._splitKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      automated_backup_policy: {
        value: bigtableTableAutomatedBackupPolicyToHclTerraform(this._automatedBackupPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BigtableTableAutomatedBackupPolicyList",
      },
      column_family: {
        value: cdktn.listMapperHcl(bigtableTableColumnFamilyToHclTerraform, true)(this._columnFamily.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BigtableTableColumnFamilyList",
      },
      timeouts: {
        value: bigtableTableTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BigtableTableTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
